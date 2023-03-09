const resetBtn = document.querySelector('.price__reset');

resetBtn.addEventListener('click', calcReset);

function calcReset () {
    document.querySelectorAll('.cheakbox__item__btn.place').forEach((item) => {
        item.querySelector('input').checked = false;
        item.querySelector('.city').classList.add('none');
    });
    
    document.querySelectorAll('.cheakbox__item__btn.duration').forEach((item) => {
        item.querySelector('input').checked = false;
        item.classList.remove('none')
    });

    document.querySelectorAll('.prise').forEach((item) => {
        item.querySelector('span').innerHTML = '0'
        // item.querySelector('li').classList.add('none')
    });

    document.querySelectorAll('.calc__card__human__count').forEach((list) => {
        list.querySelector('.input-human').classList.add('none')
        list.querySelector('.input-human').querySelector('input').value = 0

        list.querySelectorAll('input')[0].checked = true
        
    });

    document.querySelector('.total__price').querySelector('p').innerHTML = 0;


    let dataForFullData = {
        place: '',
        city: '',
        duration: 0,
        humanCount: '',
        childrenCount: '',
        totalPriceSom: 0,
        totalPriceDollar: 0,
        totalPriceTenge: 0
    };

    document.querySelector('.full__information__list').querySelectorAll('li').forEach((item) => {
        item.querySelector('span').innerHTML = dataForFullData[item.getAttribute('full-info-data')]
    });
}