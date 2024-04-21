document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".intro");

    if (heroSection) { // Verifica si heroSection no es null
        window.addEventListener("scroll", function() {
            const scrollPosition = window.scrollY;
            const heroSectionHeight = heroSection.clientHeight;
            const scrollThreshold = heroSectionHeight / 4;

            if (scrollPosition > scrollThreshold) {
                // Cuando el scroll esté después del 25% del área de la sección Hero, colapsa la barra de navegación.
                navbar.classList.add("collapse");
            } else {
                // Cuando el scroll esté antes del 25% del área de la sección Hero, expande la barra de navegación.
                navbar.classList.remove("collapse");
            }
        });
    }
});


