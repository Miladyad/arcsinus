document.addEventListener("DOMContentLoaded", function () {

    const TOKEN = "9a69485053e79fdc1c87703b5489154cccca7d70";
    const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";

    const innField = document.getElementById("field3068428");
	const innFieldWrapper =
    innField.closest(".shift") ||
    innField.parentElement;
    innField.setAttribute("maxlength", "12");

    const fields = {
        name: document.getElementById("field3068350"),
        kpp: document.getElementById("field3068427"),
        address: document.getElementById("field3068438"),
        director: document.getElementById("field3068439"),
        post: document.getElementById("field3068440")
    };

    let lastInn = "";

    // Сообщение об ошибке
    const errorMessage = document.createElement("div");

	errorMessage.className = "error";
	errorMessage.style.display = "none";

	errorMessage.innerHTML =
		'Ваш ИНН не найден в реестре. Возможно, допущена ошибка при написании номера ИНН. ' +
		'Пожалуйста, отправьте письмо в свободной форме на адрес ' +
		'<a href="mailto:dov.gashenie@ews.ru">dov.gashenie@ews.ru</a>, ' +
		'с темой «Запрос на подключение».';

	// Добавляем сразу после поля ИНН
	if (innFieldWrapper) {
		innFieldWrapper.appendChild(errorMessage);
	}

    function showError() {

    if (innFieldWrapper) {
        innFieldWrapper.classList.add("error");
	}

		errorMessage.style.display = "block";
	}

	function hideError() {

		if (innFieldWrapper) {
			innFieldWrapper.classList.remove("error");
		}

		errorMessage.style.display = "none";
	}

    function clearFields() {
        Object.values(fields).forEach(field => {
            if (!field) return;

            field.value = "";
            field.disabled = true;
            field.setAttribute("disabled", "disabled");

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

    // Блокируем поля при загрузке страницы
    clearFields();
	
	function isValidInn(inn) {

    if (!/^\d{10}$|^\d{12}$/.test(inn)) {
        return false;
    }

    const digits = inn.split('').map(Number);

    if (inn.length === 10) {
        const k = (
            2 * digits[0] +
            4 * digits[1] +
            10 * digits[2] +
            3 * digits[3] +
            5 * digits[4] +
            9 * digits[5] +
            4 * digits[6] +
            6 * digits[7] +
            8 * digits[8]
        ) % 11 % 10;

        return k === digits[9];
    }

    const k11 = (
        7 * digits[0] +
        2 * digits[1] +
        4 * digits[2] +
        10 * digits[3] +
        3 * digits[4] +
        5 * digits[5] +
        9 * digits[6] +
        4 * digits[7] +
        6 * digits[8] +
        8 * digits[9]
    ) % 11 % 10;

    const k12 = (
        3 * digits[0] +
        7 * digits[1] +
        2 * digits[2] +
        4 * digits[3] +
        10 * digits[4] +
        3 * digits[5] +
        5 * digits[6] +
        9 * digits[7] +
        4 * digits[8] +
        6 * digits[9] +
        8 * digits[10]
    ) % 11 % 10;

    return k11 === digits[10] && k12 === digits[11];
}

    async function loadCompany(inn) {

        inn = inn.replace(/\D/g, "");

        hideError();

       if (!isValidInn(inn)) {
			lastInn = "";
			clearFields();
			showError();
			return;
		}

        // Уже успешно искали этот ИНН
        if (inn === lastInn) {
            return;
        }

        clearFields();

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

            if (!result.suggestions || result.suggestions.length === 0) {
                clearFields();
                showError();
                lastInn = "";
                return;
            }

            const company = result.suggestions[0].data;

            // Запоминаем только успешный поиск
            lastInn = inn;

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

            // Адрес
            setField(fields.address, company.address?.value || "");

            // Руководитель
            let director = company.management?.name || "";

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
            showError();
            lastInn = "";
        }
    }

    innField.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "").slice(0, 12);

        hideError();

    });

    innField.addEventListener("blur", function () {

		this.value = this.value.replace(/\D/g, "").trim();

		loadCompany(this.value);

	});

});
