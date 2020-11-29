/**
    Projeto Labora/Alura/Oracle ONE
    Curso Alura: JavaScript - Programando na linguagem da web
    Aluna: Rosemeire Deconti
    Exercício: Programar JavaScript na segunda página Web "Aparecida Nutricionista"
    Data: Novembro/2020
**/

/** ------------------------------------------------------------------------ **/
/** Função: filtrar paciente por nome                                        **/
/** ------------------------------------------------------------------------ **/

/** Obtém o campo de filtrar pacientes por nome na variavél */
var campoFiltro = document.querySelector("#filtrar-tabela");

/** Aguarda o usuário digitar no campoFiltro = evento "input" */
campoFiltro.addEventListener("input", function() {

    /** Obtém a classe "paciente" e salva na variável */
    var pacientes = document.querySelectorAll(".paciente");

    /** Se o objeto foco do envento "this" tiver sido digitado ele será processado */
    if (this.value.length > 0) {

       /**  loop para obter cada um dos pacientes e verificar o nome */
        for (var i = 0; i < pacientes.length; i++) {

            /** salva os dados do paciente a ser processado na variavél */
            var paciente = pacientes[i];

            /** obtém o campo do nome do paciente e salva na variável */
            var tdNome = paciente.querySelector(".info-nome");

            /** obtém o conteúdo do campo nome do paciente e salva na variável */
            var nome = tdNome.textContent;

            /** instanciar objeto RegExp para utilizar na busca do nome */
            /** this é o objeto que está sendo tratado no loop */
            var expressao = new RegExp(this.value, "i");

            /** verifica se o nome do paciente pertence a expressão RegExp  */
            /** dependendo do resultado é adicionada a classe correspondente */
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }

        }

    } else {

        /** se o campo para filtrar nomes estiver sem digitação remove a classe "invisível" */
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }

    }
});
