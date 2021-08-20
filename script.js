const slider = document.querySelectorAll('.product')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const menu = document.querySelector('#toggle')
const navbar = document.querySelector('.navigation')

i = 0;

function ActiveSlide(n) {
    for (slide of slider)
        slide.classList.remove('active');
    slider[n].classList.add('active');
}

next.addEventListener('click', function () {
    if (i == slider.length - 1) {
        i = 0;
        ActiveSlide(i);
    }
    else {
        i++
        ActiveSlide(i);
    }
})

prev.addEventListener('click', function () {
    if (i == 0) {
        i = slider.length - 1;
        ActiveSlide(i);
    }
    else {
        i--
        ActiveSlide(i);
    }
})

menu.addEventListener('click', function () {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
})