const {edGalho, edFolha} = require('./array');

function juntaListas(lista1, lista2){
    let listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let posicaoAtualListaFinal = 0;

    while(posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista2[posicaoAtualLista2];

        if(produtoAtualLista1.preco < produtoAtualLista2.preco) {
            listaFinal[posicaoAtualListaFinal]= produtoAtualLista1; //VAI ENTRAR NO ARRAY DA LISTA FINAL NA POSIÇÃO ATUAL DESSE ARRAY FINAL
            posicaoAtualLista1++;
        } else {
            listaFinal[posicaoAtualListaFinal] = produtoAtualLista2;
            posicaoAtualLista2 ++;
        }

        posicaoAtualListaFinal++;
    }

    while(posicaoAtualLista1 < lista1.length) {
        listaFinal[posicaoAtualListaFinal] = lista1[posicaoAtualLista1];
        posicaoAtualLista1++;
        posicaoAtualListaFinal++;
    }

    while(posicaoAtualLista2 < lista2.length) {
        listaFinal[posicaoAtualListaFinal] = lista2[posicaoAtualLista2];
        posicaoAtualLista2++;
        posicaoAtualListaFinal++;
    }

    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha));

