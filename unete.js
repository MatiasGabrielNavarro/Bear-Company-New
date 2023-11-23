function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var preview = document.getElementById('preview');

    var file = fileInput.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;
            preview.innerHTML = '';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecciona un archivo.');
    }
}
