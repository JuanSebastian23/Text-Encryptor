function clearText() {
    var textarea = document.getElementById('textPrompt');
    if (textarea.value === 'Ingresar texto aquí...') {
      textarea.value = '';
    }
  }

  function toggleDarkMode() {
    var elements = document.querySelectorAll('body, .form-control, .card');
    elements.forEach(function(el) {
        el.classList.toggle('dark-mode');
    });
}

function toLowerCaseText() {
    var textarea = document.getElementById('textPrompt');
    var text = textarea.value;
    var lowerCaseText = text.toLowerCase();
    textarea.value = lowerCaseText;
}

function encryptText() {
    toLowerCaseText();
    var textarea = document.getElementById('textPrompt');
    var text = textarea.value;
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
}

function decryptText() {
    toLowerCaseText();
    var textarea = document.getElementById('textPrompt');
    var encryptedText = textarea.value;
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


