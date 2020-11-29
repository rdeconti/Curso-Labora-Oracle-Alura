/**
    Projeto Labora/Alura/Oracle ONE
    Curso Alura: JavaScript - Programando na linguagem da web
    Aluna: Rosemeire Deconti
    Exercício: Programar JavaScript na segunda página Web "Aparecida Nutricionista"
    Data: Novembro/2020
**/

/** ------------------------------------------------------------------------ **/
/** Função: remover paciente                                                 **/
/** ------------------------------------------------------------------------ **/

/** obtém a classe .paciente com os dados */
var pacientes = document.querySelectorAll(".paciente");

/** obtém o ID com a tabela de pacientes */
var tabela = document.querySelector("#tabela-pacientes");

/** aguarda o duplo clique em uma linha da tabela para remover o paciente */
tabela.addEventListener("dblclick", function(event) {

    /** adiciona a tag "fadeout" para que a linha seja removida com transição de remoção em 500 microsegundos */
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {

        event.target.parentNode.remove();

    }, 500);

});
