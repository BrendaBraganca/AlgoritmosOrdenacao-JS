const listaLivros = require('./array');
const trocaLugar = require('./encontraMenores');

function quickSort (lista, esquerda, direita) { //DIREITA E ESQURDA SAO INDICES

    if(lista.length > 1){ // E RECURSIVO
        let indiceAtual = particionaLista (lista, esquerda, direita);

        if(esquerda < indiceAtual -1){
            quickSort(lista, esquerda, indiceAtual-1)
        }
        if(indiceAtual < direita){
            quickSort(lista, indiceAtual, direita);
        }
    }

    return lista;
}

function particionaLista(lista, esquerda, direita){
    console.log("LISTA",lista);
    console.log("ESQUERDA", "DIREIRA", esquerda, direita);
    let referencia = lista[Math.floor((esquerda + direita)/2)]; // 1- REFERENCIA TA RECEBENDO UM OBJETO 
    //2- A ESQUERDA EQUIVALE AO INDICE 0 E A DIREITA EQUIVALE AO ULTIMO INDICE, ASSIM SERIA COMO ACHAR UMA MEDIANA (SO QUE NUMA LISTA SEM ORDEM MESMO)
    
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while(atualEsquerda <= atualDireita){ // O INDICE DA ESQUERDA TEM SEMPRE QUE SER MENOR QUE O INDICE DA DIREITA
        while(lista[atualEsquerda].preco < referencia.preco){
            atualEsquerda++; // PORQUE ASSIM A VARIAVEL VAI ANALISAR O PROXIMO ITEM DESSA LISTA
        }
        while(lista[atualDireita].preco > referencia.preco){
            atualDireita--;
        }

        if(atualEsquerda <= atualDireita){
            trocaLugar(lista, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }

    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length -1));


