<template>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu desplegable proyecto</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

</head>
  <div class="Inicio"></div>
  <main>

    <div class="menu__side" id="side_menu">

        <div class="name__page">
            <img src="../assets/logosmall.png">
        </div>

        <div class="options__menu">

            <a href="#" class="selected">
            </a>
            <a href="#">
                <div class="option">
                    <i class="fa-sharp fa-solid fa-bed-pulse" title="Pacientes"></i>
                    <h4>Pacientes</h4>
                </div>
            </a>
            <a href="#">
                <div class="option">
                    <i class="fa-solid fa-hospital-user" title="Médico"></i>
                    <h4>Médico</h4>
                </div>
            </a>
            <a href="#">
                <div class="option">
                    <i class="fa-solid fa-people-arrows" title="Familiar"></i>
                    <h4>Familiar Asignado</h4>
                </div>
            </a>
            <a href="#">
                <div class="option">
                    <i class="fa-solid fa-notes-medical" title="Notas"></i>
                    <h4>Notas Medicas</h4>
                </div>
            </a>

        </div>
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
    margin-left: 80px;
    transition: margin-left 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);

}

.icon_menu{
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(10px);
}

.icon_menu i{
    font-size: 20px;
    cursor: pointer;
    position: absolute;
}

.menu__side{
    width: 250px;
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

.menu__side::-webkit-scrollbar{
    display: none;
}

.menu__side{
    scrollbar-width: none;
}

.name__page img{
    margin-right: 0 px;
    background: #f5f5f5;
    height: 70px;
    width: 225px;
    margin-top: 10px;
}

.options__menu{
    padding: 20px 30px;
    position: absolute;
    top: 80px;
}

.options__menu a{
    color: #ffffffb2;
    display: block;
    position: relative;
    transition: all 300ms;
}

.options__menu a:hover{
    color: white;
}

.options__menu .option{
    padding: 30px 10px;
    display: flex;
    align-items: center;
    position: relative;
}

.options__menu .option i{
    width: 20px;
    margin-right: 25px;
    cursor: pointer;
}

.options__menu .option h4{
    font-weight: 300;
    cursor: pointer;
}

a.selected{
    color: white;
}

.selected:before{
    content: '';
    width: 3px;
    height: 80%;
    background: white;
    position: absolute;
    top: 10%;
    left: -30px;

}
/*clases para usar en js*/

.body_move{
    margin-left: 250px;
}

.menu__side_move{
    width: 250px;
}

@media screen and (max-width:760px) {
   .body_move{
    margin-left: 0px;
   } 
   .menu__side_move{
    width: 80px;
    left: -80px;
   }
}
</style>

