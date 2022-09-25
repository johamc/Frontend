<template>
 <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Menu</router-link> |
    <router-link to="/quienes">Quienes Somos</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e1b8f;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0e1b8f;
}

nav a.router-link-exact-active {
  color: #6572ee;
}
</style>
