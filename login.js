let datosUsuario = localStorage.getItem("usuario");
let usuario = JSON.parse(localStorage.getItem("usuario"));


const acceder = document.getElementById("loginForm");
const pw = document.getElementById("loginPw");
const email = document.getElementById("email");


console.log(usuario);



acceder.addEventListener("submit",  inicio=>{
    inicio.preventDefault();

    if(email.value == usuario[1]){
        if (pw.value == usuario[2]) {
            window.location.href = "Inicio.html";
        }else{
            alert("contrasena equivocada intente de nuevo")
        }
    }else{
        alert("Correo Equivocado, Por favor intente de nuevo");
    }
}); 



