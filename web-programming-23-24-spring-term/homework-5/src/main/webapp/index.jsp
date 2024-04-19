<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>

<head>
    <title>Homework 5 - Cookies</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
</head>

<body>

<section id="header">
    <div class="container-fluid-custom">
        <a href="https://github.com/zahidayturan" target="_blank">
            <img id="GitHub" class="icon" src="./assets/github-light.png" alt="Github Link"/>
        </a>
    </div>
</section>


<section id="form">
    <div class="form-container">
        <p class="form-header-p1">Hesap Oluşturun</p>
        <form class="registration-form" id="registration-form" action="servlet" method="POST">
            <div class="user-box">
                <input type="text" id="name" name="name" required>
                <label for="name">Kullanıcı Adı</label>
            </div>

            <div class="user-box">
                <input type="password" id="password" name="password" required>
                <label for="password">Şifre</label>
            </div>

            <div class="checkbox">
                <input type="checkbox" id="remember" name="remember">
                <label for="remember">Sonraki Girişte Hatırla</label>
            </div>

            <button type="submit" class="button">Kayıt Ol</button>
        </form>

    </div>

</section>


<div class="footer">
    <div class="container-fluid-custom">
        <div class="custom-row">
            <div class="footer-text-p1">Designed and developed by</div>
            <a href="https://zahidayturan.github.io/" target="_blank">
                <img
                        id="dd-icon"
                        class="icon"
                        src="./assets/dd-icon.png"
                        alt="Color them icon"/>
            </a>
        </div>
    </div>
</div>

<script src="script.js"></script>

</body>

</html>