const allPriceJson = {
    Кыргызстан: {
        "с.Ак-Тюз": {
            days: [1],
            1: {
                price: 900,
                childrenPrice: 900,
            },
        },
    },
    Казахстан: {
        Aлмата: {
            days: [1, 2],
            1: {
                price: 2000,
                childrenPrice: 1800,
            },
            2: {
                price: 5000,
                childrenPrice: 1800,
            },
        },
    },
    Узбекистан: {
        "Ташкент-Самарканд-Бухара": {
            days: [2, 3],
            2: {
                price: 5500,
                childrenPrice: 8000,
            },
            3: {
                price: 20000,
                childrenPrice: 8000,
            },
        },
    },
};

const listCountry = document.querySelector(".calc__card .calc__card__chekbox");
// console.log(listCountry)

for (const country in allPriceJson) {
    /* div country */

    const div = document.createElement("div");
    div.classList.add("cheakbox__item__btn");
    div.classList.add("place");

    /* input radio country */

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "place__radio";
    input.classList.add("calc__card__chekbox__item");
    input.id =
        "place" +
        (listCountry.querySelectorAll("div.cheakbox__item__btn").length + 1);
    div.append(input);

    /* label country */

    const label = document.createElement("label");
    label.setAttribute(
        "for",
        "place" +
            (listCountry.querySelectorAll("div.cheakbox__item__btn").length + 1)
    );
    label.innerHTML = country;
    label.setAttribute("full-info-data", "price");
    div.append(label);

    /* div city */

    for (const city in allPriceJson[country]) {
        const divCity = document.createElement("div");
        divCity.classList.add("city");
        divCity.classList.add("none");

        /* input radio city */

        const inputCity = document.createElement("input");
        inputCity.type = "radio";
        inputCity.name = "radio-city";
        inputCity.id =
            "city" +
            (listCountry.querySelectorAll("div.cheakbox__item__btn").length +
                1) +
            "-" +
            (div.querySelectorAll("div.city").length + 1);
        divCity.append(inputCity);

        /* label city */

        const labelCity = document.createElement("label");
        labelCity.setAttribute(
            "for",
            "city" +
                (listCountry.querySelectorAll("div.cheakbox__item__btn")
                    .length +
                    1) +
                "-" +
                (div.querySelectorAll("div.city").length + 1)
        );
        labelCity.innerHTML = city;
        divCity.append(labelCity);

        div.append(divCity);
    }

    //console.log(div)

    listCountry.append(div);
}

// console.log(listCountry.querySelectorAll('div.cheakbox__item__btn'))

// const country = document.querySelectorAll('.place label[full-info-data="price"]');
// const cityesCheckbox = document.querySelectorAll('.city')

// country.forEach((item) => {
//     item.addEventListener('click', cityOpenClose);

//     function cityOpenClose() {

//         cityesCheckbox.forEach((city) => {
//             city.classList.add('none')
//             city.querySelector('input').checked = false
//         })

//         item.parentElement.querySelectorAll('.city').forEach((city) => {
//             city.classList.remove('none')
//         })
//     }
// })
