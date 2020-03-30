<template>
    <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/projects/'), dark: settings.dark_mode}">
      <nav id="overlay" v-if="!isHidden">
          <ul>
          <li><g-link to="/">Accueil</g-link></li>
          <li><g-link to="/projets">Projets</g-link></li>
          <li><g-link to="/journal">Journal</g-link></li>
          <li><g-link to="/contact">Say Hi!</g-link></li>
          </ul>
      </nav> 
      <div id="flex-menu">
        <g-link :to="{ name: 'home' }" class="home-link">
            <img 
                src="../../static/logo.svg"
                :alt="settings.site_name" 
                class="logo"
            />
            <span v-html="settings.site_name" />
        </g-link>
        <input type="checkbox" id="overlay-input" />
        <label for="overlay-input" id="overlay-button" v-on:click="isHidden = !isHidden"><span></span></label>
      </div>
  


    </header>
</template>

<script>
export default {
  data() {
    return {
        logo: require("../../static/logo.svg"),
        settings: require("../../data/theme.json"),
        isHidden: true
    }
  }
}
</script>

<style scoped>
.header {
    position: relative;
    height: 6rem;
    z-index: 10;
}
.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header.sticky.dark {
  background-color: rgb(39, 39, 41);
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
#flex-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 20px;
}
.home-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}
.home-link span{
  margin-left: 15px;
  font-size: 2rem;
}
.logo {
    height: 4rem;
    fill: #ffffff;
}
.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
@keyframes bugfix {
  from {
    padding: 0;
  }
  to {
    padding: 0;
  }
}
@-webkit-keyframes bugfix {
  from {
    padding: 0;
  }
  to {
    padding: 0;
  }
}
#overlay-button {
  /* 
  position: absolute;
  right: 2em;
  top: 3em;
  */
  padding: 26px 11px;
  z-index: 5;
  cursor: pointer;
  user-select: none;
}
#overlay-button span {
  height: 4px;
  width: 35px;
  border-radius: 2px;
  background-color: #FFD681;
  position: relative;
  display: block;
  transition: all 0.2s ease-in-out;
}
#overlay-button span:before {
  top: -10px;
  visibility: visible;
}
#overlay-button span:after {
  top: 10px;
}
#overlay-button span:before, #overlay-button span:after {
  height: 4px;
  width: 35px;
  border-radius: 2px;
  background-color: #FFD681;
  position: absolute;
  content: "";
  transition: all 0.2s ease-in-out;
}
#overlay-button:hover span, #overlay-button:hover span:before, #overlay-button:hover span:after {
  background: #FF5A51;
}

input[type=checkbox] {
  display: none;
}

input[type=checkbox]:checked ~ #overlay {
  visibility: visible;
}

input[type=checkbox]:checked ~ #overlay-button:hover span, input[type=checkbox]:checked ~ #overlay-button span {
  background: transparent;
}
input[type=checkbox]:checked ~ #overlay-button span:before {
  transform: rotate(45deg) translate(7px, 7px);
  opacity: 1;
  background-color: #FF5A51;
}
input[type=checkbox]:checked ~ #overlay-button span:after {
  transform: rotate(-45deg) translate(7px, -7px);
  background-color: #FF5A51;
}

#overlay {
  height: 100vh;
  width: 100vw;
  background: #FFD681;
  z-index: 2;
  position: fixed;
}
#overlay.active {
  visibility: visible;
}
#overlay ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  padding-left: 0;
  list-style-type: none;
}
#overlay ul li {
  padding: 1em;
}
#overlay ul li a {
  color: #FF5A51;
  text-decoration: none;
  font-size: 2em;
}
#overlay ul li a:hover {
  color: #FF993B;
}
</style>
