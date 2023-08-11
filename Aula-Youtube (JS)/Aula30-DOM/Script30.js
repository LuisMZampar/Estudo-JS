//Manipulando elemento (Método getElementById)

/*
const DivC1 = document.getElementById("c1") 
const DivC2 = document.getElementById("c2")

console.log(DivC1)
console.log(DivC1.id)
console.log(DivC1.innerHTML)

//Altera o valor, antes o c1 era "HTML" agora é "Exemplo Teste"
DivC1.innerHTML= "Exemplo Teste"

*/

const DivC1 = document.getElementById("c1") 
const DivC2 = document.getElementById("c2")
const DivC3 = document.getElementById("c3")
const DivC4 = document.getElementById("c4")
const DivC5 = document.getElementById("c5")
const DivC6 = document.getElementById("c6")

const arrayElement=[DivC1, DivC2, DivC3, DivC4, DivC5, DivC6]

//Agora eu quero mudar o Inner Html de todos

/*
for(d of arrayElement)
    d.innerHTML("Teste Alterando")
*/

//Usando o .map tabém conseguimops alterar todos os elementos do nosso array
arrayElement.map((e)=>{
    console.log(e)
})
