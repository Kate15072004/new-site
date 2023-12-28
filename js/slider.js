$(document).ready(() => {
    let currentSlide = 0;
    let isBusy = false;

    $('.slider-arrow').on('click', (e) => {
        const that = $(e.currentTarget);// – Создание обработчика события «клик»
        const slidesCount = slides.length - 1;
//Логика переключения номера слайда
    if(!isBusy){
    if(that.hasClass('right')) {
        currentSlide += 1;//сли это правая тень – наращиваем страницу,
        if(currentSlide > slidesCount)
            currentSlide = slidesCount;
        }
        else
        {
            currentSlide -= 1;//если нет уменьшаем.
            if(currentSlide < 0)
                currentSlide = slidesCount;
        }
        isBusy = true;//И наконец добавляем логику анимации перелистывания. Устанавливаем флаг isBusy в логическое состояние true и убираем лишь тогда, когда завершится анимация.
        $('.slider-image').animate({'opacity': 0}, 350, () => {//самой картинке мы сначала задаём прозрачность 0 (абсолютно прозрачный), затем меняем картинку, а после устанавливаем прозрачность 1 (не прозрачный).
        $('.slider-image').css('background-image', 'url(' + slides[currentSlide] + ')');
        $('.slider-image').animate({'opacity': 1}, 350, () => isBusy = false);
        });
    }
});
});

const slides = [
    'img/slider/bootstrap01.jpg',
    'img/slider/bootstrap02.jpg',
    'img/slider/bootstrap03.jpg',
    'img/slider/bootstrap04.jpg',
    'img/slider/bootstrap05.jpg',
    'img/slider/bootstrap06.jpg'
]
