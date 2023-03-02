const country = document.querySelectorAll('.place label[full-info-data="price"]');
const cityesCheckbox = document.querySelectorAll('.city')

country.forEach((item) => {
    item.addEventListener('click', cityOpenClose);

    function cityOpenClose() {

        cityesCheckbox.forEach((city) => {
            city.classList.add('none')
            city.querySelector('input').checked = false
        })

        item.parentElement.querySelectorAll('.city').forEach((city) => {
            city.classList.remove('none')
        })
    }
})