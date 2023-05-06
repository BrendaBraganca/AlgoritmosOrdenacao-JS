const listaLivros = require('./arrayOrdenado');

function busca(lista, iniciando, terminando, valorBuscado) { 
    const meio = Math.floor((iniciando + terminando)/2);
    const atual = lista[meio];  

    if(iniciando > terminando){
        return -1;
    }

    if(valorBuscado === atual.preco){
        return meio;
    }
    if(valorBuscado < atual.preco){
        return busca(lista, iniciando, meio-1, valorBuscado);
    }
    if(valorBuscado > atual.preco){
        return busca(lista, meio +1, terminando, valorBuscado);
    }
    
}

console.log(busca(listaLivros, 0, listaLivros.length-1, 40));

