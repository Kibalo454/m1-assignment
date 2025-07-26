document.addEventListener("DOMContentLoaded", function () {
  const contactSelect = document.getElementById("contact-method");
  const emailBox = document.getElementById("email-container");
  const phoneBox = document.getElementById("phone-container");

  contactSelect.addEventListener("change", function () {
    emailBox.style.display = "none";
    phoneBox.style.display = "none";

    if (this.value === "email") {
      emailBox.style.display = "block";
    } else if (this.value === "phone") {
      phoneBox.style.display = "block";
    }
  });
});
