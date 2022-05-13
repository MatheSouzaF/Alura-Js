console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Gramado`,
    `Urubici`,
    `Gaspar`,
);


<<<<<<< aula
const idadeComprador = 18;
const estaAcompanhada = false
const temPassagemComprada = true

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(2, 1);//Removendo item no elemento!
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(2, 1);//Removendo item no elemento!

// } else {
//     console.log("Não  é maior de Idade e não posso vender");
// }


if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1);//Removendo item no elemento!
} else {
    console.log("Não  é maior de Idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!")
}else{
    console.log("Voce não pode embarcar")
}

=======
const idadeComprador = 15;
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

//Removendo item no elemento!
listaDeDestinos.splice(3,1);
>>>>>>> master
console.log(listaDeDestinos);
