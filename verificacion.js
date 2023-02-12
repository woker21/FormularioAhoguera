/* validacion */


const formulario = document.getElementById("registroForm");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correoElectronico");
const password = document.getElementById("contrasena");
const fecha = document.getElementById("fechaNacimiento");
const genero = document.getElementById("genero");
const login = document.getElementById("iniciar");
const loginBox = document.querySelector(".login-box");



window.addEventListener("load", function(){

setTimeout(function(){
    loginBox.style.opacity = 1;
}, 1000);
});



let usuario = [];


formulario.addEventListener("submit", verificar=>{
    verificar.preventDefault();
    let verificacion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(nombre.value.length >= 5){
        usuario.push(nombre.value);
    }

    if(verificacion.test(correo.value)){
        usuario.push(correo.value);
    }

    if(password.value.length >= 8){
        usuario.push(password.value);
    }

    if(fecha.value !== ""){
        usuario.push(fecha.value);
    }

    if(genero.value !== ""){
        usuario.push(genero.value);
    }

    if (!formulario.checkValidity()) {
        verificar.preventDefault();
    } else {
        document.getElementById("mensaje-enviado").style.display = "flex";
    }

    formulario.reset();

    if (!formulario.checkValidity()) {
        verificar.preventDefault();
    } else {
        document.getElementById("mensaje-enviado").style.display = "flex";
        setTimeout(function() {
        }, 500);
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));
});


login.addEventListener("click", iniciar => document.getElementById("mensaje-enviado").style.display = "none");
