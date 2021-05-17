<template>
  <div id="nav">
      <router-link to="/museum"><i class="fas fa-globe-americas d-flex"> Natural History Museum</i></router-link> 
      <router-link to="/space"><i class="fas fa-space-shuttle d-flex"></i></router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background-color: #e0e0e0;
}
.grid{
  display: grid;
}
#nav a,i{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 1.5em;
}
#nav a.router-link-exact-active {
  color: blue;
}
</style>
