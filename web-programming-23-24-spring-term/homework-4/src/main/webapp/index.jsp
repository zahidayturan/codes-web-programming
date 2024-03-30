<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Homework 4 - File Upload</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
</head>
<body>

<section id="header">
    <div class="container-fluid-custom">
        <a href="https://github.com/zahidayturan" target="_blank">
            <img id="GitHub" class="icon" src="./assets/github-light.png" alt="Github Link"/>
        </a>
    </div>
</section>


<h1 class="header">Dosya Yükleyici</h1>
<form id="uploadForm" action="upload" method="post" enctype="multipart/form-data">
    <div class="form-group">
        <label for="fileInput" style="font-size: 24px">Yüklenecek Dosyaları Seçin</label>
        <input type="file" class="form-control-file" id="fileInput" name="file" multiple>
    </div>
    <button type="submit" id="uploadBtn" class="btn btn-primary" disabled>Yükle</button>
</form>


<div class="progress">
    <div id="progressBar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>


<button id="removeFilesBtn" class="btn btn-danger mt-3" style="display: none;">Seçilenleri Kaldır</button>

<script>
    $(document).ready(function() {
        var maxFileSizeMB = 20;
        var fileInput = $('#fileInput');
        var progressBar = $('#progressBar');
        var removeFilesBtn = $('#removeFilesBtn');
        var uploadBtn = $('#uploadBtn');

        fileInput.change(function() {
            var fileSizeMB = this.files[0].size / 1024 / 1024;
            if (fileSizeMB > maxFileSizeMB) {
                alert('En fazla ' + maxFileSizeMB + ' MB. yükleme yapabilirsiniz');
                $(this).val('');
                uploadBtn.prop('disabled', true);
            } else {
                removeFilesBtn.show();
                uploadBtn.prop('disabled', false);
            }
        });


        $('#uploadForm').submit(function(e) {
            e.preventDefault();

            var formData = new FormData($(this)[0]);

            $.ajax({
                url: 'upload',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                xhr: function() {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener('progress', function(e) {
                        if (e.lengthComputable) {
                            var percentage = Math.round((e.loaded / e.total) * 100);
                            progressBar.css('width', percentage + '%').attr('aria-valuenow', percentage);
                        }
                    });
                    return xhr;
                },
                success: function(response) {
                    console.log(response);
                    progressBar.css('width', '0%').attr('aria-valuenow', 0);
                    $('#fileInput').val('');
                    uploadBtn.prop('disabled', true);
                    removeFilesBtn.hide();
                    alert('Seçilen dosyalar başarıyla yüklendi.');
                },
                error: function(xhr, status, error) {
                    console.error(xhr.responseText);
                    progressBar.css('width', '0%').attr('aria-valuenow', 0);
                    alert('Yükleme sırasında bir hata meydana geldi. Lütfen tekrar deneyiniz.');
                },
                beforeSend: function() {
                    progressBar.css('width', '0%').attr('aria-valuenow', 0);
                }
            });
        });

        removeFilesBtn.click(function() {
            $('#fileInput').val('');
            uploadBtn.prop('disabled', true);
            removeFilesBtn.hide();
        });
    });
</script>

</body>
</html>
