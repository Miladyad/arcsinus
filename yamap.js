const LOCATION = {center: [37.622091, 55.765291], zoom: 14};
      window.map = null;

      main();
      async function main() {
        await ymaps3.ready;
        const {YMap, YMapControls, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

        const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

        map = new YMap(document.getElementById('app'), {location: LOCATION});

        map.addChild(new YMapDefaultFeaturesLayer());
        map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

        map.addChild(new YMapDefaultSchemeLayer({
        theme: "dark", customization: [
        {
            "tags": "country",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#3333ff"
                },
                {
                    "zoom": 0,
                    "opacity": 0.8
                },
                {
                    "zoom": 1,
                    "opacity": 0.8
                },
                {
                    "zoom": 2,
                    "opacity": 0.8
                },
                {
                    "zoom": 3,
                    "opacity": 0.8
                },
                {
                    "zoom": 4,
                    "opacity": 0.8
                },
                {
                    "zoom": 5,
                    "opacity": 1
                },
                {
                    "zoom": 6,
                    "opacity": 1
                },
                {
                    "zoom": 7,
                    "opacity": 1
                },
                {
                    "zoom": 8,
                    "opacity": 1
                },
                {
                    "zoom": 9,
                    "opacity": 1
                },
                {
                    "zoom": 10,
                    "opacity": 1
                },
                {
                    "zoom": 11,
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "country",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#2121ba"
                },
                {
                    "zoom": 0,
                    "opacity": 0.15
                },
                {
                    "zoom": 1,
                    "opacity": 0.15
                },
                {
                    "zoom": 2,
                    "opacity": 0.15
                },
                {
                    "zoom": 3,
                    "opacity": 0.15
                },
                {
                    "zoom": 4,
                    "opacity": 0.15
                },
                {
                    "zoom": 5,
                    "opacity": 0.15
                },
                {
                    "zoom": 6,
                    "opacity": 0.25
                },
                {
                    "zoom": 7,
                    "opacity": 0.5
                },
                {
                    "zoom": 8,
                    "opacity": 0.47
                },
                {
                    "zoom": 9,
                    "opacity": 0.44
                },
                {
                    "zoom": 10,
                    "opacity": 0.41
                },
                {
                    "zoom": 11,
                    "opacity": 0.38
                },
                {
                    "zoom": 12,
                    "opacity": 0.35
                },
                {
                    "zoom": 13,
                    "opacity": 0.33
                },
                {
                    "zoom": 14,
                    "opacity": 0.3
                },
                {
                    "zoom": 15,
                    "opacity": 0.28
                },
                {
                    "zoom": 16,
                    "opacity": 0.25
                },
                {
                    "zoom": 17,
                    "opacity": 0.25
                },
                {
                    "zoom": 18,
                    "opacity": 0.25
                },
                {
                    "zoom": 19,
                    "opacity": 0.25
                },
                {
                    "zoom": 20,
                    "opacity": 0.25
                },
                {
                    "zoom": 21,
                    "opacity": 0.25
                }
            ]
        },
        {
            "tags": "region",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#0000ff",
                    "opacity": 0.5
                },
                {
                    "zoom": 1,
                    "color": "#0000ff",
                    "opacity": 0.5
                },
                {
                    "zoom": 2,
                    "color": "#0000ff",
                    "opacity": 0.5
                },
                {
                    "zoom": 3,
                    "color": "#0000ff",
                    "opacity": 0.5
                },
                {
                    "zoom": 4,
                    "color": "#0000ff",
                    "opacity": 0.5
                },
                {
                    "zoom": 5,
                    "color": "#0000ff",
                    "opacity": 0.5
                },
                {
                    "zoom": 6,
                    "color": "#0000ff",
                    "opacity": 1
                },
                {
                    "zoom": 7,
                    "color": "#0000ff",
                    "opacity": 1
                },
                {
                    "zoom": 8,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 9,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 10,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 11,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "color": "#3333ff",
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "color": "#3333ff",
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "region",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#2121ba"
                },
                {
                    "zoom": 0,
                    "opacity": 0.15
                },
                {
                    "zoom": 1,
                    "opacity": 0.15
                },
                {
                    "zoom": 2,
                    "opacity": 0.15
                },
                {
                    "zoom": 3,
                    "opacity": 0.15
                },
                {
                    "zoom": 4,
                    "opacity": 0.15
                },
                {
                    "zoom": 5,
                    "opacity": 0.15
                },
                {
                    "zoom": 6,
                    "opacity": 0.25
                },
                {
                    "zoom": 7,
                    "opacity": 0.5
                },
                {
                    "zoom": 8,
                    "opacity": 0.47
                },
                {
                    "zoom": 9,
                    "opacity": 0.44
                },
                {
                    "zoom": 10,
                    "opacity": 0.41
                },
                {
                    "zoom": 11,
                    "opacity": 0.38
                },
                {
                    "zoom": 12,
                    "opacity": 0.35
                },
                {
                    "zoom": 13,
                    "opacity": 0.33
                },
                {
                    "zoom": 14,
                    "opacity": 0.3
                },
                {
                    "zoom": 15,
                    "opacity": 0.28
                },
                {
                    "zoom": 16,
                    "opacity": 0.25
                },
                {
                    "zoom": 17,
                    "opacity": 0.25
                },
                {
                    "zoom": 18,
                    "opacity": 0.25
                },
                {
                    "zoom": 19,
                    "opacity": 0.25
                },
                {
                    "zoom": 20,
                    "opacity": 0.25
                },
                {
                    "zoom": 21,
                    "opacity": 0.25
                }
            ]
        },
        {
            "tags": {
                "any": "admin",
                "none": [
                    "country",
                    "region",
                    "locality",
                    "district",
                    "address"
                ]
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#3333ff"
                },
                {
                    "zoom": 0,
                    "opacity": 0.5
                },
                {
                    "zoom": 1,
                    "opacity": 0.5
                },
                {
                    "zoom": 2,
                    "opacity": 0.5
                },
                {
                    "zoom": 3,
                    "opacity": 0.5
                },
                {
                    "zoom": 4,
                    "opacity": 0.5
                },
                {
                    "zoom": 5,
                    "opacity": 0.5
                },
                {
                    "zoom": 6,
                    "opacity": 1
                },
                {
                    "zoom": 7,
                    "opacity": 1
                },
                {
                    "zoom": 8,
                    "opacity": 1
                },
                {
                    "zoom": 9,
                    "opacity": 1
                },
                {
                    "zoom": 10,
                    "opacity": 1
                },
                {
                    "zoom": 11,
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": {
                "any": "admin",
                "none": [
                    "country",
                    "region",
                    "locality",
                    "district",
                    "address"
                ]
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#2121ba"
                },
                {
                    "zoom": 0,
                    "opacity": 0.15
                },
                {
                    "zoom": 1,
                    "opacity": 0.15
                },
                {
                    "zoom": 2,
                    "opacity": 0.15
                },
                {
                    "zoom": 3,
                    "opacity": 0.15
                },
                {
                    "zoom": 4,
                    "opacity": 0.15
                },
                {
                    "zoom": 5,
                    "opacity": 0.15
                },
                {
                    "zoom": 6,
                    "opacity": 0.25
                },
                {
                    "zoom": 7,
                    "opacity": 0.5
                },
                {
                    "zoom": 8,
                    "opacity": 0.47
                },
                {
                    "zoom": 9,
                    "opacity": 0.44
                },
                {
                    "zoom": 10,
                    "opacity": 0.41
                },
                {
                    "zoom": 11,
                    "opacity": 0.38
                },
                {
                    "zoom": 12,
                    "opacity": 0.35
                },
                {
                    "zoom": 13,
                    "opacity": 0.33
                },
                {
                    "zoom": 14,
                    "opacity": 0.3
                },
                {
                    "zoom": 15,
                    "opacity": 0.28
                },
                {
                    "zoom": 16,
                    "opacity": 0.25
                },
                {
                    "zoom": 17,
                    "opacity": 0.25
                },
                {
                    "zoom": 18,
                    "opacity": 0.25
                },
                {
                    "zoom": 19,
                    "opacity": 0.25
                },
                {
                    "zoom": 20,
                    "opacity": 0.25
                },
                {
                    "zoom": 21,
                    "opacity": 0.25
                }
            ]
        },
        {
            "tags": {
                "any": "landcover",
                "none": "vegetation"
            },
            "stylers": [
                {
                    "hue": "#2d2d86"
                }
            ]
        },
        {
            "tags": "vegetation",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#3939ac",
                    "opacity": 0.1
                },
                {
                    "zoom": 1,
                    "color": "#3939ac",
                    "opacity": 0.1
                },
                {
                    "zoom": 2,
                    "color": "#3939ac",
                    "opacity": 0.1
                },
                {
                    "zoom": 3,
                    "color": "#3939ac",
                    "opacity": 0.1
                },
                {
                    "zoom": 4,
                    "color": "#3939ac",
                    "opacity": 0.1
                },
                {
                    "zoom": 5,
                    "color": "#3939ac",
                    "opacity": 0.1
                },
                {
                    "zoom": 6,
                    "color": "#3939ac",
                    "opacity": 0.2
                },
                {
                    "zoom": 7,
                    "color": "#2d2d86",
                    "opacity": 0.3
                },
                {
                    "zoom": 8,
                    "color": "#2d2d86",
                    "opacity": 0.4
                },
                {
                    "zoom": 9,
                    "color": "#2d2d86",
                    "opacity": 0.6
                },
                {
                    "zoom": 10,
                    "color": "#2d2d86",
                    "opacity": 0.8
                },
                {
                    "zoom": 11,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "color": "#2b2b7f",
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "color": "#282877",
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "color": "#282877",
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "color": "#282877",
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "color": "#282877",
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "color": "#282877",
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "color": "#282877",
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "color": "#282877",
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "park",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 1,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 2,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 3,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 4,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 5,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 6,
                    "color": "#2d2d86",
                    "opacity": 0.2
                },
                {
                    "zoom": 7,
                    "color": "#2d2d86",
                    "opacity": 0.3
                },
                {
                    "zoom": 8,
                    "color": "#2d2d86",
                    "opacity": 0.4
                },
                {
                    "zoom": 9,
                    "color": "#2d2d86",
                    "opacity": 0.6
                },
                {
                    "zoom": 10,
                    "color": "#2d2d86",
                    "opacity": 0.8
                },
                {
                    "zoom": 11,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "color": "#2b2b7f",
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "color": "#282877",
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "color": "#282877",
                    "opacity": 0.9
                },
                {
                    "zoom": 17,
                    "color": "#282877",
                    "opacity": 0.8
                },
                {
                    "zoom": 18,
                    "color": "#282877",
                    "opacity": 0.7
                },
                {
                    "zoom": 19,
                    "color": "#282877",
                    "opacity": 0.7
                },
                {
                    "zoom": 20,
                    "color": "#282877",
                    "opacity": 0.7
                },
                {
                    "zoom": 21,
                    "color": "#282877",
                    "opacity": 0.7
                }
            ]
        },
        {
            "tags": "national_park",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 1,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 2,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 3,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 4,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 5,
                    "color": "#2d2d86",
                    "opacity": 0.1
                },
                {
                    "zoom": 6,
                    "color": "#2d2d86",
                    "opacity": 0.2
                },
                {
                    "zoom": 7,
                    "color": "#2d2d86",
                    "opacity": 0.3
                },
                {
                    "zoom": 8,
                    "color": "#2d2d86",
                    "opacity": 0.4
                },
                {
                    "zoom": 9,
                    "color": "#2d2d86",
                    "opacity": 0.6
                },
                {
                    "zoom": 10,
                    "color": "#2d2d86",
                    "opacity": 0.8
                },
                {
                    "zoom": 11,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "color": "#2b2b7f",
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "color": "#282877",
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "color": "#282877",
                    "opacity": 0.7
                },
                {
                    "zoom": 17,
                    "color": "#282877",
                    "opacity": 0.7
                },
                {
                    "zoom": 18,
                    "color": "#282877",
                    "opacity": 0.7
                },
                {
                    "zoom": 19,
                    "color": "#282877",
                    "opacity": 0.7
                },
                {
                    "zoom": 20,
                    "color": "#282877",
                    "opacity": 0.7
                },
                {
                    "zoom": 21,
                    "color": "#282877",
                    "opacity": 0.7
                }
            ]
        },
        {
            "tags": "cemetery",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 1,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 2,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 3,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 4,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 5,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 6,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 7,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 8,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 9,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 10,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 11,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 12,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 13,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 14,
                    "color": "#2b2b7f"
                },
                {
                    "zoom": 15,
                    "color": "#282877"
                },
                {
                    "zoom": 16,
                    "color": "#282877"
                },
                {
                    "zoom": 17,
                    "color": "#282877"
                },
                {
                    "zoom": 18,
                    "color": "#282877"
                },
                {
                    "zoom": 19,
                    "color": "#282877"
                },
                {
                    "zoom": 20,
                    "color": "#282877"
                },
                {
                    "zoom": 21,
                    "color": "#282877"
                }
            ]
        },
        {
            "tags": "sports_ground",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 1,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 2,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 3,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 4,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 5,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 6,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 7,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 8,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 9,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 10,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 11,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 12,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 13,
                    "color": "#333399",
                    "opacity": 0
                },
                {
                    "zoom": 14,
                    "color": "#313192",
                    "opacity": 0
                },
                {
                    "zoom": 15,
                    "color": "#2e2e8a",
                    "opacity": 0.5
                },
                {
                    "zoom": 16,
                    "color": "#2e2e89",
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "color": "#2d2d87",
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "color": "#2c2c85",
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "color": "#2c2c83",
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "color": "#2b2b82",
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "terrain",
            "elements": "geometry",
            "stylers": [
                {
                    "hue": "#333399"
                },
                {
                    "zoom": 0,
                    "opacity": 0.3
                },
                {
                    "zoom": 1,
                    "opacity": 0.3
                },
                {
                    "zoom": 2,
                    "opacity": 0.3
                },
                {
                    "zoom": 3,
                    "opacity": 0.3
                },
                {
                    "zoom": 4,
                    "opacity": 0.3
                },
                {
                    "zoom": 5,
                    "opacity": 0.35
                },
                {
                    "zoom": 6,
                    "opacity": 0.4
                },
                {
                    "zoom": 7,
                    "opacity": 0.6
                },
                {
                    "zoom": 8,
                    "opacity": 0.8
                },
                {
                    "zoom": 9,
                    "opacity": 0.9
                },
                {
                    "zoom": 10,
                    "opacity": 1
                },
                {
                    "zoom": 11,
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "geographic_line",
            "elements": "geometry",
            "stylers": [
                {
                    "color": "#b3b3e6"
                }
            ]
        },
        {
            "tags": "land",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#333399"
                },
                {
                    "zoom": 1,
                    "color": "#333399"
                },
                {
                    "zoom": 2,
                    "color": "#333399"
                },
                {
                    "zoom": 3,
                    "color": "#333399"
                },
                {
                    "zoom": 4,
                    "color": "#333399"
                },
                {
                    "zoom": 5,
                    "color": "#323295"
                },
                {
                    "zoom": 6,
                    "color": "#313192"
                },
                {
                    "zoom": 7,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 8,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 9,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 10,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 11,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 12,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 13,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 14,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 15,
                    "color": "#2b2b82"
                },
                {
                    "zoom": 16,
                    "color": "#2b2b81"
                },
                {
                    "zoom": 17,
                    "color": "#2b2b81"
                },
                {
                    "zoom": 18,
                    "color": "#2b2b80"
                },
                {
                    "zoom": 19,
                    "color": "#2a2a7f"
                },
                {
                    "zoom": 20,
                    "color": "#2a2a7f"
                },
                {
                    "zoom": 21,
                    "color": "#2a2a7e"
                }
            ]
        },
        {
            "tags": "residential",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 1,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 2,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 3,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 4,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 5,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 6,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 7,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 8,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 9,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 10,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 11,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 12,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 13,
                    "color": "#333399",
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "color": "#313192",
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "color": "#2e2e8a",
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "color": "#2e2e89",
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "color": "#2d2d87",
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "color": "#2c2c85",
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "color": "#2c2c83",
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "color": "#2b2b82",
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "locality",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#333399"
                },
                {
                    "zoom": 1,
                    "color": "#333399"
                },
                {
                    "zoom": 2,
                    "color": "#333399"
                },
                {
                    "zoom": 3,
                    "color": "#333399"
                },
                {
                    "zoom": 4,
                    "color": "#333399"
                },
                {
                    "zoom": 5,
                    "color": "#333399"
                },
                {
                    "zoom": 6,
                    "color": "#333399"
                },
                {
                    "zoom": 7,
                    "color": "#333399"
                },
                {
                    "zoom": 8,
                    "color": "#333399"
                },
                {
                    "zoom": 9,
                    "color": "#333399"
                },
                {
                    "zoom": 10,
                    "color": "#333399"
                },
                {
                    "zoom": 11,
                    "color": "#333399"
                },
                {
                    "zoom": 12,
                    "color": "#333399"
                },
                {
                    "zoom": 13,
                    "color": "#333399"
                },
                {
                    "zoom": 14,
                    "color": "#313192"
                },
                {
                    "zoom": 15,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 16,
                    "color": "#2e2e89"
                },
                {
                    "zoom": 17,
                    "color": "#2d2d87"
                },
                {
                    "zoom": 18,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 19,
                    "color": "#2c2c85"
                },
                {
                    "zoom": 20,
                    "color": "#2c2c83"
                },
                {
                    "zoom": 21,
                    "color": "#2b2b82"
                }
            ]
        },
        {
            "tags": {
                "any": "structure",
                "none": [
                    "building",
                    "fence"
                ]
            },
            "elements": "geometry",
            "stylers": [
                {
                    "opacity": 0.9
                },
                {
                    "zoom": 0,
                    "color": "#333399"
                },
                {
                    "zoom": 1,
                    "color": "#333399"
                },
                {
                    "zoom": 2,
                    "color": "#333399"
                },
                {
                    "zoom": 3,
                    "color": "#333399"
                },
                {
                    "zoom": 4,
                    "color": "#333399"
                },
                {
                    "zoom": 5,
                    "color": "#333399"
                },
                {
                    "zoom": 6,
                    "color": "#333399"
                },
                {
                    "zoom": 7,
                    "color": "#333399"
                },
                {
                    "zoom": 8,
                    "color": "#333399"
                },
                {
                    "zoom": 9,
                    "color": "#333399"
                },
                {
                    "zoom": 10,
                    "color": "#333399"
                },
                {
                    "zoom": 11,
                    "color": "#333399"
                },
                {
                    "zoom": 12,
                    "color": "#333399"
                },
                {
                    "zoom": 13,
                    "color": "#333399"
                },
                {
                    "zoom": 14,
                    "color": "#313192"
                },
                {
                    "zoom": 15,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 16,
                    "color": "#2e2e89"
                },
                {
                    "zoom": 17,
                    "color": "#2d2d87"
                },
                {
                    "zoom": 18,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 19,
                    "color": "#2c2c85"
                },
                {
                    "zoom": 20,
                    "color": "#2c2c83"
                },
                {
                    "zoom": 21,
                    "color": "#2b2b82"
                }
            ]
        },
        {
            "tags": "building",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#333399"
                },
                {
                    "zoom": 0,
                    "opacity": 0.7
                },
                {
                    "zoom": 1,
                    "opacity": 0.7
                },
                {
                    "zoom": 2,
                    "opacity": 0.7
                },
                {
                    "zoom": 3,
                    "opacity": 0.7
                },
                {
                    "zoom": 4,
                    "opacity": 0.7
                },
                {
                    "zoom": 5,
                    "opacity": 0.7
                },
                {
                    "zoom": 6,
                    "opacity": 0.7
                },
                {
                    "zoom": 7,
                    "opacity": 0.7
                },
                {
                    "zoom": 8,
                    "opacity": 0.7
                },
                {
                    "zoom": 9,
                    "opacity": 0.7
                },
                {
                    "zoom": 10,
                    "opacity": 0.7
                },
                {
                    "zoom": 11,
                    "opacity": 0.7
                },
                {
                    "zoom": 12,
                    "opacity": 0.7
                },
                {
                    "zoom": 13,
                    "opacity": 0.7
                },
                {
                    "zoom": 14,
                    "opacity": 0.7
                },
                {
                    "zoom": 15,
                    "opacity": 0.7
                },
                {
                    "zoom": 16,
                    "opacity": 0.9
                },
                {
                    "zoom": 17,
                    "opacity": 0.6
                },
                {
                    "zoom": 18,
                    "opacity": 0.6
                },
                {
                    "zoom": 19,
                    "opacity": 0.6
                },
                {
                    "zoom": 20,
                    "opacity": 0.6
                },
                {
                    "zoom": 21,
                    "opacity": 0.6
                }
            ]
        },
        {
            "tags": "building",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "color": "#3d3db8"
                },
                {
                    "zoom": 0,
                    "opacity": 0.5
                },
                {
                    "zoom": 1,
                    "opacity": 0.5
                },
                {
                    "zoom": 2,
                    "opacity": 0.5
                },
                {
                    "zoom": 3,
                    "opacity": 0.5
                },
                {
                    "zoom": 4,
                    "opacity": 0.5
                },
                {
                    "zoom": 5,
                    "opacity": 0.5
                },
                {
                    "zoom": 6,
                    "opacity": 0.5
                },
                {
                    "zoom": 7,
                    "opacity": 0.5
                },
                {
                    "zoom": 8,
                    "opacity": 0.5
                },
                {
                    "zoom": 9,
                    "opacity": 0.5
                },
                {
                    "zoom": 10,
                    "opacity": 0.5
                },
                {
                    "zoom": 11,
                    "opacity": 0.5
                },
                {
                    "zoom": 12,
                    "opacity": 0.5
                },
                {
                    "zoom": 13,
                    "opacity": 0.5
                },
                {
                    "zoom": 14,
                    "opacity": 0.5
                },
                {
                    "zoom": 15,
                    "opacity": 0.5
                },
                {
                    "zoom": 16,
                    "opacity": 0.5
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": {
                "any": "urban_area",
                "none": [
                    "residential",
                    "industrial",
                    "cemetery",
                    "park",
                    "medical",
                    "sports_ground",
                    "beach",
                    "construction_site"
                ]
            },
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 1,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 2,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 3,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 4,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 5,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 6,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 7,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 8,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 9,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 10,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 11,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "color": "#3838a8",
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "color": "#35359f",
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "color": "#323295",
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "color": "#2f2f8c",
                    "opacity": 0.67
                },
                {
                    "zoom": 17,
                    "color": "#2b2b82",
                    "opacity": 0.33
                },
                {
                    "zoom": 18,
                    "color": "#2b2b82",
                    "opacity": 0
                },
                {
                    "zoom": 19,
                    "color": "#2b2b82",
                    "opacity": 0
                },
                {
                    "zoom": 20,
                    "color": "#2b2b82",
                    "opacity": 0
                },
                {
                    "zoom": 21,
                    "color": "#2b2b82",
                    "opacity": 0
                }
            ]
        },
        {
            "tags": "poi",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "poi",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "poi",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "outdoor",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "outdoor",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "outdoor",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "park",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "park",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "park",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "cemetery",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "cemetery",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "cemetery",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "beach",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "beach",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "beach",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "medical",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "medical",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "medical",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "shopping",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "shopping",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "shopping",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "commercial_services",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "commercial_services",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "commercial_services",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "food_and_drink",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "food_and_drink",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "food_and_drink",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.icon",
            "types": "point",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.text.fill",
            "types": "point",
            "stylers": [
                {
                    "color": "#b3b3ff"
                }
            ]
        },
        {
            "tags": "entrance",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                },
                {
                    "hue": "#3333ff"
                }
            ]
        },
        {
            "tags": "locality",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#00004d"
                },
                {
                    "secondary-color": "#b3b3ff"
                }
            ]
        },
        {
            "tags": "country",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "opacity": 0.8
                },
                {
                    "color": "#8c8cd9"
                }
            ]
        },
        {
            "tags": "country",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "region",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#8c8cd9"
                },
                {
                    "opacity": 0.8
                }
            ]
        },
        {
            "tags": "region",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "district",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#8c8cd9"
                },
                {
                    "opacity": 0.8
                }
            ]
        },
        {
            "tags": "district",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": {
                "any": "admin",
                "none": [
                    "country",
                    "region",
                    "locality",
                    "district",
                    "address"
                ]
            },
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#8c8cd9"
                }
            ]
        },
        {
            "tags": {
                "any": "admin",
                "none": [
                    "country",
                    "region",
                    "locality",
                    "district",
                    "address"
                ]
            },
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "locality",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#c6c6ec"
                },
                {
                    "zoom": 1,
                    "color": "#c6c6ec"
                },
                {
                    "zoom": 2,
                    "color": "#c6c6ec"
                },
                {
                    "zoom": 3,
                    "color": "#c6c6ec"
                },
                {
                    "zoom": 4,
                    "color": "#c6c6ec"
                },
                {
                    "zoom": 5,
                    "color": "#c9c9ed"
                },
                {
                    "zoom": 6,
                    "color": "#ccccee"
                },
                {
                    "zoom": 7,
                    "color": "#cfcfef"
                },
                {
                    "zoom": 8,
                    "color": "#d3d3f0"
                },
                {
                    "zoom": 9,
                    "color": "#d6d6f1"
                },
                {
                    "zoom": 10,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 11,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 12,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 13,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 14,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 15,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 16,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 17,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 18,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 19,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 20,
                    "color": "#d9d9f2"
                },
                {
                    "zoom": 21,
                    "color": "#d9d9f2"
                }
            ]
        },
        {
            "tags": "locality",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.text.fill",
            "types": "polyline",
            "stylers": [
                {
                    "color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.text.outline",
            "types": "polyline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "road",
            "elements": "geometry.fill.pattern",
            "types": "polyline",
            "stylers": [
                {
                    "scale": 1
                },
                {
                    "color": "#7979d2"
                }
            ]
        },
        {
            "tags": "road",
            "elements": "label.text.fill",
            "types": "point",
            "stylers": [
                {
                    "color": "#b3b3ff"
                }
            ]
        },
        {
            "tags": "structure",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#333399"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "structure",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "address",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#333399"
                },
                {
                    "zoom": 0,
                    "opacity": 0.9
                },
                {
                    "zoom": 1,
                    "opacity": 0.9
                },
                {
                    "zoom": 2,
                    "opacity": 0.9
                },
                {
                    "zoom": 3,
                    "opacity": 0.9
                },
                {
                    "zoom": 4,
                    "opacity": 0.9
                },
                {
                    "zoom": 5,
                    "opacity": 0.9
                },
                {
                    "zoom": 6,
                    "opacity": 0.9
                },
                {
                    "zoom": 7,
                    "opacity": 0.9
                },
                {
                    "zoom": 8,
                    "opacity": 0.9
                },
                {
                    "zoom": 9,
                    "opacity": 0.9
                },
                {
                    "zoom": 10,
                    "opacity": 0.9
                },
                {
                    "zoom": 11,
                    "opacity": 0.9
                },
                {
                    "zoom": 12,
                    "opacity": 0.9
                },
                {
                    "zoom": 13,
                    "opacity": 0.9
                },
                {
                    "zoom": 14,
                    "opacity": 0.9
                },
                {
                    "zoom": 15,
                    "opacity": 0.9
                },
                {
                    "zoom": 16,
                    "opacity": 0.9
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "address",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "landscape",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#8c8cd9",
                    "opacity": 1
                },
                {
                    "zoom": 1,
                    "color": "#8c8cd9",
                    "opacity": 1
                },
                {
                    "zoom": 2,
                    "color": "#8c8cd9",
                    "opacity": 1
                },
                {
                    "zoom": 3,
                    "color": "#8c8cd9",
                    "opacity": 1
                },
                {
                    "zoom": 4,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 5,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 6,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 7,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 8,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 9,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 10,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 11,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 12,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 13,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 14,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 15,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 16,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 17,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 18,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 19,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 20,
                    "color": "#333399",
                    "opacity": 0.5
                },
                {
                    "zoom": 21,
                    "color": "#333399",
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": "landscape",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "zoom": 0,
                    "opacity": 0.5
                },
                {
                    "zoom": 1,
                    "opacity": 0.5
                },
                {
                    "zoom": 2,
                    "opacity": 0.5
                },
                {
                    "zoom": 3,
                    "opacity": 0.5
                },
                {
                    "zoom": 4,
                    "opacity": 0
                },
                {
                    "zoom": 5,
                    "opacity": 0
                },
                {
                    "zoom": 6,
                    "opacity": 0
                },
                {
                    "zoom": 7,
                    "opacity": 0
                },
                {
                    "zoom": 8,
                    "opacity": 0
                },
                {
                    "zoom": 9,
                    "opacity": 0
                },
                {
                    "zoom": 10,
                    "opacity": 0
                },
                {
                    "zoom": 11,
                    "opacity": 0
                },
                {
                    "zoom": 12,
                    "opacity": 0
                },
                {
                    "zoom": 13,
                    "opacity": 0
                },
                {
                    "zoom": 14,
                    "opacity": 0
                },
                {
                    "zoom": 15,
                    "opacity": 0
                },
                {
                    "zoom": 16,
                    "opacity": 0
                },
                {
                    "zoom": 17,
                    "opacity": 0
                },
                {
                    "zoom": 18,
                    "opacity": 0
                },
                {
                    "zoom": 19,
                    "opacity": 0
                },
                {
                    "zoom": 20,
                    "opacity": 0
                },
                {
                    "zoom": 21,
                    "opacity": 0
                }
            ]
        },
        {
            "tags": "water",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#2424ff"
                },
                {
                    "opacity": 0.8
                }
            ]
        },
        {
            "tags": "water",
            "elements": "label.text.outline",
            "types": "polyline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.2
                }
            ]
        },
        {
            "tags": {
                "any": "road_1",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 2.64
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 2.84
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 3.13
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 3.55
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 3.21
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 2.72
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 2.35
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 2.02
                },
                {
                    "zoom": 14,
                    "color": "#4646c0",
                    "scale": 1.81
                },
                {
                    "zoom": 15,
                    "color": "#4444bf",
                    "scale": 1.69
                },
                {
                    "zoom": 16,
                    "color": "#4343bd",
                    "scale": 1.66
                },
                {
                    "zoom": 17,
                    "color": "#4242bb",
                    "scale": 1.31
                },
                {
                    "zoom": 18,
                    "color": "#4040b9",
                    "scale": 1.08
                },
                {
                    "zoom": 19,
                    "color": "#3f3fb8",
                    "scale": 0.93
                },
                {
                    "zoom": 20,
                    "color": "#3d3db6",
                    "scale": 0.84
                },
                {
                    "zoom": 21,
                    "color": "#3c3cb4",
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_1"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 5,
                    "color": "#29297a",
                    "scale": 0.9
                },
                {
                    "zoom": 6,
                    "color": "#29297a",
                    "scale": 1.96
                },
                {
                    "zoom": 7,
                    "color": "#29297a",
                    "scale": 1.96
                },
                {
                    "zoom": 8,
                    "color": "#29297a",
                    "scale": 2.02
                },
                {
                    "zoom": 9,
                    "color": "#29297a",
                    "scale": 2.16
                },
                {
                    "zoom": 10,
                    "color": "#29297a",
                    "scale": 2.16
                },
                {
                    "zoom": 11,
                    "color": "#29297a",
                    "scale": 2.04
                },
                {
                    "zoom": 12,
                    "color": "#29297a",
                    "scale": 1.93
                },
                {
                    "zoom": 13,
                    "color": "#29297a",
                    "scale": 1.8
                },
                {
                    "zoom": 14,
                    "color": "#29297a",
                    "scale": 1.71
                },
                {
                    "zoom": 15,
                    "color": "#29297a",
                    "scale": 1.68
                },
                {
                    "zoom": 16,
                    "color": "#29297a",
                    "scale": 1.7
                },
                {
                    "zoom": 17,
                    "color": "#29297a",
                    "scale": 1.38
                },
                {
                    "zoom": 18,
                    "color": "#29297a",
                    "scale": 1.15
                },
                {
                    "zoom": 19,
                    "color": "#29297a",
                    "scale": 1
                },
                {
                    "zoom": 20,
                    "color": "#29297a",
                    "scale": 0.91
                },
                {
                    "zoom": 21,
                    "color": "#29297a",
                    "scale": 0.87
                }
            ]
        },
        {
            "tags": {
                "any": "road_2",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 2.64
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 2.84
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 3.13
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 3.55
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 3.21
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 2.72
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 2.35
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 2.02
                },
                {
                    "zoom": 14,
                    "color": "#4646c0",
                    "scale": 1.81
                },
                {
                    "zoom": 15,
                    "color": "#4444bf",
                    "scale": 1.69
                },
                {
                    "zoom": 16,
                    "color": "#4343bd",
                    "scale": 1.66
                },
                {
                    "zoom": 17,
                    "color": "#4242bb",
                    "scale": 1.31
                },
                {
                    "zoom": 18,
                    "color": "#4040b9",
                    "scale": 1.08
                },
                {
                    "zoom": 19,
                    "color": "#3f3fb8",
                    "scale": 0.93
                },
                {
                    "zoom": 20,
                    "color": "#3d3db6",
                    "scale": 0.84
                },
                {
                    "zoom": 21,
                    "color": "#3c3cb4",
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_2"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 5,
                    "color": "#29297a",
                    "scale": 0.9
                },
                {
                    "zoom": 6,
                    "color": "#29297a",
                    "scale": 1.96
                },
                {
                    "zoom": 7,
                    "color": "#29297a",
                    "scale": 1.96
                },
                {
                    "zoom": 8,
                    "color": "#29297a",
                    "scale": 2.02
                },
                {
                    "zoom": 9,
                    "color": "#29297a",
                    "scale": 2.16
                },
                {
                    "zoom": 10,
                    "color": "#29297a",
                    "scale": 2.16
                },
                {
                    "zoom": 11,
                    "color": "#29297a",
                    "scale": 2.04
                },
                {
                    "zoom": 12,
                    "color": "#29297a",
                    "scale": 1.93
                },
                {
                    "zoom": 13,
                    "color": "#29297a",
                    "scale": 1.8
                },
                {
                    "zoom": 14,
                    "color": "#29297a",
                    "scale": 1.71
                },
                {
                    "zoom": 15,
                    "color": "#29297a",
                    "scale": 1.68
                },
                {
                    "zoom": 16,
                    "color": "#29297a",
                    "scale": 1.7
                },
                {
                    "zoom": 17,
                    "color": "#29297a",
                    "scale": 1.38
                },
                {
                    "zoom": 18,
                    "color": "#29297a",
                    "scale": 1.15
                },
                {
                    "zoom": 19,
                    "color": "#29297a",
                    "scale": 1
                },
                {
                    "zoom": 20,
                    "color": "#29297a",
                    "scale": 0.91
                },
                {
                    "zoom": 21,
                    "color": "#29297a",
                    "scale": 0.87
                }
            ]
        },
        {
            "tags": {
                "any": "road_3",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 2.23
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 2.33
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 1.49
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 1.48
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 1.23
                },
                {
                    "zoom": 14,
                    "color": "#4646c0",
                    "scale": 1.06
                },
                {
                    "zoom": 15,
                    "color": "#4444bf",
                    "scale": 0.96
                },
                {
                    "zoom": 16,
                    "color": "#4343bd",
                    "scale": 0.92
                },
                {
                    "zoom": 17,
                    "color": "#4242bb",
                    "scale": 0.81
                },
                {
                    "zoom": 18,
                    "color": "#4040b9",
                    "scale": 0.75
                },
                {
                    "zoom": 19,
                    "color": "#3f3fb8",
                    "scale": 0.73
                },
                {
                    "zoom": 20,
                    "color": "#3d3db6",
                    "scale": 0.75
                },
                {
                    "zoom": 21,
                    "color": "#3c3cb4",
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_3"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 1.03
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 1.03
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 1.03
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 1.03
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 1.03
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 1.03
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 1.03
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 1.03
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0.83
                },
                {
                    "zoom": 9,
                    "color": "#29297a",
                    "scale": 2.71
                },
                {
                    "zoom": 10,
                    "color": "#29297a",
                    "scale": 1.76
                },
                {
                    "zoom": 11,
                    "color": "#29297a",
                    "scale": 1.31
                },
                {
                    "zoom": 12,
                    "color": "#29297a",
                    "scale": 1.37
                },
                {
                    "zoom": 13,
                    "color": "#29297a",
                    "scale": 1.21
                },
                {
                    "zoom": 14,
                    "color": "#29297a",
                    "scale": 1.1
                },
                {
                    "zoom": 15,
                    "color": "#29297a",
                    "scale": 1.02
                },
                {
                    "zoom": 16,
                    "color": "#29297a",
                    "scale": 1
                },
                {
                    "zoom": 17,
                    "color": "#29297a",
                    "scale": 0.88
                },
                {
                    "zoom": 18,
                    "color": "#29297a",
                    "scale": 0.81
                },
                {
                    "zoom": 19,
                    "color": "#29297a",
                    "scale": 0.79
                },
                {
                    "zoom": 20,
                    "color": "#29297a",
                    "scale": 0.81
                },
                {
                    "zoom": 21,
                    "color": "#29297a",
                    "scale": 0.87
                }
            ]
        },
        {
            "tags": {
                "any": "road_4",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 1.5
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 1.12
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 1.25
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 1.05
                },
                {
                    "zoom": 14,
                    "color": "#4646c0",
                    "scale": 0.93
                },
                {
                    "zoom": 15,
                    "color": "#4444bf",
                    "scale": 0.86
                },
                {
                    "zoom": 16,
                    "color": "#4343bd",
                    "scale": 1.02
                },
                {
                    "zoom": 17,
                    "color": "#4242bb",
                    "scale": 0.88
                },
                {
                    "zoom": 18,
                    "color": "#4040b9",
                    "scale": 0.79
                },
                {
                    "zoom": 19,
                    "color": "#3f3fb8",
                    "scale": 0.76
                },
                {
                    "zoom": 20,
                    "color": "#3d3db6",
                    "scale": 0.76
                },
                {
                    "zoom": 21,
                    "color": "#3c3cb4",
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_4"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0.72
                },
                {
                    "zoom": 10,
                    "color": "#29297a",
                    "scale": 1.22
                },
                {
                    "zoom": 11,
                    "color": "#29297a",
                    "scale": 1.04
                },
                {
                    "zoom": 12,
                    "color": "#29297a",
                    "scale": 1.17
                },
                {
                    "zoom": 13,
                    "color": "#29297a",
                    "scale": 1.06
                },
                {
                    "zoom": 14,
                    "color": "#29297a",
                    "scale": 0.97
                },
                {
                    "zoom": 15,
                    "color": "#29297a",
                    "scale": 0.92
                },
                {
                    "zoom": 16,
                    "color": "#29297a",
                    "scale": 1.09
                },
                {
                    "zoom": 17,
                    "color": "#29297a",
                    "scale": 0.95
                },
                {
                    "zoom": 18,
                    "color": "#29297a",
                    "scale": 0.86
                },
                {
                    "zoom": 19,
                    "color": "#29297a",
                    "scale": 0.82
                },
                {
                    "zoom": 20,
                    "color": "#29297a",
                    "scale": 0.82
                },
                {
                    "zoom": 21,
                    "color": "#29297a",
                    "scale": 0.86
                }
            ]
        },
        {
            "tags": {
                "any": "road_5",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 1.11
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 0.84
                },
                {
                    "zoom": 14,
                    "color": "#4646c0",
                    "scale": 0.72
                },
                {
                    "zoom": 15,
                    "color": "#4444bf",
                    "scale": 0.84
                },
                {
                    "zoom": 16,
                    "color": "#4343bd",
                    "scale": 0.97
                },
                {
                    "zoom": 17,
                    "color": "#4242bb",
                    "scale": 0.83
                },
                {
                    "zoom": 18,
                    "color": "#4040b9",
                    "scale": 0.75
                },
                {
                    "zoom": 19,
                    "color": "#3f3fb8",
                    "scale": 0.73
                },
                {
                    "zoom": 20,
                    "color": "#3d3db6",
                    "scale": 0.74
                },
                {
                    "zoom": 21,
                    "color": "#3c3cb4",
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_5"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 0.4
                },
                {
                    "zoom": 12,
                    "color": "#29297a",
                    "scale": 1.03
                },
                {
                    "zoom": 13,
                    "color": "#29297a",
                    "scale": 0.88
                },
                {
                    "zoom": 14,
                    "color": "#29297a",
                    "scale": 0.79
                },
                {
                    "zoom": 15,
                    "color": "#29297a",
                    "scale": 0.91
                },
                {
                    "zoom": 16,
                    "color": "#29297a",
                    "scale": 1.05
                },
                {
                    "zoom": 17,
                    "color": "#29297a",
                    "scale": 0.9
                },
                {
                    "zoom": 18,
                    "color": "#29297a",
                    "scale": 0.82
                },
                {
                    "zoom": 19,
                    "color": "#29297a",
                    "scale": 0.79
                },
                {
                    "zoom": 20,
                    "color": "#29297a",
                    "scale": 0.81
                },
                {
                    "zoom": 21,
                    "color": "#29297a",
                    "scale": 0.86
                }
            ]
        },
        {
            "tags": {
                "any": "road_6",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 2
                },
                {
                    "zoom": 14,
                    "color": "#4646c0",
                    "scale": 1.13
                },
                {
                    "zoom": 15,
                    "color": "#4444bf",
                    "scale": 1.11
                },
                {
                    "zoom": 16,
                    "color": "#4343bd",
                    "scale": 1.16
                },
                {
                    "zoom": 17,
                    "color": "#4242bb",
                    "scale": 0.93
                },
                {
                    "zoom": 18,
                    "color": "#4040b9",
                    "scale": 0.8
                },
                {
                    "zoom": 19,
                    "color": "#3f3fb8",
                    "scale": 0.75
                },
                {
                    "zoom": 20,
                    "color": "#3d3db6",
                    "scale": 0.75
                },
                {
                    "zoom": 21,
                    "color": "#3c3cb4",
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_6"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 13,
                    "color": "#29297a",
                    "scale": 1.49
                },
                {
                    "zoom": 14,
                    "color": "#29297a",
                    "scale": 1.09
                },
                {
                    "zoom": 15,
                    "color": "#29297a",
                    "scale": 1.13
                },
                {
                    "zoom": 16,
                    "color": "#29297a",
                    "scale": 1.22
                },
                {
                    "zoom": 17,
                    "color": "#29297a",
                    "scale": 0.99
                },
                {
                    "zoom": 18,
                    "color": "#29297a",
                    "scale": 0.87
                },
                {
                    "zoom": 19,
                    "color": "#29297a",
                    "scale": 0.82
                },
                {
                    "zoom": 20,
                    "color": "#29297a",
                    "scale": 0.82
                },
                {
                    "zoom": 21,
                    "color": "#29297a",
                    "scale": 0.86
                }
            ]
        },
        {
            "tags": {
                "any": "road_7",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 0
                },
                {
                    "zoom": 14,
                    "color": "#4646c0",
                    "scale": 0.8
                },
                {
                    "zoom": 15,
                    "color": "#4444bf",
                    "scale": 0.69
                },
                {
                    "zoom": 16,
                    "color": "#4343bd",
                    "scale": 0.78
                },
                {
                    "zoom": 17,
                    "color": "#4242bb",
                    "scale": 0.71
                },
                {
                    "zoom": 18,
                    "color": "#4040b9",
                    "scale": 0.69
                },
                {
                    "zoom": 19,
                    "color": "#3f3fb8",
                    "scale": 0.7
                },
                {
                    "zoom": 20,
                    "color": "#3d3db6",
                    "scale": 0.74
                },
                {
                    "zoom": 21,
                    "color": "#3c3cb4",
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_7"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 14,
                    "color": "#29297a",
                    "scale": 0.84
                },
                {
                    "zoom": 15,
                    "color": "#29297a",
                    "scale": 0.77
                },
                {
                    "zoom": 16,
                    "color": "#29297a",
                    "scale": 0.84
                },
                {
                    "zoom": 17,
                    "color": "#29297a",
                    "scale": 0.78
                },
                {
                    "zoom": 18,
                    "color": "#29297a",
                    "scale": 0.75
                },
                {
                    "zoom": 19,
                    "color": "#29297a",
                    "scale": 0.76
                },
                {
                    "zoom": 20,
                    "color": "#29297a",
                    "scale": 0.79
                },
                {
                    "zoom": 21,
                    "color": "#29297a",
                    "scale": 0.86
                }
            ]
        },
        {
            "tags": {
                "any": "road_minor",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 0,
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "scale": 0
                },
                {
                    "zoom": 7,
                    "scale": 0
                },
                {
                    "zoom": 8,
                    "scale": 0
                },
                {
                    "zoom": 9,
                    "scale": 0
                },
                {
                    "zoom": 10,
                    "scale": 0
                },
                {
                    "zoom": 11,
                    "scale": 0
                },
                {
                    "zoom": 12,
                    "scale": 0
                },
                {
                    "zoom": 13,
                    "scale": 0
                },
                {
                    "zoom": 14,
                    "scale": 0
                },
                {
                    "zoom": 15,
                    "scale": 0
                },
                {
                    "zoom": 16,
                    "scale": 0.8
                },
                {
                    "zoom": 17,
                    "scale": 0.8
                },
                {
                    "zoom": 18,
                    "scale": 0.8
                },
                {
                    "zoom": 19,
                    "scale": 0.8
                },
                {
                    "zoom": 20,
                    "scale": 0.8
                },
                {
                    "zoom": 21,
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_minor"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "opacity": 0
                }
            ]
        },
        {
            "tags": {
                "any": "road_unclassified",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 0,
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "scale": 0
                },
                {
                    "zoom": 7,
                    "scale": 0
                },
                {
                    "zoom": 8,
                    "scale": 0
                },
                {
                    "zoom": 9,
                    "scale": 0
                },
                {
                    "zoom": 10,
                    "scale": 0
                },
                {
                    "zoom": 11,
                    "scale": 0
                },
                {
                    "zoom": 12,
                    "scale": 0
                },
                {
                    "zoom": 13,
                    "scale": 0
                },
                {
                    "zoom": 14,
                    "scale": 0
                },
                {
                    "zoom": 15,
                    "scale": 0
                },
                {
                    "zoom": 16,
                    "scale": 0.8
                },
                {
                    "zoom": 17,
                    "scale": 0.8
                },
                {
                    "zoom": 18,
                    "scale": 0.8
                },
                {
                    "zoom": 19,
                    "scale": 0.8
                },
                {
                    "zoom": 20,
                    "scale": 0.8
                },
                {
                    "zoom": 21,
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": {
                "any": "road_unclassified"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "opacity": 0
                }
            ]
        },
        {
            "tags": {
                "all": "is_tunnel",
                "none": "path"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#3636a1"
                },
                {
                    "zoom": 1,
                    "color": "#3636a1"
                },
                {
                    "zoom": 2,
                    "color": "#3636a1"
                },
                {
                    "zoom": 3,
                    "color": "#3636a1"
                },
                {
                    "zoom": 4,
                    "color": "#3636a1"
                },
                {
                    "zoom": 5,
                    "color": "#3636a1"
                },
                {
                    "zoom": 6,
                    "color": "#3636a1"
                },
                {
                    "zoom": 7,
                    "color": "#3636a1"
                },
                {
                    "zoom": 8,
                    "color": "#3636a1"
                },
                {
                    "zoom": 9,
                    "color": "#3636a1"
                },
                {
                    "zoom": 10,
                    "color": "#3636a1"
                },
                {
                    "zoom": 11,
                    "color": "#3636a1"
                },
                {
                    "zoom": 12,
                    "color": "#3636a1"
                },
                {
                    "zoom": 13,
                    "color": "#3636a1"
                },
                {
                    "zoom": 14,
                    "color": "#333399"
                },
                {
                    "zoom": 15,
                    "color": "#303091"
                },
                {
                    "zoom": 16,
                    "color": "#303090"
                },
                {
                    "zoom": 17,
                    "color": "#2f2f8f"
                },
                {
                    "zoom": 18,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 19,
                    "color": "#2f2f8c"
                },
                {
                    "zoom": 20,
                    "color": "#2e2e8b"
                },
                {
                    "zoom": 21,
                    "color": "#2e2e8a"
                }
            ]
        },
        {
            "tags": {
                "all": "path",
                "none": "is_tunnel"
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#1c1c54"
                },
                {
                    "zoom": 0,
                    "opacity": 0.5
                },
                {
                    "zoom": 1,
                    "opacity": 0.5
                },
                {
                    "zoom": 2,
                    "opacity": 0.5
                },
                {
                    "zoom": 3,
                    "opacity": 0.5
                },
                {
                    "zoom": 4,
                    "opacity": 0.5
                },
                {
                    "zoom": 5,
                    "opacity": 0.5
                },
                {
                    "zoom": 6,
                    "opacity": 0.5
                },
                {
                    "zoom": 7,
                    "opacity": 0.5
                },
                {
                    "zoom": 8,
                    "opacity": 0.5
                },
                {
                    "zoom": 9,
                    "opacity": 0.5
                },
                {
                    "zoom": 10,
                    "opacity": 0.5
                },
                {
                    "zoom": 11,
                    "opacity": 0.5
                },
                {
                    "zoom": 12,
                    "opacity": 0.5
                },
                {
                    "zoom": 13,
                    "opacity": 0.5
                },
                {
                    "zoom": 14,
                    "opacity": 0.5
                },
                {
                    "zoom": 15,
                    "opacity": 0.5
                },
                {
                    "zoom": 16,
                    "opacity": 0.5
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": {
                "all": "path",
                "none": "is_tunnel"
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "opacity": 0.7
                },
                {
                    "zoom": 0,
                    "color": "#333399"
                },
                {
                    "zoom": 1,
                    "color": "#333399"
                },
                {
                    "zoom": 2,
                    "color": "#333399"
                },
                {
                    "zoom": 3,
                    "color": "#333399"
                },
                {
                    "zoom": 4,
                    "color": "#333399"
                },
                {
                    "zoom": 5,
                    "color": "#333399"
                },
                {
                    "zoom": 6,
                    "color": "#333399"
                },
                {
                    "zoom": 7,
                    "color": "#333399"
                },
                {
                    "zoom": 8,
                    "color": "#333399"
                },
                {
                    "zoom": 9,
                    "color": "#333399"
                },
                {
                    "zoom": 10,
                    "color": "#333399"
                },
                {
                    "zoom": 11,
                    "color": "#333399"
                },
                {
                    "zoom": 12,
                    "color": "#333399"
                },
                {
                    "zoom": 13,
                    "color": "#333399"
                },
                {
                    "zoom": 14,
                    "color": "#313192"
                },
                {
                    "zoom": 15,
                    "color": "#2e2e8a"
                },
                {
                    "zoom": 16,
                    "color": "#2e2e89"
                },
                {
                    "zoom": 17,
                    "color": "#2d2d87"
                },
                {
                    "zoom": 18,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 19,
                    "color": "#2c2c85"
                },
                {
                    "zoom": 20,
                    "color": "#2c2c83"
                },
                {
                    "zoom": 21,
                    "color": "#2b2b82"
                }
            ]
        },
        {
            "tags": "road_construction",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#4747c2"
                }
            ]
        },
        {
            "tags": "road_construction",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 1,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 2,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 3,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 4,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 5,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 6,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 7,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 8,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 9,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 10,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 11,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 12,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 13,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 14,
                    "color": "#29297a"
                },
                {
                    "zoom": 15,
                    "color": "#1c1c54"
                },
                {
                    "zoom": 16,
                    "color": "#1a1a4e"
                },
                {
                    "zoom": 17,
                    "color": "#181847"
                },
                {
                    "zoom": 18,
                    "color": "#161641"
                },
                {
                    "zoom": 19,
                    "color": "#13133b"
                },
                {
                    "zoom": 20,
                    "color": "#111134"
                },
                {
                    "zoom": 21,
                    "color": "#0f0f2e"
                }
            ]
        },
        {
            "tags": {
                "any": "ferry"
            },
            "stylers": [
                {
                    "color": "#0000bd"
                }
            ]
        },
        {
            "tags": "transit_location",
            "elements": "label.icon",
            "stylers": [
                {
                    "hue": "#00004d"
                },
                {
                    "saturation": 0
                }
            ]
        },
        {
            "tags": "transit_location",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#bebef4"
                }
            ]
        },
        {
            "tags": "transit_location",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                }
            ]
        },
        {
            "tags": "transit_schema",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#bebef4"
                },
                {
                    "scale": 0.7
                },
                {
                    "zoom": 0,
                    "opacity": 0.6
                },
                {
                    "zoom": 1,
                    "opacity": 0.6
                },
                {
                    "zoom": 2,
                    "opacity": 0.6
                },
                {
                    "zoom": 3,
                    "opacity": 0.6
                },
                {
                    "zoom": 4,
                    "opacity": 0.6
                },
                {
                    "zoom": 5,
                    "opacity": 0.6
                },
                {
                    "zoom": 6,
                    "opacity": 0.6
                },
                {
                    "zoom": 7,
                    "opacity": 0.6
                },
                {
                    "zoom": 8,
                    "opacity": 0.6
                },
                {
                    "zoom": 9,
                    "opacity": 0.6
                },
                {
                    "zoom": 10,
                    "opacity": 0.6
                },
                {
                    "zoom": 11,
                    "opacity": 0.6
                },
                {
                    "zoom": 12,
                    "opacity": 0.6
                },
                {
                    "zoom": 13,
                    "opacity": 0.6
                },
                {
                    "zoom": 14,
                    "opacity": 0.6
                },
                {
                    "zoom": 15,
                    "opacity": 0.5
                },
                {
                    "zoom": 16,
                    "opacity": 0.4
                },
                {
                    "zoom": 17,
                    "opacity": 0.4
                },
                {
                    "zoom": 18,
                    "opacity": 0.4
                },
                {
                    "zoom": 19,
                    "opacity": 0.4
                },
                {
                    "zoom": 20,
                    "opacity": 0.4
                },
                {
                    "zoom": 21,
                    "opacity": 0.4
                }
            ]
        },
        {
            "tags": "transit_schema",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "opacity": 0
                }
            ]
        },
        {
            "tags": "transit_line",
            "elements": "geometry.fill.pattern",
            "stylers": [
                {
                    "color": "#9898e6"
                },
                {
                    "zoom": 0,
                    "opacity": 0
                },
                {
                    "zoom": 1,
                    "opacity": 0
                },
                {
                    "zoom": 2,
                    "opacity": 0
                },
                {
                    "zoom": 3,
                    "opacity": 0
                },
                {
                    "zoom": 4,
                    "opacity": 0
                },
                {
                    "zoom": 5,
                    "opacity": 0
                },
                {
                    "zoom": 6,
                    "opacity": 0
                },
                {
                    "zoom": 7,
                    "opacity": 0
                },
                {
                    "zoom": 8,
                    "opacity": 0
                },
                {
                    "zoom": 9,
                    "opacity": 0
                },
                {
                    "zoom": 10,
                    "opacity": 0
                },
                {
                    "zoom": 11,
                    "opacity": 0
                },
                {
                    "zoom": 12,
                    "opacity": 0
                },
                {
                    "zoom": 13,
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "transit_line",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#9898e6"
                },
                {
                    "scale": 0.4
                },
                {
                    "zoom": 0,
                    "opacity": 0
                },
                {
                    "zoom": 1,
                    "opacity": 0
                },
                {
                    "zoom": 2,
                    "opacity": 0
                },
                {
                    "zoom": 3,
                    "opacity": 0
                },
                {
                    "zoom": 4,
                    "opacity": 0
                },
                {
                    "zoom": 5,
                    "opacity": 0
                },
                {
                    "zoom": 6,
                    "opacity": 0
                },
                {
                    "zoom": 7,
                    "opacity": 0
                },
                {
                    "zoom": 8,
                    "opacity": 0
                },
                {
                    "zoom": 9,
                    "opacity": 0
                },
                {
                    "zoom": 10,
                    "opacity": 0
                },
                {
                    "zoom": 11,
                    "opacity": 0
                },
                {
                    "zoom": 12,
                    "opacity": 0
                },
                {
                    "zoom": 13,
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "water",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#00008a"
                },
                {
                    "zoom": 1,
                    "color": "#00008a"
                },
                {
                    "zoom": 2,
                    "color": "#00008a"
                },
                {
                    "zoom": 3,
                    "color": "#00008a"
                },
                {
                    "zoom": 4,
                    "color": "#00008a"
                },
                {
                    "zoom": 5,
                    "color": "#00008a"
                },
                {
                    "zoom": 6,
                    "color": "#00008a"
                },
                {
                    "zoom": 7,
                    "color": "#00008a"
                },
                {
                    "zoom": 8,
                    "color": "#000087"
                },
                {
                    "zoom": 9,
                    "color": "#000083"
                },
                {
                    "zoom": 10,
                    "color": "#000080"
                },
                {
                    "zoom": 11,
                    "color": "#00007e"
                },
                {
                    "zoom": 12,
                    "color": "#00007c"
                },
                {
                    "zoom": 13,
                    "color": "#00007a"
                },
                {
                    "zoom": 14,
                    "color": "#000078"
                },
                {
                    "zoom": 15,
                    "color": "#000075"
                },
                {
                    "zoom": 16,
                    "color": "#000073"
                },
                {
                    "zoom": 17,
                    "color": "#000070"
                },
                {
                    "zoom": 18,
                    "color": "#00006e"
                },
                {
                    "zoom": 19,
                    "color": "#00006b"
                },
                {
                    "zoom": 20,
                    "color": "#000069"
                },
                {
                    "zoom": 21,
                    "color": "#000066"
                }
            ]
        },
        {
            "tags": "water",
            "elements": "geometry",
            "types": "polyline",
            "stylers": [
                {
                    "zoom": 0,
                    "opacity": 0.4
                },
                {
                    "zoom": 1,
                    "opacity": 0.4
                },
                {
                    "zoom": 2,
                    "opacity": 0.4
                },
                {
                    "zoom": 3,
                    "opacity": 0.4
                },
                {
                    "zoom": 4,
                    "opacity": 0.6
                },
                {
                    "zoom": 5,
                    "opacity": 0.8
                },
                {
                    "zoom": 6,
                    "opacity": 1
                },
                {
                    "zoom": 7,
                    "opacity": 1
                },
                {
                    "zoom": 8,
                    "opacity": 1
                },
                {
                    "zoom": 9,
                    "opacity": 1
                },
                {
                    "zoom": 10,
                    "opacity": 1
                },
                {
                    "zoom": 11,
                    "opacity": 1
                },
                {
                    "zoom": 12,
                    "opacity": 1
                },
                {
                    "zoom": 13,
                    "opacity": 1
                },
                {
                    "zoom": 14,
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "bathymetry",
            "elements": "geometry",
            "stylers": [
                {
                    "hue": "#00008a"
                }
            ]
        },
        {
            "tags": {
                "any": [
                    "industrial",
                    "construction_site"
                ]
            },
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 1,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 2,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 3,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 4,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 5,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 6,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 7,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 8,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 9,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 10,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 11,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 12,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 13,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 14,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 15,
                    "color": "#2a2a7e"
                },
                {
                    "zoom": 16,
                    "color": "#2a2a7d"
                },
                {
                    "zoom": 17,
                    "color": "#29297c"
                },
                {
                    "zoom": 18,
                    "color": "#29297b"
                },
                {
                    "zoom": 19,
                    "color": "#292979"
                },
                {
                    "zoom": 20,
                    "color": "#282878"
                },
                {
                    "zoom": 21,
                    "color": "#282877"
                }
            ]
        },
        {
            "tags": {
                "any": "transit",
                "none": [
                    "transit_location",
                    "transit_line",
                    "transit_schema",
                    "is_unclassified_transit"
                ]
            },
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 1,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 2,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 3,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 4,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 5,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 6,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 7,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 8,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 9,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 10,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 11,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 12,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 13,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 14,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 15,
                    "color": "#2a2a7e"
                },
                {
                    "zoom": 16,
                    "color": "#2a2a7d"
                },
                {
                    "zoom": 17,
                    "color": "#29297c"
                },
                {
                    "zoom": 18,
                    "color": "#29297b"
                },
                {
                    "zoom": 19,
                    "color": "#292979"
                },
                {
                    "zoom": 20,
                    "color": "#282878"
                },
                {
                    "zoom": 21,
                    "color": "#282877"
                }
            ]
        },
        {
            "tags": "fence",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#34349d"
                },
                {
                    "zoom": 0,
                    "opacity": 0.75
                },
                {
                    "zoom": 1,
                    "opacity": 0.75
                },
                {
                    "zoom": 2,
                    "opacity": 0.75
                },
                {
                    "zoom": 3,
                    "opacity": 0.75
                },
                {
                    "zoom": 4,
                    "opacity": 0.75
                },
                {
                    "zoom": 5,
                    "opacity": 0.75
                },
                {
                    "zoom": 6,
                    "opacity": 0.75
                },
                {
                    "zoom": 7,
                    "opacity": 0.75
                },
                {
                    "zoom": 8,
                    "opacity": 0.75
                },
                {
                    "zoom": 9,
                    "opacity": 0.75
                },
                {
                    "zoom": 10,
                    "opacity": 0.75
                },
                {
                    "zoom": 11,
                    "opacity": 0.75
                },
                {
                    "zoom": 12,
                    "opacity": 0.75
                },
                {
                    "zoom": 13,
                    "opacity": 0.75
                },
                {
                    "zoom": 14,
                    "opacity": 0.75
                },
                {
                    "zoom": 15,
                    "opacity": 0.75
                },
                {
                    "zoom": 16,
                    "opacity": 0.75
                },
                {
                    "zoom": 17,
                    "opacity": 0.45
                },
                {
                    "zoom": 18,
                    "opacity": 0.45
                },
                {
                    "zoom": 19,
                    "opacity": 0.45
                },
                {
                    "zoom": 20,
                    "opacity": 0.45
                },
                {
                    "zoom": 21,
                    "opacity": 0.45
                }
            ]
        },
        {
            "tags": "medical",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 1,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 2,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 3,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 4,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 5,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 6,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 7,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 8,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 9,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 10,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 11,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 12,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 13,
                    "color": "#2f2f8e"
                },
                {
                    "zoom": 14,
                    "color": "#2d2d86"
                },
                {
                    "zoom": 15,
                    "color": "#2a2a7e"
                },
                {
                    "zoom": 16,
                    "color": "#2a2a7d"
                },
                {
                    "zoom": 17,
                    "color": "#29297c"
                },
                {
                    "zoom": 18,
                    "color": "#29297b"
                },
                {
                    "zoom": 19,
                    "color": "#292979"
                },
                {
                    "zoom": 20,
                    "color": "#282878"
                },
                {
                    "zoom": 21,
                    "color": "#282877"
                }
            ]
        },
        {
            "tags": "beach",
            "elements": "geometry",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 1,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 2,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 3,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 4,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 5,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 6,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 7,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 8,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 9,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 10,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 11,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 12,
                    "color": "#2f2f8e",
                    "opacity": 0.3
                },
                {
                    "zoom": 13,
                    "color": "#2f2f8e",
                    "opacity": 0.65
                },
                {
                    "zoom": 14,
                    "color": "#2d2d86",
                    "opacity": 1
                },
                {
                    "zoom": 15,
                    "color": "#2a2a7e",
                    "opacity": 1
                },
                {
                    "zoom": 16,
                    "color": "#2a2a7d",
                    "opacity": 1
                },
                {
                    "zoom": 17,
                    "color": "#29297c",
                    "opacity": 1
                },
                {
                    "zoom": 18,
                    "color": "#29297b",
                    "opacity": 1
                },
                {
                    "zoom": 19,
                    "color": "#292979",
                    "opacity": 1
                },
                {
                    "zoom": 20,
                    "color": "#282878",
                    "opacity": 1
                },
                {
                    "zoom": 21,
                    "color": "#282877",
                    "opacity": 1
                }
            ]
        },
        {
            "tags": {
                "all": [
                    "is_tunnel",
                    "path"
                ]
            },
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#25256f"
                },
                {
                    "opacity": 0.3
                }
            ]
        },
        {
            "tags": {
                "all": [
                    "is_tunnel",
                    "path"
                ]
            },
            "elements": "geometry.outline",
            "stylers": [
                {
                    "opacity": 0
                }
            ]
        },
        {
            "tags": "road_limited",
            "elements": "geometry.fill",
            "stylers": [
                {
                    "color": "#1c1c54"
                },
                {
                    "zoom": 0,
                    "scale": 0
                },
                {
                    "zoom": 1,
                    "scale": 0
                },
                {
                    "zoom": 2,
                    "scale": 0
                },
                {
                    "zoom": 3,
                    "scale": 0
                },
                {
                    "zoom": 4,
                    "scale": 0
                },
                {
                    "zoom": 5,
                    "scale": 0
                },
                {
                    "zoom": 6,
                    "scale": 0
                },
                {
                    "zoom": 7,
                    "scale": 0
                },
                {
                    "zoom": 8,
                    "scale": 0
                },
                {
                    "zoom": 9,
                    "scale": 0
                },
                {
                    "zoom": 10,
                    "scale": 0
                },
                {
                    "zoom": 11,
                    "scale": 0
                },
                {
                    "zoom": 12,
                    "scale": 0
                },
                {
                    "zoom": 13,
                    "scale": 0.1
                },
                {
                    "zoom": 14,
                    "scale": 0.2
                },
                {
                    "zoom": 15,
                    "scale": 0.3
                },
                {
                    "zoom": 16,
                    "scale": 0.5
                },
                {
                    "zoom": 17,
                    "scale": 0.6
                },
                {
                    "zoom": 18,
                    "scale": 0.69
                },
                {
                    "zoom": 19,
                    "scale": 0.7
                },
                {
                    "zoom": 20,
                    "scale": 0.74
                },
                {
                    "zoom": 21,
                    "scale": 0.8
                }
            ]
        },
        {
            "tags": "road_limited",
            "elements": "geometry.outline",
            "stylers": [
                {
                    "zoom": 0,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 1,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 2,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 3,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 4,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 5,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 6,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 7,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 8,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 9,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 10,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 11,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 12,
                    "color": "#4747c2",
                    "scale": 0.9
                },
                {
                    "zoom": 13,
                    "color": "#4747c2",
                    "scale": 0.1
                },
                {
                    "zoom": 14,
                    "color": "#29297a",
                    "scale": 0.2
                },
                {
                    "zoom": 15,
                    "color": "#29297a",
                    "scale": 0.3
                },
                {
                    "zoom": 16,
                    "color": "#29297a",
                    "scale": 0.5
                },
                {
                    "zoom": 17,
                    "color": "#29297a",
                    "scale": 0.6
                },
                {
                    "zoom": 18,
                    "color": "#29297a",
                    "scale": 0.75
                },
                {
                    "zoom": 19,
                    "color": "#29297a",
                    "scale": 0.76
                },
                {
                    "zoom": 20,
                    "color": "#29297a",
                    "scale": 0.79
                },
                {
                    "zoom": 21,
                    "color": "#29297a",
                    "scale": 0.86
                }
            ]
        },
        {
            "tags": "transit_stop",
            "elements": "label.icon",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "secondary-color": "#bebef4"
                },
                {
                    "tertiary-color": "#c6c6ec"
                }
            ]
        },
        {
            "tags": "entrance",
            "elements": "label.text.fill",
            "stylers": [
                {
                    "color": "#c6c6ec"
                },
                {
                    "opacity": 1
                }
            ]
        },
        {
            "tags": "entrance",
            "elements": "label.text.outline",
            "stylers": [
                {
                    "color": "#0a0a1f"
                },
                {
                    "opacity": 0.5
                }
            ]
        },
        {
            "tags": {
                "any": "landcover",
                "none": "vegetation"
            },
            "stylers": {
                "visibility": "off"
            }
        }
    ]
        }));

        const el = document.createElement('img');
        el.className = 'my-marker';
        el.src = 'https://uploads-ssl.webflow.com/640092fd281a432924d37237/659e692a1815743729221d41_map-pin.svg';
        el.onclick = () => map.update({location: {...LOCATION, duration: 400}});
        map.addChild(new YMapMarker({coordinates: LOCATION.center}, el));
      }
