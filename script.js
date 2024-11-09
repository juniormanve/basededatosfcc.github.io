// Ejemplo de un pequeño comportamiento interactivo para mostrar la fecha actual en el pie de página

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.textContent += ` | Última actualización: ${currentYear}`;
});

// Comportamiento para añadir un efecto hover sobre el logo
const logo = document.getElementById("logo");
logo.addEventListener("mouseover", () => {
    logo.style.transform = "scale(1.1)";
});
logo.addEventListener("mouseout", () => {
    logo.style.transform = "scale(1)";
});

// Agregar animación al hacer clic en los botones de descarga
document.querySelectorAll('.download').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.9)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });
});

// Desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
