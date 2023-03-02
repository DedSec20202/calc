const openCloseBtn = document.querySelectorAll(".calc__card__title button");

openCloseBtn.forEach((item) => {
    item.addEventListener("click", closeOpenCard);
    item.link = item;

    function closeOpenCard(item) {
        const btn = item.currentTarget.link;
        btn.parentElement.parentElement.querySelectorAll("div")[1].classList.toggle("none");
        if (btn.parentElement.parentElement.querySelectorAll("div")[1].getAttribute("card-name") == "human__count") {
            btn.parentElement.parentElement.querySelectorAll("div")[1].classList.toggle("calc__card__human__count");
        }

        if (btn.querySelector("img").getAttribute("src") == "./img/calc/btn-close.svg") {
            btn.querySelector("img").src = "./img/calc/btn-open.svg";
        } else {
            btn.querySelector("img").src = "./img/calc/btn-close.svg";
        }
    }
});
