

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        const isHidden = mainNav.classList.toggle("hidden");
        navToggle.setAttribute("aria-expanded", String(!isHidden));
        navToggle.textContent = isHidden ? "Mostrar menú" : "Ocultar menú";
    });
}

const contactForm = document.getElementById("contact-form");
const nameField = document.getElementById("nombre");
const emailField = document.getElementById("email");
const opinionField = document.getElementById("opinion");

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

if (contactForm && nameField && emailField && opinionField) {
    contactForm.addEventListener("submit", (event) => {
        let formIsValid = true;
        let errorMessage = "";

        const nameValue = nameField.value.trim();
        const emailValue = emailField.value.trim();
        const opinionValue = opinionField.value.trim();

        nameField.classList.remove("invalid");
        emailField.classList.remove("invalid");
        opinionField.classList.remove("invalid");

        if (nameValue.length < 3) {
            formIsValid = false;
            errorMessage += "Por favor ingresa tu nombre completo (mínimo 3 caracteres).\n";
            nameField.classList.add("invalid");
        }

        if (!isValidEmail(emailValue)) {
            formIsValid = false;
            errorMessage += "Por favor ingresa un correo electrónico válido.\n";
            emailField.classList.add("invalid");
        }

        if (opinionValue.length < 10) {
            formIsValid = false;
            errorMessage += "Por favor escribe una opinión más detallada (mínimo 10 caracteres).\n";
            opinionField.classList.add("invalid");
        }

        if (!formIsValid) {
            event.preventDefault();
            alert(errorMessage);
        }
    });
}
