$(document).ready(function () {
    // Aplica a máscara de telefone
    $('#phone').mask('(00) 0000-0000');

    $('#contactPhoneInput').mask('(00) 0000-0000');

    // Configuração do Parsley.js
    $('.formulario-form').parsley();
});
Parsley.addMessages('pt-br', {
    defaultMessage: "Este valor é inválido.",
    type: {
        email:        "Este valor não é um e-mail válido.",
        url:          "Este valor não é uma URL válida.",
        number:       "Este valor não é um número válido.",
        integer:      "Este valor deve ser um número inteiro.",
        digits:       "Este valor deve conter apenas dígitos.",
        alphanum:     "Este valor deve conter apenas caracteres alfanuméricos."
    },
    notblank:       "Este valor não pode estar vazio.",
    required:       "Este campo é obrigatório.",
    pattern:        "Este valor é inválido.",
    min:            "Este valor deve ser maior ou igual a %s.",
    max:            "Este valor deve ser menor ou igual a %s.",
    range:          "Este valor deve estar entre %s e %s.",
    minlength:      "Este valor é muito curto. Deve ter pelo menos %s caracteres.",
    maxlength:      "Este valor é muito longo. Deve ter no máximo %s caracteres.",
    minlength:      "Este valor é muito curto. Deve ter pelo menos %s caracteres.",
    maxlength:      "Este valor é muito longo. Deve ter no máximo %s caracteres.",
    mincheck:       "Você deve selecionar pelo menos %s opções.",
    maxcheck:       "Você deve selecionar no máximo %s opções.",
    check:          "Você deve selecionar entre %s e %s opções.",
    equalto:        "Este valor deve ser idêntico."
});

Parsley.setLocale('pt-br');

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
document.addEventListener('DOMContentLoaded', function() {
    function setEqualHeight() {
        // Seleciona todos os cards
        var cards = document.querySelectorAll('#services .card');
        var maxHeight = 0;

        // Encontra a altura máxima entre todos os cards
        cards.forEach(function(card) {
            card.style.height = 'auto'; // Remove qualquer altura fixa
            var height = card.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        // Define todos os cards para a altura máxima
        cards.forEach(function(card) {
            card.style.height = maxHeight + 'px';
        });
    }

    setEqualHeight();

    // Ajusta a altura se a janela for redimensionada
    window.addEventListener('resize', setEqualHeight);
});

VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 25,
    speed: 400
});