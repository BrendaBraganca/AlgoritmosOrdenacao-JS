const listaLivros = require('./array');

function mergeSort(lista, nivelAninhamento = 0) {
    console.log(`nível de aninhamento: ${nivelAninhamento}`);
    console.log(lista);

    if(lista.length > 1) {
        const meio = Math.floor(lista.length/2);
        const parte1= mergeSort(lista.slice(0, meio), nivelAninhamento++);
        const parte2 = mergeSort(lista.slice(meio, lista.length), nivelAninhamento++);
        lista = ordena(parte1, parte2);
    }

    return lista; 
}

function ordena (parte1, parte2){
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const listaOrdenada = [];

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco) {
            listaOrdenada.push(produtoAtualParte1);
            posicaoAtualParte1++;
        } else {
            listaOrdenada.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }

    return listaOrdenada.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2)) //SE NÃO SOBRAR ITEM NA PARTE1, TEM QUE SOBRAR NA PARTE DOIS OU ELES SERIAM DO MESMO TAMAMHO
}



console.log(mergeSort(listaLivros));