<template>
    <main class="medico">
      <h1>Registro del Médico</h1>
      
      <div class="Cont_Regist">
        <a href="#">
          <font-awesome-icon icon="fa-solid fa-user-plus"/>
          <h4>Datos Personales</h4>
        </a>
        <form accion="#">
          <div class="primer_formulario">
            <div class="datos ">
              <div class="field">
                <div class="input_fields">
                  <label>Id Médico</label>
                  <input type="text" placeholder="Ingrese Id " required>
                </div>
  
                <div class="input_fields">
                  <label>Primer Nombre</label>
                  <input type="text" placeholder="Ingrese Nombre" required>
                </div>
  
                <div class="input_fields">
                  <label>Segundo Nombre</label>
                  <input type="text" placeholder="Ingrese Nombre" required>
                </div>
  
                <div class="input_fields">
                  <label>Primer Apellido</label>
                  <input type="text" placeholder="Ingrese Apellido" required>
                </div>
  
                <div class="input_fields">
                  <label>Segundo Apellido</label>
                  <input type="text" placeholder="Ingrese Apellido" required>
                </div>
  
                <div class="input_fields">
                  <label>Especialización</label>
                  <input type="text" placeholder="Ingrese Especialización" required>
                </div>
  
                <div class="ultimaFila">
                </div>
              </div>
            </div>
          </div>
          <div class="buttonCont">
            <button class="saveBtn">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </main>
  </template>
  
  <style>
  
  :root {
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
  
  * {
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
  
  body {
  
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background: var(--color-background);
    user-select: none;
    overflow: hidden;
    color: var(--color-variante);
  }
  
  /*---------------main-------------*/
  .medico {
    margin-top: 0;
  }
  .ultimaFila {
    display: flex;
    flex-direction: row;
    width: 48.5%;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
  }
  .ultimaFila .input_fields{
    width: 47% !important;
  }
  
  .Cont_Regist {
    position: relative;
    min-width: 900px;
    width: 100%;
    padding: 30px;
    margin-top: 5px;
    background: white;
  }
  
  .Cont_Regist a {
    font-size: 20px;
    display: flex;
    color: var(--color-variante);
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 0.7rem;
    transition: all 300ms ease;
  
  }

  .Cont_Regist a::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -12px;
  height: 3px;
  width: 100%;
  background-color: var(--color-secundario);
  border-radius: 8px;
}

.Cont_Regist a span {
  font-size: 10px;
  transition: all 300ms ease;
}
  
  .Cont_Regist form {
    margin-top: 16px;
  }
  
  .Cont_Regist form .formulario {
    background-color: white;
    transition: 0.3s ease;
  }
  
  form.secActive .formulario.primer {
    opacity: 0;
    pointer-events: none;
    transform: translate(-100%);
  }
  
  .Cont_Regist form .datos {
    margin-top: 7px;
  }
  
  .Cont_Regist .title {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 500;
    color: var(--color-variante);
    gap: 1rem;
    align-items: center;
  }
  
  .Cont_Regist .field {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  
  }
  
  form .field .input_fields {
    display: flex;
    width: 23%;
    flex-direction: column;
    margin: 3px 0;
  }
  
  .input_fields label {
    font-size: 13px;
    font-weight: 500;
    color: var(--color-variante);
  }
  
  .input_fields input {
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
  
  .input_fields input :is(:focus, :valid) {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.13);
  }
  
  .input_fields input [type="date"] {
    color: #707070;
  }
  
  .input_fields input [type="date"]:valid {
    color: black;
  }
  .buttonCont {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-content: flex-end;
    justify-content: flex-end;
    justify-items: flex-start;
  }
  
  .saveBtn {
    background-color: var(--color-variante);
    padding: 10px 15px;
    color: white;
    border-radius: 6px;
    cursor: pointer;
  }
  .saveBtn:hover {
    opacity: 0.9;
  }
  </style>