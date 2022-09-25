<template>
  <div class="home">
  </div>
  <main>
        <div class="contenedor__todo">
            <div class="caja__trasera">
                <div class="caja__trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para entrar en la página</p>
                    <button id="btn__iniciar-sesion">Iniciar Sesión</button>
                </div>
                <div class="caja__trasera-solicitud">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Solicita tu cuenta</p>
                    <button id="btn__solicitud">Registarse</button>
                </div>
            </div>
            <!--formularios de login y solucitid de usuario-->
            <div class="contenedor__login-solicitud">

                <form action="" class="formulario__login">

                    <h2>Iniciar Sesión</h2>
                    <input type="text" placeholder="Documento de Identidad">
                    <input type="password" placeholder="Contraseña">
                    <button>Entrar</button>
                </form>
                <form action="" class="formulario__solicitud">

                    <h2>Registro</h2>
                    <input type="text" placeholder="Nombre Completo">
                    <input type="text" placeholder="Documento de Identidad">
                    <input type="text" placeholder="Correo Electrónico">
                    <input type="password" placeholder="Contraseña">
                    <button>Enviar</button>
                </form>
            </div>
            <div class="photo"></div>
        </div>
    </main>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
}

body{
    background-image: url(../assets/17973908.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
}

.photo{
    background-image: url(../assets/logo.png);
    width: 253px;
    height: 70px;
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 100px;
    right: 515px;
}

main{
    padding: 20px;
    margin: auto;
    margin-top: 150px;
}

.contenedor__todo{
    max-width: 800px; /*caja trasera medida*/
    margin-left: 400px;
    position:relative;
}

.caja__trasera{
    padding: 20px 40px;
    display: flex;
    justify-content: right;
    backdrop-filter: blur(10px);
    background-color: rgba(24, 98, 173, 0.5);
}

.caja__trasera div{
    margin: 70px 20px;
    color: white;
    transition: all 500ms;
}

.caja__trasera div p,
.caja__trasera div button{
    margin-top: 20px;
}

.caja__trasera div h3{
    font-weight: 200;
    font-size: 28px;
}

.caja__trasera button{
    padding: 10px 40px;
    border: 3px solid white;
    background: transparent;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: white;
    outline: none;
    transition: all 300ms;
}

.caja__trasera button:hover{
    background: white;
    color: rgba(18, 111, 204, 0.61);
}

/*formularios*/
.contenedor__login-solicitud{
    display: flex;
    align-items: center;
    max-width: 100px; /*tamaño formulario*/
    position: relative;
    top: -165px;
    left: 10px;
}

.contenedor__login-solicitud form{
    padding: 80px 70px;
    background: rgb(248, 251, 253);
    position: absolute;
    border-radius: 20px;
}

.contenedor__login-solicitud form h2{
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    color: rgba(18, 111, 204, 0.61);
}

.contenedor__login-solicitud form input{
    margin-top: 20px;
    padding: 10px;
    border: none;
    background: #f2f2f2;
    font-size: 18px;
    outline: none;
}

.contenedor__login-solicitud form button{
    padding: 10px 40px;
    margin-top: 40px;
    border: none;
    font-size: 16px;
    background: rgba(18, 111, 204, 0.61);
    color: white;
    cursor: pointer;
    outline: none;
}

.formulario__login{
    opacity: 1;
    display: block;
}

.formulario__solicitud{
    display: none;
}
</style>

<script>
    

</script>
