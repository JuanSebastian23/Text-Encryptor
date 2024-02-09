// Esta función limpia el contenido del área de texto si el valor actual es 'Ingresar texto aquí...'
function clearText() {
    var textarea = document.getElementById('textPrompt');
    if (textarea.value === 'Ingresar texto aquí...') {
        textarea.value = '';
    }
}

// Esta función alterna el modo oscuro en el cuerpo del documento y en algunos elementos seleccionados
function toggleDarkMode() {
    var elements = document.querySelectorAll('body, .form-control, .card');
    elements.forEach(function(el) {
        el.classList.toggle('dark-mode');
    });
}

// Esta función convierte el texto en el área de texto a minúsculas
function toLowerCaseText() {
    var textarea = document.getElementById('textPrompt');
    var text = textarea.value;
    var lowerCaseText = text.toLowerCase();
    textarea.value = lowerCaseText;
}

// Esta función encripta el texto en el área de texto utilizando un cifrado simple de sustitución
function encryptText() {
    var textarea = document.getElementById('textPrompt');
    var text = textarea.value.trim();
    var defaultText = 'Ingresar texto aquí...';

    // Verificar si el texto está vacío o es el texto por defecto
    if (text === '' || text === defaultText) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'No se puede encriptar un texto vacío'
        });
        return; // Salir de la función
    }

    toLowerCaseText();
    text = textarea.value;
    var encryptedText = '';
    for (var i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'a':
                encryptedText += 'ai';
                break;
            case 'e':
                encryptedText += 'enter';
                break;
            case 'i':
                encryptedText += 'imes';
                break;
            case 'o':
                encryptedText += 'ober';
                break;
            case 'u':
                encryptedText += 'ufat';
                break;
            default:
                encryptedText += text[i];
        }
    }
    textarea.value = encryptedText;

    // Ocultar el botón de encriptar y mostrar el botón de copiar
    document.querySelector('.btn[onclick="encryptText()"]').style.display = 'none';
    document.querySelector('.btn[onclick="copyToClipboard()"]').style.display = 'block';
}

// Esta función desencripta el texto en el área de texto utilizando el mismo cifrado de sustitución que la función de encriptación
function decryptText() {
    var textarea = document.getElementById('textPrompt');
    var encryptedText = textarea.value.trim();
    var defaultText = 'Ingresar texto aquí...';

    // Verificar si el texto está vacío o es el texto por defecto
    if (encryptedText === '' || encryptedText === defaultText) {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'No se puede desencriptar un texto vacío'
        });
        return; // Salir de la función
    }

    toLowerCaseText();
    encryptedText = textarea.value;
    var decryptedText = encryptedText.replace(/(ai|enter|imes|ober|ufat)/g, function(match) {
        switch (match) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
            default:
                return match; // Devolver la coincidencia original si no coincide con ninguna palabra clave
        }
    });
    textarea.value = decryptedText;
}

// Esta función copia el texto en el área de texto al portapapeles
function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById('textPrompt').value)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'Texto copiado al portapapeles',
                timer: 2000,
                showConfirmButton: false
            }).then(() => {
                location.reload();
            });
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Error al copiar el texto: ' + err
            });
        });
}