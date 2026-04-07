document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const sidebar = document.getElementById('sidebar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.getElementById('slide-counter');
    const progressBar = document.getElementById('progress-bar');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Generate Table of Contents
    slides.forEach((slide, index) => {
        const title = slide.getAttribute('data-title');
        const tocItem = document.createElement('div');
        tocItem.className = 'toc-item';
        tocItem.textContent = title;
        tocItem.onclick = () => {
            currentSlide = index;
            updateSlides();
        };
        sidebar.appendChild(tocItem);
    });

    const tocItems = document.querySelectorAll('.toc-item');

    function updateSlides() {
        // Update slides visibility
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentSlide) slide.classList.add('active');
        });

        // Update TOC active state
        tocItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentSlide) item.classList.add('active');
        });

        // Update counter and progress
        counter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        progressBar.style.width = `${((currentSlide + 1) / totalSlides) * 100}%`;

        // Update buttons
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    nextBtn.addEventListener('click', () => { if (currentSlide < totalSlides - 1) { currentSlide++; updateSlides(); } });
    prevBtn.addEventListener('click', () => { if (currentSlide > 0) { currentSlide--; updateSlides(); } });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') { 
            if (currentSlide < totalSlides - 1) { currentSlide++; updateSlides(); } 
        } else if (e.key === 'ArrowLeft') { 
            if (currentSlide > 0) { currentSlide--; updateSlides(); } 
        }
    });

    updateSlides();
});