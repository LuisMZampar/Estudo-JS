

const numeros = [1,2,3,4,5,6,7,8,9,10];

const numerosPares = numeros.map( (numero) =>{
    if(numero % 2 == 0){
        return numero;
    }

}).filter((numero) => numero != undefined); 

console.log( numerosPares);     





//Criando a lista de tarefas array vazia...
let listaTarefasArray = [];

//Recuperando o botão do formulário que vai iniciar o processo de inserção da tarefa.
const botaoAddTarefa = document.querySelector("#btnAddTarefa");

//Adicionando um listener ao botão para esperar um clique que vai disparar a ação.
botaoAddTarefa.addEventListener("click", (evento)=>{
    evento.preventDefault();
    //Pegando os valores dos campos
    const inputTarefa = document.querySelector("#idTarefa");
    
    //Inserindo a nova tarefa no array com o método push();
    listaTarefasArray.push(inputTarefa.value);
    
    //Recuperando a lista UL através do id com querySelector();
    const listaTarefasUL = document.querySelector("#lista-tarefas");

    //Elemento li criado.
    let li = document.createElement("li");

    //Adiocionando texto dentro do elemento LI;
    li.textContent = inputTarefa.value;

    //Adicionando o elemento li a UL.
    listaTarefasUL.appendChild(li);

    //Criando o bot"ao de excluir tarefas.
    let botaoApagaTarefa = document.createElement("button");

    //Inserindo o nó de texto do botão
    botaoApagaTarefa.textContent = " x ";

    //Adicionando um botão para apagar a tarefa!
    li.appendChild(botaoApagaTarefa);

    botaoApagaTarefa.addEventListener("click",(e)=>{

        // listaTarefasArray.forEach(tarefa=>{
        //     if (tarefa ==  e.target.parentNode.textContent.split(" ")[0]){
        //         listaTarefasArray.splice(listaTarefasArray.indexOf(tarefa),1);
        //     }
        // });

       let conteudoTarefa = e.target.parentNode.textContent.split(" ")[0];

    //    let indiceTarefa = listaTarefasArray.indexOf(conteudoTarefa);
       
       //Removendo o elemento do array através do índice com o método splice() e map;
    //    listaTarefasArray.splice(indiceTarefa,1);
        
       listaTarefasArray.map( (tarefa,index) =>{

            if(tarefa == conteudoTarefa ){
                listaTarefasArray.splice(index,1);
            }   
       
        });

       //Removendo o elemento li do HTML;
       e.target.parentNode.remove();
       console.log(listaTarefasArray);
    });
    
    

    console.log(listaTarefasArray);
    inputTarefa.value = "";
});


// const filaBrinquedo = [
//     { name: 'Ana', age: 9 },
//     { name: 'Vinicius', age: 11 },
//     { name: 'Julia', age: 11 },
//     { name: 'Gabriel', age: 10 },
//     { name: 'Lucas', age: 11 }
// ]

// const resultado = filaBrinquedo.every( (pessoa) => pessoa.age <= 12);
// console.log(resultado == true ? 'Pode entrar' : 'Não pode entrar');

// const filaBrinquedo = [
//     { name: 'Ana', age: 9 },
//     { name: 'Vinicius', age: 14 },
//     { name: 'Julia', age: 13 },
//     { name: 'Gabriel', age: 15 },
//     { name: 'Lucas', age: 12 }
// ]

// const resultado = filaBrinquedo.some( (pessoa) => pessoa.age <= 12);
// console.log(resultado == true ? 'Pode entrar' : 'Não pode entrar');


// const filaBrinquedo = [
//     { name: 'Ana', age: 13 },
//     { name: 'Vinicius', age: 12 },
//     { name: 'Julia', age: 13 },
//     { name: 'Gabriel', age: 15 },
//     { name: 'Lucas', age: 12 }
// ]

// const resultado = filaBrinquedo.find( (pessoa) => pessoa.age <= 12);
// console.log(resultado);

// const convidados = [ 'prof João', 'Ana', 'Caio', 'prof Lara', 'Marjorie', 'prof Leo' ];

// const convidadosProf = convidados.filter( (convidado) => convidado.includes('ã'));

// console.log(convidadosProf);



// Exemplo de Reduce
// const nr = [4,5,8,6,7];

// const soma = nr.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual);


//Declarar um array de objeto de vendas
const vendas = [
    { produto: 'sapato', valor: 150 },
    { produto: 'tenis', valor: 50 },
    { produto: 'bermuda', valor: 70 },
    { produto: 'camiseta', valor: 30 }
];

//Realizar a soma dos valores de vendas com reduce utilizando uma function

// const soma = nr.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual);
function somaObj(Obj1, Obj2){
    return {valor: Obj1.valor + Obj2.valor};
}

const totalVendas = vendas.reduce(somaObj, {valor: 10});
console.log(totalVendas.valor);