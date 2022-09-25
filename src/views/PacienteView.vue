<template>
     <main>
            <h1>Registro del Paciente</h1>
            <div class="date">
                <input type="date">
            </div>
            <div class="Contenedor_Registro">
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-user-plus" />
                    <h4>Datos Personales</h4>
                </a>
                <form accion="#">
                    <div class="primer formulario">
                        <div class="datos personales">
                            <div class="fields">
                                <div class="input-field">
                                    <label>Id Paciente</label>
                                   <input type="text" placeholder="Ingrese Id " required> 
                                </div>

                                <div class="input-field">
                                    <label>Nombre del Paciente</label>
                                   <input type="text" placeholder="Ingrese Nombre" required> 
                                </div>

                                <div class="input-field">
                                    <label>Apellido del Paciente</label>
                                   <input type="text" placeholder="Ingrese Apellido" required> 
                                </div>

                                <div class="input-field">
                                    <label>Apellido del Paciente</label>
                                   <input type="text" placeholder="Ingrese Apellido" required> 
                                </div>

                                <div class="input-field">
                                    <label>Fecha de Nacimiento</label>
                                   <input type="date" placeholder="Ingrese fecha de Nacimiento" required> 
                                </div>

                                <div class="input-field">
                                    <label>Edad</label>
                                   <input type="number" placeholder="Ingrese la Edad" required> 
                                </div>

                                <div class="input-field">
                                    <label>Número de Celular</label>
                                   <input type="text" placeholder="Ingrese Número" required> 
                                </div>
                                
                                <div class="input-field">
                                    <label>Correo Electrónico</label>
                                   <input type="text" placeholder="Ingrese Correo" required> 
                                </div>

                                <div class="input-field">
                                    <label>Cuidad</label>
                                   <input type="text" placeholder="Ingrese Cuidad" required> 
                                </div>

                                <div class="input-field">
                                    <label>Tipo de Sangre</label>
                                   <input type="text" placeholder="Ingrese Tipo de Sangre" required> 
                                </div>

                                <div class="input-field">
                                    <label>Fecha de Hospitalización</label>
                                   <input type="date" placeholder="Ingrese fecha" required> 
                                </div>

                                <div class="input-field">
                                    <label>Género</label>
                                   <input type="text" placeholder="Ingrese Género" required> 
                                </div>
                                <div class="input-field">
                                    <label>Dirección</label>
                                   <input type="text" placeholder="Ingrese Dirección" required> 
                                </div>

                                <div class="input-field">
                                    <label>Latitud</label>
                                   <input type="text" placeholder="Ingrese Latitud" required> 
                                </div>

                                <div class="input-field">
                                    <label>Longitud</label>
                                   <input type="text" placeholder="Ingrese Longitud" required> 
                                </div>
                                <div class="input-field">
                                <label>Id Médico</label>
                               <input type="text" placeholder="Ingrese Id del medicos" required> 
                            </div>

                            <div class="input-field">
                                <label>Id Enfermero</label>
                               <input type="text" placeholder="Ingrese Id del Enfermero" required> 
                            </div>

                            <div class="input-field">
                                <label>Id Familiar Designado</label>
                               <input type="text" placeholder="Ingrese Id del Familiar Designado" required> 
                            </div>
                            </div>
                            <button class="nextBtn">
                                <span class="btnText">Siguiente</span>
                            </button>
                     </div>
                 </div>  
            </form>
        </div>
    </main>
</template>

<style>
    :root{
    --color-primario: rgba(20, 73, 126, 0.5);
    --color-secundario: rgba(18, 111, 204, 0.61);
    --color-background: rgb(243, 246, 253);
    --color-variante: rgb(4, 20, 92);
    --color-paleta: #f2f2f2;
    --color-letra-clara: #dce1eb;
    --color-click: #d2dbee;
    --color-dark: rgba(4, 14, 24, 0.5);

    --card-border-radius: 2rem;
    --border-radiud-1: 0.4rem;
    --border-radiud-2: 0.8rem;
    --border-radiud-3: 1.2rem;

    --car-padding: 1.8rem;
    --padding-1: 1.2rem;
    --box-shadow: 0 2rem 3rem var(--color-letra-clara);
    }
    
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        appearance: none;
        border: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    body{

        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        background: var(--color-background);
        user-select: none;
        overflow: hidden;
        color: var(--color-variante);
    }
/*---------------main-------------*/
main{
    margin-top: -30px;
    text-align: left;
}

main .date{
    display: inline-block;
    background: var(--color-click);
    border-radius: var(--border-radiud-1);
    margin-top: 0.5rem;
    padding: 0.5rem 1.4rem;
}

main .date input[type='date']{
background: transparent;
color: var(--color-dark);
}

.Contenedor_Registro{
    position: relative;
    min-width: 900px;
    width: 100%;
    padding: 30px;
    margin-top: 5px;
    background: white;
}

.Contenedor_Registro a{
    font-size: 20px;
    display: flex;
    color: var(--color-variante);
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 0.7rem;
    transition: all 300ms ease;

}

.Contenedor_Registro a::before{
    content: "";
    position: absolute;
    left: 0;
    bottom: -12px;
    height: 3px;
    width: 1270px;
    background-color: var(--color-secundario);
    border-radius: 8px;
}

.Contenedor_Registro a span {
    font-size: 10px;
    transition: all 300ms ease;
}

.Contenedor_Registro form{
    position: relative;
    margin-top: 16px;
    min-height: 400px;
    background-color: white;
    overflow: hidden;
}

.Contenedor_Registro form .formulario{
    position: absolute;
    background-color: white;
    transition: 0.3s ease;
}

form.secActive .formulario.primer{
    opacity: 0;
    pointer-events: none;
    transform: translate(-100%);
}

.Contenedor_Registro form .datos{
    margin-top: 7px;
}

.Contenedor_Registro .title{
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-variante);
    gap: 1rem;
    align-items: center;
}

.Contenedor_Registro .fields{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

}
form .fields .input-field{
    display: flex;
    width: calc(100% / 4 - 15px);
    flex-direction: column;
    margin: 3px 0;
}

.input-field label{
    font-size: 13px;
    font-weight: 500;
    color: var(--color-variante);
}

.input-field input{
    outline: none;
    font-size: 14px;
    font-weight: 400;
    color: black;
    border-radius: 5px;
    border: 1px solid #aaa;
    padding: 0 15px;
    height: 42px;
    margin: 6px 0;
}

.input-field input :is(:focus, :valid){
box-shadow: 0 3px 6px rgba(0,0,0,0.13);
}

.input-field input [type="date"]{
    color: #707070;
}

.input-field input [type="date"]:valid{
    color: black;
}

.Contenedor_Registro form button, .backBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    max-width: 200px;
    width: 100%;
    border: none;
    outline: none;
    color: white;
    border-radius: var(--border-radiud-2);
    margin: 25px 0;
    background-color: var(--color-variante);
    transition: all 0.3s linear;
    cursor: pointer;
}

.Contenedor_Registro form button,
.Contenedor_Registro form .backBtn{
    font-size: 14px;
    font-weight: 400;;
}

form button :hover{
    background-color: transparent;
}

form .buttons{
    display: flex;
    align-items: center;
}

form .buttons button, .backBtn{
    margin-right: 14px;
}
</style>
<script>

</script>