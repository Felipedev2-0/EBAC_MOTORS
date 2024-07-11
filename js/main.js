$(document).ready(function () {
    //carousel
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false, 
        autoplaySpeed: 3000 // tempo para mudança
    })

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle()
    })
    //jquery mask plugin
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(00) 00000-0000'
    });

    $('#nome').mask('A', {
        translation: {
            'A': { pattern: /[A-Za-z\s]/, recursive: true}
        }
    })



    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            telefone: 'Por favor, insira o seu telefone',
            email: 'Por favor, insira o seu email'
        },
        submitHandler: function(form) {
            alert('Proposta Enviada')
            form.submit()
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    //ao clicar em tenho interesse, será direcionado para o campo veiculo de interesse
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')

       const nomeVeiculo =  $(this).parent().find('h3').text();

       $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})