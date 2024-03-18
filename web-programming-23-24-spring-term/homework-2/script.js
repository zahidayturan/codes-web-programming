
const btn = document.getElementById("modeToggle");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    setDarkMode();
}

btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    setTheme();
});

function setTheme() {
    const currentTheme = document.body.getAttribute("theme");

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

}

function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light");
    });
}

document.getElementById("dd-icon").addEventListener("click", function() {
    window.location.href = "#header";
});


$(document).ready(function() {
    $('#registration-form').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var surname = $('#surname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();


        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Lütfen geçerli bir e-posta adresi giriniz.");
            return;
        }


        if (password !== confirmPassword) {
            alert("Şifreler eşleşmiyor. Lütfen aynı şifreyi giriniz.");
            return;
        }

        alert("Kayıt başarıyla tamamlandı. Bilgileriniz:\nAd: " + name + "\nSoyad: " + surname + "\nE-posta: " + email + "\nTelefon: " + phone);
        window.location.href = "page2.html";
    });
});

