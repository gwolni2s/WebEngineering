<template>
  <body>
  <nav>
    <div class="logo">
      <h1>
        WWW-Navigator
      </h1>
    </div>
    <ul class="nav-links">
      <li>
        <a id="HTML-Btn" href="#">HTML</a>
      </li>
      <li>
        <a id="CSS-Btn" href="#">CSS</a>
      </li>
      <li>
        <a id="JS-Btn" href="#">JavaScript</a>
      </li>
    </ul>
    <div class="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
  </body>
</template>

<script>
export default {
  name: 'navbar',

  methods: {
    navSlide: () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');
      const sidebar = document.getElementById("side-bar");

      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
          if(link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
        });

        burger.classList.toggle('toggle');
        sidebar.classList.toggle("sidebar-active");
      });
    },

    navClicks: () => {
      const htmlButton = document.getElementById("HTML-Btn");
      const cssButton = document.getElementById("CSS-Btn");
      const jsButton = document.getElementById("JS-Btn");
      const sideLinkButtons = [];
      sideLinkButtons[0] = document.getElementById("side-link1");
      sideLinkButtons[1] = document.getElementById("side-link2");
      sideLinkButtons[2] = document.getElementById("side-link3");
      sideLinkButtons[3] = document.getElementById("side-link4");

      const htmlButtons = ["Headings", "Paragraph", "Unordered List", "Button"];
      const cssButtons = ["Selectors", "Colors", "Flexbox", "Res. Design"];
      const jsButtons = ["Function", "Object", "Hyperlinks", "Structure"];

      const data = fetch("data.json")
          .then(response => response.json());

      htmlButton.addEventListener("click", () => {
        sideLinkButtons.forEach((link, index) => {
          link.innerHTML = htmlButtons[index];
        });
        data.then(data => {
          document.getElementById("main-heading").innerHTML = data["html"]["headings"]["heading"];
          document.getElementById("main-paragraph").innerHTML =
              data["html"]["headings"]["content"];
          document.getElementById("reference").innerHTML =
              data["html"]["headings"]["references"];
        });
      });

      cssButton.addEventListener("click", () => {
        sideLinkButtons.forEach((link, index) => {
          link.innerHTML = cssButtons[index];
        });
        data.then(data => {
          document.getElementById("main-heading").innerHTML = data["css"]["selectors"]["heading"];
          document.getElementById("main-paragraph").innerHTML =
              data["css"]["selectors"]["content"];
          document.getElementById("reference").innerHTML =
              data["css"]["selectors"]["references"];
        });
      });

      jsButton.addEventListener("click", () => {
        sideLinkButtons.forEach((link, index) => {
          link.innerHTML = jsButtons[index];
        });
        data.then(data => {
          document.getElementById("main-heading").innerHTML = data["javascript"]["function"]["heading"];
          document.getElementById("main-paragraph").innerHTML =
              data["javascript"]["function"]["content"];
          document.getElementById("reference").innerHTML =
              data["javascript"]["function"]["references"];
        });
      });

      sideLinkButtons[0].addEventListener("click", () => {
        if(document.getElementById("side-link1").innerHTML === "Headings") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["html"]["headings"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["html"]["headings"]["content"];
            document.getElementById("reference").innerHTML =
                data["html"]["headings"]["references"];
          });
        } else if (document.getElementById("side-link1").innerHTML === "Selectors") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["css"]["selectors"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["css"]["selectors"]["content"];
            document.getElementById("reference").innerHTML =
                data["css"]["selectors"]["references"];
          });
        } else if(document.getElementById("side-link1").innerHTML === "Function") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["javascript"]["function"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["javascript"]["function"]["content"];
            document.getElementById("reference").innerHTML =
                data["javascript"]["function"]["references"];
          });
        }
      });

      sideLinkButtons[1].addEventListener("click", () => {
        if(document.getElementById("side-link2").innerHTML === "Paragraph") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["html"]["paragraph"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["html"]["paragraph"]["content"];
            document.getElementById("reference").innerHTML =
                data["html"]["paragraph"]["references"];
          });
        } else if (document.getElementById("side-link2").innerHTML === "Colors") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["css"]["colors"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["css"]["colors"]["content"];
            document.getElementById("reference").innerHTML =
                data["css"]["colors"]["references"];
          });
        } else if(document.getElementById("side-link2").innerHTML === "Object") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["javascript"]["object"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["javascript"]["object"]["content"];
            document.getElementById("reference").innerHTML =
                data["javascript"]["object"]["references"];
          });
        }
      });
      sideLinkButtons[2].addEventListener("click", () => {
        if(document.getElementById("side-link3").innerHTML === "Unordered List") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["html"]["unordered list"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["html"]["unordered list"]["content"];
            document.getElementById("reference").innerHTML =
                data["html"]["unordered list"]["references"];
          });
        } else if (document.getElementById("side-link3").innerHTML === "Flexbox") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["css"]["flexbox"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["css"]["flexbox"]["content"];
            document.getElementById("reference").innerHTML =
                data["css"]["flexbox"]["references"];
          });
        } else if(document.getElementById("side-link3").innerHTML === "Hyperlinks") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["javascript"]["hyperlinks"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["javascript"]["hyperlinks"]["content"];
            document.getElementById("reference").innerHTML =
                data["javascript"]["hyperlinks"]["references"];
          });
        }
      });
      sideLinkButtons[3].addEventListener("click", () => {
        if(document.getElementById("side-link4").innerHTML === "Button") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["html"]["button"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["html"]["button"]["content"];
            document.getElementById("reference").innerHTML =
                data["html"]["button"]["references"];
          });
        } else if (document.getElementById("side-link4").innerHTML === "Res. Design") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["css"]["responsive design"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["css"]["responsive design"]["content"];
            document.getElementById("reference").innerHTML =
                data["css"]["responsive design"]["references"];
          });
        } else if(document.getElementById("side-link4").innerHTML === "Structure") {
          data.then(data => {
            document.getElementById("main-heading").innerHTML = data["javascript"]["Struktur einer Website"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["javascript"]["Struktur einer Website"]["content"];
            document.getElementById("reference").innerHTML =
                data["javascript"]["Struktur einer Website"]["references"];
          });
        }
      });
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: 'Poppins', sans-serif;
  background-color: #9C5E5E;
}

.logo {
  color: #d4d3d3;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 20px;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 35%;
}
.nav-links li {
  list-style: none;
}
.nav-links a {
  color: #d4d3d3;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
}
.burger {
  display: none;
  cursor: pointer;
}
.burger div{
  width: 25px;
  height: 2px;
  background-color: #d4d3d3;
  margin: 5px;
  transition: all 0.3s ease;
}
side-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: 'Poppins', sans-serif;
}
.side-nav-links {
  display: flex;
  justify-content: space-around;
}
.side-nav-links {
  position: absolute;
  left: 0px;
  height: 92vh;
  top: 8vh;
  background-color: #9C5E5E;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
}
.side-nav-links li {
  list-style: none;
}
.side-nav-links a {
  color: #d4d3d3;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
}
.side-bar {
  position: absolute;
  right: 0px;
  height: 92vh;
  top: 8vh;
  background-color: #9C5E5E;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}
.side-bar a {
  color: #d4d3d3;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
}
.main {
  position: absolute;
  height: 92vh;
  top: 8vh;
  right: 20%;
  left: 10%;
  padding: 20px;
}
.main-heading {
  text-transform: uppercase;
  font-size: 32px;
}
.main-paragraph {
  font-size: 20px;
}
.image {
  height: 45vh;
  top:8vh;
  right: 25%;
  left: 15%;
  padding: 10px;
}
@media screen and (max-width: 1024px) {
  .nav-links {
    width: 45%;
  }
  .side-nav-links {
    width: 20%;
  }
  .main {
    left: 20%;
  }
}
@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .nav-links {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: #9C5E5E;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .side-bar {
    width: 30%;
  }
  .nav-links li {
    opacity: 0;
  }
  .burger {
    display: block;
  }
  .side-nav-links {
    width: 20%;
  }
  .sidebar-active {
    opacity: 0;
  }
  .main {
    left: 20%;
    right: 30%;
  }
}
.nav-active {
  transform: translateX(0%);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 5px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -5px);
}
</style>