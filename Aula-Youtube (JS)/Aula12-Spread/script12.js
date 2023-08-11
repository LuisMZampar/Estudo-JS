//Operador Spread (espalhador em Javascript)

/*

const jogador1 = {nome: "Bruno", energia: 100, vida: "3", magia: 150}
const jogador2 = {nome: "Bruce", energia: 100, vida: "5", velocidade: 80}
const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3)

console.log("n1: "+ n1)
console.log("n2: "+ n2)
console.log("n3: "+ n3)
console.log("Tipo de n3: "+ typeof(n3))

Retorna uma coleção de elementos é diferente de uma array
Coleta todos os Divs

*/

/*

const soma= (v1, v2, v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]

//Se não tivesse os ... ele não teria somado, pois ia atribuir só para o 1 número(v1)
console.log(soma(...valores))

*/ 

const objs1= document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(element => {
    console.log(element)
    element.innerHTML="Teste"
});

console.log(objs1)
console.log(objs2)
//Quando tem um array pode aceitar outros tipos de elementos