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
