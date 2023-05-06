const listaLivros = require('./array');

function encontraMenores(referencia, lista) {
    let quantidadeDeMenores = 0;

    for(let atual = 0; atual < lista.length; atual++){
        let produtoAtual = lista[atual];

        if(produtoAtual.preco < referencia.preco){
            quantidadeDeMenores++;
        }
    }

    trocaLugar(lista, lista.indexOf(referencia), quantidadeDeMenores);
    return lista;
}

function trocaLugar (lista, origem, destino){
    const item1 = lista[origem];
    const item2 = lista[destino];

    lista[destino] = item1;
    lista[origem] = item2;
}

function divideNaReferencia(lista){
    let referencia = lista[Math.floor(lista.length/2)];
    encontraMenores(referencia, lista);

    let valoresMenores = 0; // VAI SER A PRIMEIRA POSICAO NO ARRAY

    for(let analisando = 0; analisando < lista.length; analisando++) {
        let itemAtual = lista[analisando];

        if(itemAtual.preco < referencia.preco && itemAtual != referencia){
            trocaLugar(lista, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return lista;
}

console.log(divideNaReferencia(listaLivros));
//console.log(encontraMenores(listaLivros[2], listaLivros));


module.exports = trocaLugar;
