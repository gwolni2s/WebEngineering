<template>
    <div id="navbar_desktop">
        <nav>
          <div>
            <h2>Solution Navigator</h2>
          </div>
          <router-link to="/">Home</router-link>
          <div class="dropdown">
            <router-link to="/HTTP_HTML">HTML</router-link>
            <div id="dropdown_list">
              <router-link to="/HTTP_HTML/Task1">Erfolgsprinzipien</router-link>
              <router-link to="/HTTP_HTML/Task2">HTTP</router-link>
              <router-link to="/HTTP_HTML/Task3">HTML Literatur</router-link>
              <router-link to="/HTTP_HTML/Task4">HTML Wireframe</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/CSS">CSS</router-link>
            <div id="dropdown_list">
              <router-link to="/CSS/Task1">Selectors and Colors</router-link>
              <router-link to="/CSS/Task2">Positioning</router-link>
              <router-link to="/CSS/Task3">CSS Wireframe</router-link>
              <router-link to="/CSS/Task4">Responsive Flexbox Desktop</router-link>
              <router-link to="/CSS/Task5">Responsive Flexbox Mobile</router-link>
              <router-link to="/CSS/Task6">Responsive Grid</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/JavaScript">JavaScript</router-link>
            <div id="dropdown_list_js">
              <div>
                <router-link to="/JavaScript/General">Allgemein</router-link>
                <router-link to="/JavaScript/General/Task1">Funktionen</router-link>
                <router-link to="/JavaScript/General/Task2">Objekte</router-link>
                <router-link to="/JavaScript/General/Task3">Fibonacci</router-link>
                <router-link to="/JavaScript/General/Task4">Top Sort</router-link>
              </div>
              <div>
                <router-link to="/JavaScript/DOM">DOM</router-link>
                <router-link to="/JavaScript/DOM/Task1">Operationen</router-link>
                <router-link to="/JavaScript/DOM/Task2">Rednerliste</router-link>
                <router-link to="/JavaScript/DOM/Task3">Topsort</router-link>
              </div>
              <div>
                <router-link to="/JavaScript/ECMAScript">ECAMScript</router-link>
                <router-link to="/JavaScript/ECMAScript/Task1">Klammerpaare</router-link>
                <router-link to="/JavaScript/ECMAScript/Task2">Iterierbarkeit</router-link>
                <router-link to="/JavaScript/ECMAScript/Task3">Generator</router-link>
                <router-link to="/JavaScript/ECMAScript/Task4">Proxy</router-link>
                <router-link to="/JavaScript/ECMAScript/Task5">Deep Copy</router-link>
              </div>
              <div>
                <router-link to="/JavaScript/Functional">Funktional</router-link>
                <router-link to="/JavaScript/Functional/Task1">Funktional</router-link>
                <router-link to="/JavaScript/Functional/Task2">Analyse</router-link>
              </div>
              <div>
                <router-link to="/JavaScript/Async_Await">Async und Await</router-link>
                <router-link to="/JavaScript/Async_Await/Task1">Promises</router-link>
                <router-link to="/JavaScript/Async_Await/Task2">Async / Await</router-link>
                <router-link to="/JavaScript/Async_Await/Task3">WWW Navigator</router-link>
              </div>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/SVG">SVG</router-link>
            <div id="dropdown_list">
              <router-link to="/SVG/Task1">Grafik</router-link>
              <router-link to="/SVG/Task2">Diagramm</router-link>
              <router-link to="/SVG/Task3">Interaktiv</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/TypeScript">TypeScript</router-link>
            <div id="dropdown_list">
              <router-link to="/TypeScript/Task1">Statische Klassen</router-link>
              <router-link to="/TypeScript/Task2">Fehlersuche</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/Vue">Vue</router-link>
            <div id="dropdown_list">
              <router-link to="/Vue/Task1">Komponenten</router-link>
              <router-link to="/Vue/Task2">Menu</router-link>
              <router-link to="/Vue/Task3">Navigator</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/PHP">PHP</router-link>
            <div id="dropdown_list">
              <router-link to="/PHP/Task1">Login</router-link>
              <router-link to="/PHP/Task2">Register</router-link>
            </div>
          </div>
          <div class="dropdown">
            <router-link to="/WebSecurity">Web Security</router-link>
            <div id="dropdown_list">
              <router-link to="/security/Task1">CRSF</router-link>
              <router-link to="/security/Task2">XSS</router-link>
              <router-link to="/security/Task3">Injection</router-link>
            </div>
          </div>
          <router-link to="/profile">Profile</router-link>
        </nav>
      <!-- ToDo: develop navbar for mobile view -->
    </div>
    <div id="navbar_mobile">
      <nav>
        <div>
          <h2>Solution Navigator</h2>
        </div>
        <div @click="toggleBurger()" id="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <side-nav id="sidenav">
        <div class="mobile_sidenav" @click="toggleBurger()">
          <router-link to="/">Home</router-link>
          <router-link to="/HTTP_HTML">HTML</router-link>
          <router-link to="/CSS">CSS</router-link>
          <router-link to="/JavaScript">JavaScript</router-link>
          <router-link to="/SVG">SVG</router-link>
          <router-link to="/TypeScript">TypeScript</router-link>
          <router-link to="/Vue">Vue</router-link>
          <router-link to="/PHP">PHP</router-link>
          <router-link to="/WebSecurity">Web Security</router-link>
          <router-link to="/profile">Profile</router-link>
        </div>
      </side-nav>
    </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    toggleBurger() {
      const burger = document.querySelector("#burger");
      burger.classList.toggle("active");
      const sidenav = document.getElementById('sidenav');
      sidenav.classList.toggle("active");
    }
  }
}
</script>

<style scoped>

#navbar_mobile {
  display: none;
}
#navbar_desktop, #navbar_mobile {
  width: 100%;
  background-color: black;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

#dropdown_list_js div {
  display: flex;
  flex-direction: row;
}
#dropdown_list, #dropdown_list_js {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
#dropdown_list a, #dropdown_list_js a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
#dropdown_list a:hover, #dropdown_list_js a:hover {
  background-color: #aadcef;
}
.dropdown:hover #dropdown_list, .dropdown:hover #dropdown_list_js {
  display: block;
}
nav div h2 {
  color: white;
}
nav a {
  text-decoration: none;
  color: white;
}
nav a:hover {
  color: #00afea;
  border-color: #00afea;
}
#burger span {
  display: block;
  width: 28px;
  height: 2px;
  border-radius: 9999px;
  background-color: white;
}
#burger span:not(:last-child) {
  margin-bottom: 7px;
}
#burger, #burger span {
  transition: all .4s ease-in-out;
}
#burger.active {
  transition-delay: 1ms;
  transform: rotate(45deg);
}

#burger.active span:nth-child(2) {
  width: 0;
}
#burger.active span:nth-child(1),
#burger.active span:nth-child(3) {
  transition-delay: .5ms;
}
#burger.active span:nth-child(1) {
  transform: translateY(9px);
}
#burger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(90deg);
}
#sidenav {
  display: none;
}
#sidenav.active {
  display: block;
  transition-delay: 1s;
}
#sidenav {
  overflow: hidden;
  background-color: #333;
  position: relative;
}
#sidenav .mobile_sidenav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
  text-align: center;
}
/* Medium devices (landscape tablets, 768px and down) */
@media only screen and (max-width: 833px) {
  #navbar_desktop {
    display: none;
  }
  #navbar_mobile {
    display: flex;
    flex-direction: column;
  }
}
</style>