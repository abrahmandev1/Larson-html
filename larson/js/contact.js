document.addEventListener("DOMContentLoaded", function () {
  // Injecting CSS styles dynamically
  const style = document.createElement("style");
  style.innerHTML = `
    #formAlert {
      opacity: 0;
      visibility: hidden;
      transition: opacity 1s ease-in-out, visibility 0s 1s;
    }

    #formAlert.show {
      visibility: visible;
      opacity: 1;
    }

    .fade-out {
      opacity: 0;
      visibility: hidden;
    }
  `;
  document.head.appendChild(style);

  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (form.checkValidity()) {
      alertBox.classList.remove("d-none", "fade-out");
      alertBox.classList.add("show"); // Make alert visible and fade-in
      form.reset();

      setTimeout(() => {
        alertBox.classList.remove("show"); // Start fade-out
        alertBox.classList.add("fade-out");

        setTimeout(() => {
          alertBox.classList.add("d-none"); // Hide completely after fade-out
          alertBox.classList.remove("fade-out");
        }, 1000); // Wait for the fade-out duration to complete
      }, 4000);
    } else {
      form.reportValidity();
    }
  });
});
