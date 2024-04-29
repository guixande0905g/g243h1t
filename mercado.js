const Fila = () =>{
    let dados= [];
    const enfileirar = valor =>{
        dados.push(valor)
        imprimir();
       }
}
    const tamanho = () => dados.length
    const estaVaia = () => dados length <1;
    const desenfileirar = () => {
        if(estaVaia){
            dados.push(0,1);
            imprimir();
        
        }
    }
    const imprimir = () => {
        console.log(dados);
    
    }
return {
    enfileirar,
    desenfileirar,
    tamanho,
};
const filaUnica = Fila();
const numItens => 
(function(){
    for(let i=0; i<15;i++){
        filaUnica.enfileirar{id:"P"+Unif1.tamanho()+1, itens:numItens()}
    }
})();