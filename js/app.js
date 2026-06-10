// app.js contiene solo la lógica común para todas las páginas del router HTML.
// Cada pestaña vive en su propio archivo, por eso aquí no se maneja navegación interna por secciones.

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const toast = document.querySelector("#toast");
const reservationForm = document.querySelector("#reservation-form");

let toastTimer;

// Muestra un aviso temporal en pantalla y también un alert clásico para mantener el comportamiento demostrativo.
function showTemporaryAlert(message) {
  if (!message || !toast) return;

  window.alert(message);
  toast.textContent = message;
  toast.classList.add("visible");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("visible");
  }, 3200);
}

// Abre o cierra el menú responsive en celulares.
function toggleMobileMenu() {
  if (!mainNav || !menuToggle) return;

  const isOpen = mainNav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

// Cierra el menú móvil al tocar cualquier enlace del menú.
function closeMobileMenu() {
  if (!mainNav || !menuToggle) return;

  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMobileMenu);
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Los elementos con data-alert son placeholders: videos, perfiles, asistencia o tarjetas informativas.
document.querySelectorAll("[data-alert]").forEach((element) => {
  element.addEventListener("click", () => {
    showTemporaryAlert(element.dataset.alert);
  });
});

// Formulario demostrativo: valida campos obligatorios y evita cualquier envío real.
if (reservationForm) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const requiredFields = reservationForm.querySelectorAll("[required]");
    const hasEmptyField = [...requiredFields].some((field) => !field.value.trim());

    if (hasEmptyField) {
      showTemporaryAlert("Por favor completa los campos obligatorios antes de enviar la solicitud.");
      return;
    }

    showTemporaryAlert("Solicitud registrada de forma demostrativa. La conexión con Supabase se implementará en la siguiente etapa.");
    reservationForm.reset();
  });
}
