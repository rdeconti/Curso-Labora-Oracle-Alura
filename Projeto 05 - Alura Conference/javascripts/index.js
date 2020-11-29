/**
****************************************************************************
  Projeto Labora/Alura/Oracle ONE
  Curso Alura: Projeto de Conclusão Formação 1 e Formação 2
  Aluna: Rosemeire Deconti
  Exercício: Página WEB Conferência Alura
  Data: Novembro/2020
****************************************************************************
**/

function smoothScroll(selector) {

    $(selector).click(function(event) {

        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800)
    });
}

smoothScroll('a[href*=details]');
smoothScroll('a[href*=speakers]');
smoothScroll('a[href*=location]');
smoothScroll('a[href*=presentation]');
smoothScroll('a[href*=email]');
