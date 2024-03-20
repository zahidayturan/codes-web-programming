function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  setTheme();
});

btn2.addEventListener("click", function () {
  btn2.classList.toggle("active");
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });

  const profile = document.getElementById("profile");
  profile.style.backgroundImage = 'url("./assets/grid-dark.png")';

  const experience = document.getElementsByClassName("experience-container");
  experience[0].style.backgroundImage = 'url("./assets/we-dark.png")';

  const works = document.getElementsByClassName("works-container");
  works[0].style.backgroundImage = 'url("./assets/digits-dark.png")';
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });

  const profile = document.getElementById("profile");
  profile.style.backgroundImage = 'url("./assets/grid-light.png")';

  const experience = document.getElementsByClassName("experience-container");
  experience[0].style.backgroundImage = 'url("./assets/we-light.png")';

  const works = document.getElementsByClassName("works-container");
  works[0].style.backgroundImage = 'url("./assets/digits-light.png")';
}

const languages = {
  tr: {
    language: "EN",
    idea__1: "Fikirlerinizi",
    idea__2: "Gerçeğe",
    idea__3: "Dönüştürüyoruz",

  },
  en: {
    language: "TR",
    idea__1: "We Bring",
    idea__2: "Your Ideas",
    idea__3: "To Life",

  },
};


document.addEventListener("DOMContentLoaded", function () {
  const currentLanguage = localStorage.getItem("language") || "tr";
  setLanguage(currentLanguage);
});


function toggleLanguage() {
  const currentLanguage = localStorage.getItem("language") || "tr";
  const newLanguage = currentLanguage === "tr" ? "en" : "tr";
  setLanguage(newLanguage);
}


function setLanguage(language) {
  localStorage.setItem("language", language);

  Object.keys(languages[language]).forEach(function (key) {
    const elements = document.querySelectorAll(`[data-translate="${key}"]`);
    elements.forEach(function (element) {
      element.textContent = languages[language][key];
    });
  });
}
