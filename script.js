const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('mostrar');
    }
    });
});

document.querySelectorAll('.animado').forEach(el => observer.observe(el));