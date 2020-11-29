/**
    Projeto Labora/Alura/Oracle ONE
    Curso Alura: JavaScript - Programando na linguagem da web
    Aluna: Rosemeire Deconti
    Exercício: Programar JavaScript na segunda página Web "Aparecida Nutricionista"
    Data: Novembro/2020
**/

/** ------------------------------------------------------------------------ **/
/** Função: incluir paciente                                                 **/
/** ------------------------------------------------------------------------ **/

/** obtém o botão de adicionar paciente na variável botãoAdicionar */
var botaoAdicionar = document.querySelector("#adicionar-paciente");

/** aguarda o evento CLICK no botão adicionar cliente */
botaoAdicionar.addEventListener("click", function(event) {

    /** impede que o evento padrão ocorra no CLICK do botão - limpar form */
    event.preventDefault();

    /** obtém todos os dados do formulário de inclusão na variável form */
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    /** aciona rotina de validção dos dados preenchidos no formulário */
    var erros = validaPaciente(paciente);

    /** se existem erros exibe mensagens de erro e interrompe processamento */
    if (erros.length > 0) {

        exibeMensagensDeErro(erros);
        return;
    }

    /** chama função para adicionar paciente na tabela de pacientes */
    adicionaPacienteNaTabela(paciente);

    /** limpa todos os dados digitados pelo usuário no formulário */
    form.reset();

    /** limpa as mensagens de erro da tabela de erros */
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

/** ------------------------------------------------------------------------ **/
/** Função: adiciona pacinete na tabela                                      **/
/** Argumentos: dados do paciente                                            **/
/** Retorna: nada - adiciona linha na tabela com dados do paciente           **/
/** ------------------------------------------------------------------------ **/
function adicionaPacienteNaTabela(paciente) {

    /** aciona função para criar linha na tabela */
    var pacienteTr = montaTr(paciente);

    /** obtém a tabela atual na variável tabela */
    var tabela = document.querySelector("#tabela-pacientes");

    /** adiciona nova linha na tabela de pacientes */
    tabela.appendChild(pacienteTr);
}

/** ------------------------------------------------------------------------ **/
/** Função: montar a tabela com os erros da inclusão de paciente             **/
/** Argumentos: erros dos dados informados                                   **/
/** Retorna: nada - atualiza tabela de erros                                 **/
/** ------------------------------------------------------------------------ **/
function exibeMensagensDeErro(erros) {

    /** obtém a tabela de mensagens de erro na varável ul */
    var ul = document.querySelector("#mensagens-erro");

    /** inicializa todo o conteúdo da tabela de erros */
    ul.innerHTML = "";

    /** inicializa todo o conteúdo da tabela de erros */
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

/** ------------------------------------------------------------------------ **/
/** Função: obtém os dados digitados no formulárop                           **/
/** Argumentos: formulário                                                   **/
/** Retorna: variável paciente com todos os dados do paciente                **/
/** ------------------------------------------------------------------------ **/
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

/** ------------------------------------------------------------------------ **/
/** Função: criar linha na tabela paciente                                   **/
/** Argumentos: variável paciente com os dados do paciente                   **/
/** Retorna: linha da tabela paciente preenchida com dados do paciente       **/
/** ------------------------------------------------------------------------ **/
function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

/** ------------------------------------------------------------------------ **/
/** Função: criar cada coluna da tabela                                      **/
/** Argumentos: dado a ser criado e classe                                   **/
/** Retorna: retorna variável td com classe e dado                           **/
/** ------------------------------------------------------------------------ **/
function montaTd(dado, classe) {

    /** cria novo elemento para tabela e salva na variável td */
    var td = document.createElement("td");

    /** adiciona a classe */
    td.classList.add(classe);

    /** adiciona o valor */
    td.textContent = dado;

    return td;
}

/** ------------------------------------------------------------------------ **/
/** Função: ?                                **/
/** Argumentos: ?                                                       **/
/** Retorna: ?      **/
/** ------------------------------------------------------------------------ **/
function validaPaciente(paciente) {

    var erros = [];

    /** MELHORIA: textos das mensagens foram revisadas */

    if (paciente.nome.length == 0) {
        erros.push("Informar o nome do paciente");
    }

    if (paciente.gordura.length == 0) {
        erros.push("Informar o percentual de gordura do paciente");
    }

    if (paciente.peso.length == 0) {
        erros.push("Informar o peso do paciente");
    }

    if (paciente.altura.length == 0) {
        erros.push("Informar a altura do paciente");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso informado é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura informada é inválida");
    }

    return erros;
}
