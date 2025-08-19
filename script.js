let inputTarefa = document.querySelector(".tarefa input")
let buttonAdd = document.querySelector(".tarefa button")
let listaTarefas = document.querySelector(".container ul")

let tarefas =  JSON.parse(localStorage.getItem("@listaDeTarefas")) || []



function addTarefa(){
    if(inputTarefa.value === ''){
        alert("Digite uma tarefa!")
        return false
    } else {
        let novaTarefa = inputTarefa.value
        tarefas.push(novaTarefa)
        mostrarTarefa()    
    }
}

buttonAdd.setAttribute("onclick", "addTarefa()")


function mostrarTarefa(){
    inputTarefa.value = ' '
    listaTarefas.innerHTML = ""
    tarefas.map((novaTarefa) => {
        let liElement = document.createElement("li")
        let liText = document.createTextNode(novaTarefa)
        liElement.appendChild(liText)

        let posicao = tarefas.indexOf(novaTarefa)

        let ancora = document.createElement("a")
        let iAncora = document.createElement("i")
        iAncora.classList.add("fa-solid", "fa-trash")
        ancora.appendChild(iAncora)
        liElement.appendChild(ancora)

        ancora.setAttribute("onclick", `deletarTarefa(${posicao})`)

        listaTarefas.appendChild(liElement)

    })
}

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1)
    console.log("Apagou" + posicao)
    mostrarTarefa()
}

function salvarDados(){
    localStorage.setItem("@listaDeTarefas", JSON.stringify(tarefas))
}









































// let inputTarefa = document.querySelector(".tarefa input");
// let addTarefa = document.querySelector(".tarefa button");
// let listaTarefas = document.querySelector(".container ul");

// let tarefas = JSON.parse(localStorage.getItem("@tarefasLista")) || []

// function adicionarTarefa() {
//     if(inputTarefa.value === ""){
//         alert("Digite alguma tarefa!")
//         return false;
//     } else {
//         let novaTarefa = inputTarefa.value 
//         tarefas.push(novaTarefa);
//         console.log(`Tarefa :${novaTarefa}`)
//         mostrarTarefas()
//     }
// }

// addTarefa.setAttribute("onclick", "adicionarTarefa()")
// mostrarTarefas()

// function mostrarTarefas(){
//     listaTarefas.innerHTML = " "
//     tarefas.map((novaTarefa) => {
//         let liElement = document.createElement("li");
//         let liText = document.createTextNode(novaTarefa)

//         liElement.appendChild(liText);
        
//         let posicao = tarefas.indexOf(novaTarefa)

//         let AncoraElement = document.createElement("a")
//         let iElement = document.createElement("i")
//         iElement.classList.add("fa-solid", "fa-trash")
//         AncoraElement.appendChild(iElement)
//         AncoraElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

//         liElement.appendChild(AncoraElement)

//         listaTarefas.appendChild(liElement)
        
//     })
// }

// function deletarTarefa(posicao){
//     tarefas.splice(posicao, 1)
//     console.log("tarefa deletada:" + posicao)
//     salvarDados()
//     mostrarTarefas()
// }

// function salvarDados(){
//     localStorage.setItem("@tarefasLista", JSON.stringify(tarefas))
// }


















































// // let inputValue = document.querySelector(".container input");
// // let buttonAdd = document.querySelector(".container button")
// // let listaTarefa = document.querySelector(".container ul")

// // let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []

// // buttonAdd.setAttribute("onclick", "addTarefa()" )

// // mostrarTarefa()

// // function addTarefa(){
// //     if(inputValue.value === ""){
// //         alert("Digite uma tarefa!")
// //         return false
// //     } else {
// //         let novaTarefa = inputValue.value
// //         tarefas.push(novaTarefa)
// //         console.log(tarefas)

// //         mostrarTarefa()
// //     }
// // }

// // function mostrarTarefa(){
// //     listaTarefa.innerHTML = ""
// //     tarefas.map((novaTarefa) => {
// //         console.log("Tarefa" + novaTarefa);
// //         let liElement = document.createElement('li');
// //         let liText = document.createTextNode(novaTarefa);
        
// //         let posicao = tarefas.indexOf(novaTarefa)
// //         let liAncora = document.createElement('a');
// //         liAncora.setAttribute("href", "#");
// //         liAncora.setAttribute("onclick", `deletarTarefa(${posicao})` )
        
// //         let AncoraIcon = document.createElement('i')
// //         AncoraIcon.classList.add("fa-solid", "fa-trash")
        
// //         liAncora.appendChild(AncoraIcon)
        
// //         liElement.appendChild(liText);
// //         liElement.appendChild(liAncora);

// //         listaTarefa.appendChild(liElement);
        
// //     })
// // }

// // function deletarTarefa(posicao){
// //     // alert("Apagar"+ posicao)
// //     tarefas.splice(posicao, 1);
// //     mostrarTarefa();
// //     salvarDados();
// // }

// // function salvarDados(){
// //     localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))
// // }