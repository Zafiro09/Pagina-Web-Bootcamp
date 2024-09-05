let inicio=document.getElementById("Login")
let close="Cerrar sesión"
inicio.addEventListener("click",() =>{
    inicio.innerText=close
})

let Agregar=document.getElementById("definición")
Agregar.addEventListener("click",()=>{
    Agregar.remove()
})

let botonsito=document.getElementById("botonsito")
let num=25
botonsito.addEventListener("click", ()=>{
    let conteo=document.getElementById("conteo")
    alert("Te gustó Gato Atigro")
    num++ 
    conteo.innerText=num
})

let botonsitodos=document.getElementById("botonsitodos")
let numero=45
botonsitodos.addEventListener("click", ()=>{
    let conteoo=document.getElementById("conteoo")
    alert("Te gustó Golden Retriever")
    numero++ 
    conteoo.innerText=numero
})