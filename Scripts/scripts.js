$(document).ready(function () {
    // Aplica a máscara de telefone
    $('#phone').mask('(00) 00000-0000');

    $('#contactPhoneInput').mask('(00) 00000-0000');
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('contactNameInput').value;
    const email = document.getElementById('contactEmailInput').value;
    const phone = document.getElementById('contactPhoneInput').value;
    const preferredContactMethod = document.querySelector('input[name="$PreferenciaContato"]:checked');

    let isValid = true;

    // Validação do Nome
    if (!validator.isLength(name, { min: 1 })) {
        alert('O nome é obrigatório.');
        isValid = false;
    }

    // Validação do E-mail
    if (!validator.isEmail(email)) {
        alert('O e-mail é inválido.');
        isValid = false;
    }

    // Validação do Telefone
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert('O telefone está no formato inválido.');
        isValid = false;
    }


    // Validação da Forma de Contato Preferida
    if (!preferredContactMethod) {
        alert('A forma de contato preferida é obrigatória.');
        isValid = false;
    }

    if (isValid) {
        // Se todas as validações passarem, submeta o formulário
        this.submit();
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    function setEqualHeight() {
        // Seleciona todos os cards
        var cards = document.querySelectorAll('#services .card');
        var maxHeight = 0;

        // Encontra a altura máxima entre todos os cards
        cards.forEach(function (card) {
            card.style.height = 'auto'; // Remove qualquer altura fixa
            var height = card.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        // Define todos os cards para a altura máxima
        cards.forEach(function (card) {
            card.style.height = maxHeight + 'px';
        });
    }

    setEqualHeight();

    // Ajusta a altura se a janela for redimensionada
    window.addEventListener('resize', setEqualHeight);
});

document.addEventListener('DOMContentLoaded', function () {
    function setEqualHeight() {
        // Seleciona todos os cards
        var cards = document.querySelectorAll('#products .card');
        var maxHeight = 0;

        // Encontra a altura máxima entre todos os cards
        cards.forEach(function (card) {
            card.style.height = 'auto'; // Remove qualquer altura fixa
            var height = card.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        // Define todos os cards para a altura máxima
        cards.forEach(function (card) {
            card.style.height = maxHeight + 'px';
        });
    }

    setEqualHeight();

    // Ajusta a altura se a janela for redimensionada
    window.addEventListener('resize', setEqualHeight);
});



$(document).ready(function () {
    $('.popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true // Habilita a galeria de imagens (se necessário)
        }
    });
});


$(document).ready(function () {
    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
