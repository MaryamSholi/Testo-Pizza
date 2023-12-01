// for brand slider
let slider_brand = document.querySelector('.slider-brand');
let strip = document.querySelector('.strip');

let isDragging = false;
let startX;
let scrollLeft;

slider_brand.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slider_brand.offsetLeft;
    scrollLeft = slider_brand.scrollLeft;
});

slider_brand.addEventListener('mouseleave', () => {
    isDragging = false;
});

slider_brand.addEventListener('mouseup', () => {
    isDragging = false;
});

slider_brand.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider_brand.offsetLeft;
    const walk = (x - startX) * 0.5; 
    slider_brand.scrollLeft = scrollLeft - walk;
});

function autoScroll() {
    setInterval(() => {
        if (!isDragging) {
            slider_brand.scrollLeft += 1.5; 
            if (slider_brand.scrollLeft >= strip.offsetWidth / 2) {
                slider_brand.scrollLeft = 0;
            }
        }
    }, 30);
}

autoScroll();