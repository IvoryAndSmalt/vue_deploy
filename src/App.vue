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
    <div v-if="$route.name === 'accueil'" id="floating" class="fixed">
      <router-link to="/newpost">
        <div id="plus">
          <div id="feather"></div>
        </div>
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

<script>
export default {
  data: function() {
    return {};
  },
  mounted() {
    const self = this;
    self.banThisShadow();
    self.banThisBottomShadow();
    document.addEventListener("scroll", function() {
      self.banThisShadow();
      self.banThisBottomShadow();
    });
  },
  methods: {
    banThisShadow: function() {
      const topnav = document.querySelector("#topnav");
      if (scrollY <= 25) {
        topnav.classList.remove("btm-shadow");
      } else {
        topnav.classList.add("btm-shadow");
      }
    },
    banThisBottomShadow: function() {
      const bottomnav = document.querySelector("#nav");
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight+80) {
        // you're at the bottom of the page
        bottomnav.classList.remove("top-shadow");
      }
      else{
        bottomnav.classList.add("top-shadow");
      }
    }
  }
};

</script>

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
    box-shadow: none;
    transition: all 0.25s ease-in-out;
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
      position: absolute;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.12), 0 8px 15px rgba(0, 0, 0, 0.24) !important;
      left: 0;
      top: 0;
      width: 65px;
      height: 65px;
      background: rgb(255, 255, 255);
      border-radius: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      #feather {
        height: 85%;
        width: 85%;
        background: url("/img/icons/feather-pen.png") center center no-repeat;
        background-size: 80% 80%;
      }
    }
  }

  #nav {
    box-shadow: none;
    bottom: 0;
    padding: 15px 20px;
    transition: all 0.25s ease-in-out;
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
