<template>
  <nav>
    <div class="Inicio"></div>

    <div class="menu__side" id="side_menu">

      <div class="options__menu">

        <a class="selected">
        </a>
        <a>
          <div class="option">
            <font-awesome-icon icon="fas fa-bed-pulse"/>
            <router-link to="/pacientes">Pacientes</router-link>
          </div>
        </a>
        <a>
          <div class="option">
            <font-awesome-icon icon="fa-solid fa-hospital-user"/>
            <router-link to="/medico">Médico</router-link>
          </div>
        </a>
        <a>
          <div class="option">
            <font-awesome-icon icon="fa-solid fa-people-arrows"/>
            <router-link to="/familiar">Familiar Asignado</router-link>
          </div>
        </a>
        <a>
          <div class="option">
            <font-awesome-icon icon="fa-solid fa-notes-medical"/>
            <router-link to="/familiar">Notas Medicas</router-link>
          </div>
        </a>

      </div>
    </div>
    <div class="name__page">
      <img src="../assets/logosmall.png">
    </div>
  </nav>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}


.menu__side {
  width: 270px;
  height: 100%;
  background: rgb(4, 20, 92);
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  font-size: 18px;
  z-index: 300;
  overflow: hidden;
  overflow-y: scroll;
  border-right: rgb(4, 20, 92);
  transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.menu__side::-webkit-scrollbar {
  display: none;
}

.menu__side {
  scrollbar-width: none;
}

.name__page img {
  background-size: cover;
  background-repeat: no-repeat;
  position: center;
}

.options__menu {
  padding: 20px 30px;
  position: absolute;
  top: 80px;
}

.options__menu a {
  color: #ffffffb2;
  display: block;
  position: relative;
  transition: all 300ms;
  margin-left: 10px;
}

.options__menu a:hover {
  color: white;
}

.options__menu .option {
  cursor: pointer;
  padding: 30px 5px;
  display: flex;
  align-items: center;
}

a.selected {
  color: white;
}

.selected:before {
  content: '';
  width: 3px;
  height: 80%;
  background: white;
  position: absolute;
  top: 10%;
  left: -30px;

}

/*clases para usar en js*/

.body_move {
  margin-left: 250px;
}

.menu__side_move {
  width: 250px;
}

@media screen and (max-width: 760px) {
  .body_move {
    margin-left: 0px;
  }

  .menu__side_move {
    width: 80px;
    left: -80px;
  }
}
</style>

