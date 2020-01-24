<template>
  <div id="app">
    <div id="topnav" class="fixed">
      <h1 class="flex-between">
        <router-link to="/">csstagram</router-link>
        <div>
          <img id="logo" class="abscenter" src="./assets/logo.png" alt="Logo" />
        </div>
        <div class="right">{{ $route.name }}</div>
      </h1>
    </div>
    <div id="nav" class="fixed flex-between">
      <router-link to="/">Accueil</router-link>
      <router-link to="/newpost">Créer</router-link>
      <router-link to="/profile">Profil</router-link>
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/global.scss";

#app {
  #topnav {
    top: 0;
    padding: 20px;
    * {
      font-size: 1.5rem;
    }
    h1 {
      margin-bottom: 0;
      color: orange;
      a:first-child {
        background: linear-gradient(to right, orange, rgb(80, 80, 255));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    #logo {
      width: 3rem;
      height: auto;
    }
  }

  #nav {
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.24) !important;
    bottom: 0;
    padding: 15px 20px;
    a {
      font-size: 1.2rem;
      color: rgb(80, 80, 255);

      &.router-link-exact-active {
        color: orange;
      }
    }
  }
  #content {
    margin: 100px 0;
  }
}
</style>
