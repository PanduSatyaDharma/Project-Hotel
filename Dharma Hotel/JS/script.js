const menu = document.querySelector("#burger");
const navbar = document.querySelector("header nav");
const dropdownToggles = document.querySelectorAll(".dropdown > a");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!navbar.contains(e.target) && !menu.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

const header = document.getElementById("header");

function checkScroll() {
  if (window.scrollY > 500) {
    header.classList.add("scrolled");
    header.classList.remove("transparent");
  } else {
    header.classList.add("transparent");
    header.classList.remove("scrolled");
  }
}

if (window.location.pathname.endsWith("halaman1.html")) {
  document.addEventListener("DOMContentLoaded", checkScroll);
  window.addEventListener("scroll", checkScroll);
}


document.querySelectorAll(".navbar-extra a").forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    if (anchor.getAttribute("href") === "#") {
      event.preventDefault();
    }
  });
});

// Login logic
document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".extra.login");
  const bookNowButton = document.querySelector(".extra.book-now");
  const kelolaButton = document.querySelector(".extra.kelola");

  const userRole = sessionStorage.getItem("role");

  if (userRole === "user") {
    loginButton.style.display = "none";
    kelolaButton.style.display = "none";
    bookNowButton.style.display = "block";
  } else if (userRole === "admin") {
    loginButton.style.display = "none";
    bookNowButton.style.display = "none";
    kelolaButton.style.display = "block";
  } else {
    loginButton.style.display = "block";
    bookNowButton.style.display = "none";
    kelolaButton.style.display = "none";
  }
});

