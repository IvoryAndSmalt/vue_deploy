<template>
  <div id="app">
    <!-- TOP NAV, SHOWING LOGO, LINK AND PAGE NAME -->
    <div id="topnav" class="fixed">
      <h1 class="flex-between">
        <router-link to="/">csstagram</router-link>
        <div>
          <img id="logo" class="abscenter" src="./assets/logo.png" alt="Logo" />
        </div>
        <div class="right">{{ $route.name }}</div>
      </h1>
    </div>
    <!-- ONLY DISPLAYED IF ON HOME PAGE -->
    <div v-if="$route.name === 'home'" id="floating" class="fixed">
      <router-link to="/newpost">
        <div id="plus">+</div>
        <img id="logo" src="./assets/logo.png" alt="Logo" />
      </router-link>
    </div>
    <!-- GENERAL NAV AT THE BOTTOM -->
    <div id="nav" class="fixed flex-between">
      <router-link to="/">Accueil</router-link>
      <router-link to="/newpost">Créer</router-link>
      <router-link to="/profile">Profil</router-link>
    </div>
    <!-- CONTENT OF THE PAGE -->
    <div id="content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/global.scss";

#app {
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  #topnav {
    top: 0;
    padding: 20px;
    * {
      font-size: 1.5rem;
    }
    h1 {
      margin-bottom: 0;
      color: $orange;
      a:first-child {
        background: linear-gradient(to right, $orange, $blue);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    #logo {
      width: 3rem;
      height: auto;
    }
  }

  #floating {
    left: calc(100% - 75px);
    top: calc(100% - 150px);
    background: transparent;
    box-shadow: none;
    #plus {
      box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.5);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      font-size: 2rem;
      font-weight: bold;
      color: $blue;
      background: white;
      border-radius: 5rem;
      position: absolute;
      height: 30px;
      width: 30px;
      top: -5px;
      left: -5px;
      line-height: 1.1;
      text-indent: 5px;
      &:active,
      &:focus,
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5),
          0 10px 10px rgba(0, 0, 0, 0.5);
      }
    }
    #logo {
      height: 65px;
      width: 65px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 6px rgba(0, 0, 0, 0.5);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      border-radius: 5rem;
      &:active,
      &:focus,
      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5),
          0 10px 10px rgba(0, 0, 0, 0.5);
      }
    }
  }

  #nav {
    box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.12), 0 -1px 2px rgba(0, 0, 0, 0.24) !important;
    bottom: 0;
    padding: 15px 20px;
    a {
      font-size: 1.2rem;
      color: rgb(80, 80, 255);
      &:active,
      &:hover,
      &:focus,
      &:visited {
        color: $blue;
        text-decoration: none;
      }
      &.router-link-exact-active {
        color: $orange;
      }
    }
  }
  #content {
    margin: 100px 0;
  }
}
</style>
