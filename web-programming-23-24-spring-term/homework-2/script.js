
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

document.getElementById("GitHub").addEventListener("click", function() {
    window.open('https://github.com/zahidayturan', '_blank');
});


$(document).ready(function() {
    $('#registration-form').validate({
        errorElement: 'div',
        errorClass: 'error-message',
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            surname: {
                required: true,
                minlength: 2,
            },
            phone: {
                required: true,
                minlength: 7,
                maxlength: 13
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 4,
            },
            'confirm-password': {
                required: true,
                equalTo: "#password",
                minlength: 4
            }
        },
        messages: {
            name: {
                required: "",
                minlength: "Ad en az 2 karakter içermeli",
            },
            surname: {
                required: "",
                minlength: "Soyad en az 2 karakter içermeli",
            },
            phone: {
                required: "",
                minlength: "Eksik yazdınız",
                maxlength: "Uygun formatta giriniz. (555 555 55 55)"
            },
            email: {
                required: "",
                email: "E-posta adresi geçerli değil"
            },
            password: {
                required: "",
                minlength: "Şifre en az 4 karakterden oluşmalıdır",
            },
            'confirm-password': {
                required: "",
                minlength: "Şifre tekrarı en az 4 karakterden oluşmalıdır",
                equalTo: "Şifreler uyuşmuyor"
            }
        },
        submitHandler: function(form) {
            var confirmation = confirm("Bilgiler: \n" +
                "Ad: " + $("#name").val() + "\n" +
                "Soyad: " + $("#surname").val() + "\n" +
                "E-posta: " + $("#email").val() + "\n" +
                "Telefon: " + $("#phone").val() + "\n");
            if (confirmation) {
                form.submit();
                window.location.href = "page2.html";
            }
        }
    });
});
