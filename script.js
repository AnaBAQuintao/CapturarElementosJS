console.log("Deu certo")

const formularioId = document.getElementById("formulario");
console.log(formularioId)
 
const dataClass = document.getElementsByClassName("post-data");
console.log(dataClass)
 
const textClass = document.getElementsByClassName("post-texto");
console.log(textClass)
 
const listaClass = document.getElementsByClassName("lista_redes");
console.log(listaClass)

const elementoPorQuery = document.querySelector("#post01 .post-texto a");
console.log(elementoPorQuery)
 
const elementoPorQueryAll = document.querySelector("#post02 .post-texto strong");
console.log(elementoPorQueryAll)

const elementoPorQueryAll2 = document.querySelectorAll("footer .lista_redes a");
console.log(elementoPorQueryAll2)

const redes = document.querySelectorAll("footer .lista_redes a")
 
function imprimirRedes(lista) {
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i].innerText)
    }
}
 
imprimirRedes(redes)
 
const btn = document.querySelector("button")
console.log(btn)
 
const post = document.getElementById("posts");
console.log(post)
 
let postsVisiveis = true
 
function sumir(){
    postsVisiveis = !postsVisiveis
    const novoTexto = postsVisiveis ? "Esconder posts" : "Mostrar Posts"
    btn.innerText = novoTexto
    post.style.display = postsVisiveis ? "block" : "none"
}