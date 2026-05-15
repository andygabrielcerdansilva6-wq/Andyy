/* =========================================================
   1. EL GUARDIÁN DEL TIEMPO (Revisa la inactividad)
   ========================================================= */
const tiempoGuardado = localStorage.getItem("nexUltimaVez");

if (tiempoGuardado !== null) {
    const tiempoActual = Date.now();
    const tiempoPasado = tiempoActual - parseInt(tiempoGuardado);
    
    // ⏱️ TRUCO PRO: Puesto en 10 segundos para probar (10 * 1000).
    const limiteInactividad = 10 * 1000; 

    // Si pasaron más de 10 segundos, borra la cuenta
    if (tiempoPasado > limiteInactividad) {
        localStorage.removeItem("nexUsuario");
        localStorage.removeItem("nexContrasena");
        localStorage.removeItem("nexUltimaVez");
        alert("💀 Tu cuenta de NEX CORE ha sido eliminada por inactividad.");
    }
}

/* =========================================================
   2. ATRAPANDO LOS ELEMENTOS Y CAMBIO DE PANTALLAS
   ========================================================= */
const cajaRegistro = document.getElementById("register-box");
const cajaLogin = document.getElementById("login-box");
const btnIrLogin = document.getElementById("go-to-login");
const btnIrRegistro = document.getElementById("go-to-register");

btnIrLogin.addEventListener("click", (e) => {
    e.preventDefault();
    cajaRegistro.style.display = "none";
    cajaLogin.style.display = "block";
});

btnIrRegistro.addEventListener("click", (e) => {
    e.preventDefault();
    cajaLogin.style.display = "none";
    cajaRegistro.style.display = "block";
});

/* =========================================================
   3. SISTEMA DE REGISTRO
   ========================================================= */
const formRegistro = document.getElementById("register-form");
const inputRegUsuario = document.getElementById("reg-username");
const inputRegPassword = document.getElementById("reg-password");

formRegistro.addEventListener("submit", (e) => {
    e.preventDefault(); 
    
    const usuarioElegido = inputRegUsuario.value;
    const contrasenaElegida = inputRegPassword.value;

    // Guardamos usuario, contraseña y la HORA EXACTA
    localStorage.setItem("nexUsuario", usuarioElegido);
    localStorage.setItem("nexContrasena", contrasenaElegida);
    localStorage.setItem("nexUltimaVez", Date.now()); 

    alert("¡Cuenta creada con éxito!\n\n⚠️ AVISO IMPORTANTE: La inactividad hará que tu cuenta se elimine.\n\nAhora por favor inicia sesión.");

    inputRegUsuario.value = "";
    inputRegPassword.value = "";
    cajaRegistro.style.display = "none";
    cajaLogin.style.display = "block";
});

/* =========================================================
   4. SISTEMA DE INICIO DE SESIÓN (LOGIN)
   ========================================================= */
const formLogin = document.getElementById("login-form");
const inputLoginUsuario = document.getElementById("login-username");
const inputLoginPassword = document.getElementById("login-password");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault(); 
    
    const usuarioIngresado = inputLoginUsuario.value;
    const contrasenaIngresada = inputLoginPassword.value;

    const usuarioGuardado = localStorage.getItem("nexUsuario");
    const contrasenaGuardada = localStorage.getItem("nexContrasena");

    // Revisamos si la contraseña es correcta
    if (usuarioIngresado === usuarioGuardado && contrasenaIngresada === contrasenaGuardada) {
        
        // ¡Reiniciamos el tiempo para que no lo borre!
        localStorage.setItem("nexUltimaVez", Date.now()); 

        alert("¡Acceso concedido! Bienvenido a NEX CORE 😎");
        window.location.href = "index.html"; 
    } else {
        alert("❌ Error: Usuario o contraseña incorrectos.");
    }
});
