let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let Resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    Resultado.innerHTML = `<p>${qtdTotalCarne}g de carne</p>`
    Resultado.innerHTML += `<p>${qtdTotalCerveja}ml de cerveja</p>`
    Resultado.innerHTML += `<p>${qtdTotalBebidas}ml de bebidas</p>`
}

function carnePP(duracao) {
    let carne = 400
    if (duracao >= 6) { carne = 650 }
    return carne;

}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }

}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }

}