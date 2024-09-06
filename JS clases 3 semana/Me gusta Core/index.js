let megusta=document.querySelectorAll(".boton");
let gustarme=document.querySelectorAll(".like");
console.log(megusta);
for (let i = 0; i < megusta.length; i++) {
    megusta[i].addEventListener("click", function (){
        gustarme[i].innerText=Number(gustarme[i].innerText)+1;
    });

    
}