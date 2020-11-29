/**
    Projeto Labora/Alura/Oracle ONE
    Curso Alura: JavaScript - Programando na linguagem da web
    Aluna: Rosemeire Deconti
    Exercício: Programar JavaScript na segunda página Web "Aparecida Nutricionista"
    Data: Novembro/2020
**/

/** ------------------------------------------------------------------------ **/
/** Função: calcular o IMC do paciente                                       **/
/** ------------------------------------------------------------------------ **/

/** MELHORIA: A alteração do nome da página por código está desativada **/
/**
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
**/

/** Obter na variável pacientes todos os pacientes da classe .paciente */
var pacientes = document.querySelectorAll(".paciente");

/** Obter cada paciente e calcular o IMC */
for (var i = 0; i < pacientes.length; i++) {

    /** obtém na variável paciente o paciente que está sendo processado "i" */
    var paciente = pacientes[i];

    /** obtém o conteúdo do peso */
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    /** obtém o conteúdo da altura */
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    /** obtém o conteúdo do peso */
    var tdImc = paciente.querySelector(".info-imc");

    /** chama função para validação do peso e salva retorno em variável */
    var pesoEhValido = validaPeso(peso);

    /** chama função para validação da altura e salva retorno em variável */
    var alturaEhValida = validaAltura(altura);

    /** se peso é inválido retorna erro na coluna IMC da tabela de pacientes */
    if (!pesoEhValido) {
        /** MELHORIA - desativar comando pois objeto já é igual FALSE
        /** pesoEhValido = false; */
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    /** se peso é inválido retorna erro na coluna IMC da tabela de pacientes */
    if (!alturaEhValida) {
        /** MELHORIA - desativar comando pois objeto já é igual FALSE
        /** alturaEhValida = false; */
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    /** Calcula IMC do paciente somente se peso e altura são válidos */
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

/** ------------------------------------------------------------------------ **/
/** Função: calcular o IMC do paciente                                       **/
/** Argumentos: peso e altura                                                **/
/** Retorna: IMC calculado com 2 decimais                                    **/
/** ------------------------------------------------------------------------ **/
function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

/** ------------------------------------------------------------------------ **/
/** Função: validação da altura do paciente                                  **/
/** Argumentos: altura                                                       **/
/** Retorna: TRUE para arguemnto válido e FALSE para argumento inválido      **/
/** ------------------------------------------------------------------------ **/
function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

/** ------------------------------------------------------------------------ **/
/** Função: validação do peso do paciente                                    **/
/** Argumentos: peso                                                         **/
/** Retorna: TRUE para arguemnto válido e FALSE para argumento inválido      **/
/** ------------------------------------------------------------------------ **/
function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}
