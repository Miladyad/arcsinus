document.addEventListener("DOMContentLoaded", function () {

    const TOKEN = "9a69485053e79fdc1c87703b5489154cccca7d70";
    const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";

    const innField = document.getElementById("field3068428");

    const fields = {
        name: document.getElementById("field3068350"),
        kpp: document.getElementById("field3068427"),
        address: document.getElementById("field3068438"),
        director: document.getElementById("field3068439"),
        post: document.getElementById("field3068440")
    };
    // При загрузке страницы блокируем поля
    Object.values(fields).forEach(field => {
        if (!field) return;
    
        field.value = "";
        field.disabled = true;
        field.setAttribute("disabled", "disabled");
    });

    let lastInn = "";

    // Сообщение об ошибке
    const errorMessage = document.createElement("div");
    errorMessage.style.color = "#d32f2f";
    errorMessage.style.fontSize = "13px";
    errorMessage.style.marginTop = "6px";
    errorMessage.style.lineHeight = "1.4";
    errorMessage.style.display = "none";

    errorMessage.innerHTML =
        'Ваш ИНН не найден в реестре. Возможно, допущена ошибка при написании номера ИНН. ' +
        'Пожалуйста, отправьте письмо в свободной форме на адрес ' +
        '<a href="mailto:dov.gashenie@ews.ru">dov.gashenie@ews.ru</a>, ' +
        'с темой «Запрос на подключение».';

    innField.insertAdjacentElement("afterend", errorMessage);

    function showError() {
        errorMessage.style.display = "block";
    }

    function hideError() {
        errorMessage.style.display = "none";
    }

    function clearFields() {
        Object.values(fields).forEach(field => {
            if (!field) return;

            field.value = "";
            field.disabled = true;

            field.dispatchEvent(new Event("input", { bubbles: true }));
            field.dispatchEvent(new Event("change", { bubbles: true }));
        });
    }

    function enableFields() {
        Object.values(fields).forEach(field => {
            if (!field) return;

            field.disabled = false;
            field.removeAttribute("disabled");
        });
    }

    function setField(field, value) {
        if (!field) return;

        field.value = value || "";

        field.dispatchEvent(new Event("input", { bubbles: true }));
        field.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // При загрузке страницы все поля заблокированы
    clearFields();

    async function loadCompany(inn) {

        inn = inn.replace(/\D/g, "");

        // Не делать повторный запрос
        if (inn === lastInn) {
            return;
        }

        lastInn = inn;

        hideError();

        // Проверка длины ИНН
        if (!(inn.length === 10 || inn.length === 12)) {
            clearFields();
            return;
        }

        try {

            const response = await fetch(URL, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + TOKEN
                },
                body: JSON.stringify({
                    query: inn,
                    branch_type: "MAIN"
                })
            });

            const result = await response.json();

            // Организация не найдена
            if (!result.suggestions || result.suggestions.length === 0) {
                clearFields();
                showError();
                return;
            }

            const company = result.suggestions[0].data;

            enableFields();

            // Наименование
            if (company.type === "INDIVIDUAL") {
                setField(fields.name, result.suggestions[0].value);
            } else {
                setField(
                    fields.name,
                    company.name?.short_with_opf || result.suggestions[0].value
                );
            }

            // КПП
            setField(fields.kpp, company.kpp || "");

            // Юридический адрес
            setField(fields.address, company.address?.value || "");

            // Руководитель
            let director = company.management?.name || "";
            
            // Если у ИП нет руководителя в Dadata,
            // пытаемся извлечь ФИО из названия только если оно имеет вид
            // "ИП Фамилия Имя Отчество" или
            // "Индивидуальный предприниматель Фамилия Имя Отчество"
            if (!director && company.type === "INDIVIDUAL") {
            
                const title = result.suggestions[0].value || "";
            
                const match = title.match(
                    /^(?:ИП|Индивидуальный предприниматель)\s+([А-ЯЁ][а-яё-]+)\s+([А-ЯЁ][а-яё-]+)\s+([А-ЯЁ][а-яё-]+)$/i
                );
            
                if (match) {
                    director = `${match[1]} ${match[2]} ${match[3]}`;
                }
            }
            
            setField(fields.director, director);

            // Должность
            setField(fields.post, company.management?.post || "");

        } catch (e) {
            console.error("Dadata error:", e);
            clearFields();
        }
    }

    let timer;

    innField.addEventListener("input", function () {

        hideError();

        clearTimeout(timer);

        timer = setTimeout(() => {
            loadCompany(this.value);
        }, 500);

    });

    innField.addEventListener("blur", function () {
        loadCompany(this.value);
    });

});
