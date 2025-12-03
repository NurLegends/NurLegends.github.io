document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider_item');
    let currentSlide = 0;

    function showSlide(index) {
        sliderItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderItems.length;
        showSlide(currentSlide);
    }

    // Автоматическое переключение каждые 3 секунды
    setInterval(nextSlide, 3000);

    // Показать первый слайд
    showSlide(currentSlide);
});