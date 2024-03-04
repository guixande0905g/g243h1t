imprime = (msg) => console.log(msg);

FazerSorteio = () => {
     let num1 = document.getElementById("inicio").value;
     let num2 = document.getElementById("fim").value;
     let sorteio = Math.floor( Math.random(inicio,fim+1)*100);

     document.getElementById("resultado").innerHTML = sorteio;

}
