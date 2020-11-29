/**
    Projeto Labora/Alura/Oracle ONE
    Curso Alura: JavaScript - Programando na linguagem da web
    Aluna: Rosemeire Deconti
    Exercício: Programar JavaScript na segunda página Web "Aparecida Nutricionista"
    Data: Novembro/2020
**/

/** ------------------------------------------------------------------------ **/
/** Função: Obter pacientes via API                                          **/
/** ------------------------------------------------------------------------ **/

/** Obtém botão adicionar clientes via API */
var botaoAdicionar = document.querySelector("#buscar-pacientes");

/** Obtém pacientes via API quanto botão adicionar for "clicado" */
botaoAdicionar.addEventListener("click", function() {

    /** instanciar objeto para utilizar */
    var xhr = new XMLHttpRequest();

    /** abrir o endereço (URL) com a lista de pacientes a serem incluídos */
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    /** aguardar o retorno dos dados para carregar pacientes na tabela */
    xhr.addEventListener("load", function() {

        /** obtém ID do erro para carge de pacientes na tabela */
        var erroAjax = document.querySelector("#erro-ajax");

        /** retorno = 200: dados foram obtidos com sucesso */
        if (xhr.status == 200) {

            /** torna mensagem de erro invisível */
            erroAjax.classList.add("invisivel");

            /** obtém os dados na variável */
            var resposta = xhr.responseText;

            /** converte o JSON para array */
            var pacientes = JSON.parse(resposta);

            /** obtém os pacientes do array e aciona função para adicionar paciente na tabela */
            pacientes.forEach(function(paciente) {

                adicionaPacienteNaTabela(paciente);

            });

        } else {

            /** retorno <> 200 - exibe erro da obtenção dos dados */
            erroAjax.classList.remove("invisivel");

        }

    });

    /** envia o request dos dados via API */
    xhr.send();

});
