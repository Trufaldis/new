const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    console.log(n);
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
    } else{
        index++;
    }
    activeSlide(index);
    activeDot(index);
}

const prevSlide = () => {
    if(index == 0) {
       index = slides.length -1
    } else{
        index--;
    }
    activeSlide(index);
    activeDot(index);
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () =>
    {
        activeSlide(indexDot);
        activeDot(indexDot);
    })
})



next.addEventListener('click', nextSlide);
prev.addEventListener('click',prevSlide);