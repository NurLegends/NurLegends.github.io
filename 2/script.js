function openMap(){
    document.getElementById('mapWrapper').style.display = "flex";
}

function closeMap(){
    document.getElementById('mapWrapper').style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider_item');
    const prevButton = document.querySelector('.slider_button.prev');
    const nextButton = document.querySelector('.slider_button.next');
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

    function prevSlide() {
        currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Автоматическое переключение каждые 5 секунд
    setInterval(nextSlide, 5000);

    // Показать первый слайд
    showSlide(currentSlide);
});