<template>
  <div>
    <h1>Solution Navigator</h1>
  </div>
  <div id="card">
    <h3>HTML und HTTP</h3>
    <router-link to="/HTTP_HTML"><button>HTML und HTTP</button></router-link>
  </div>
  <div id="card">
    <h3>CSS</h3>
    <router-link to="/CSS"><button>CSS</button></router-link>
  </div>
  <div id="card">
    <h3>JavaScript</h3>
    <router-link to="/JavaScript"><button>JavaScript</button></router-link>
  </div>
  <div id="card">
    <h3>SVG</h3>
    <router-link to="/SVG"><button>SVG</button></router-link>
  </div>
  <div id="card">
    <h3>TypeScript</h3>
    <router-link to="/TypeScript"><button>TypeScript</button></router-link>
  </div>
  <div id="card">
    <h3>Vue</h3>
    <router-link to="/Vue"><button>Vue</button></router-link>
  </div>
  <div id="card">
    <h3>PHP</h3>
    <router-link to="/PHP"><button>PHP</button></router-link>
  </div>
  <div id="card">
    <h3>Web Security</h3>
    <router-link to="/WebSecurity"><button>Web Security</button></router-link>
  </div>
</template>

<script>

export default {
  name: "HomeView"
}
</script>

<style scoped>
* {
  justify-items: center;
}
h1 {
  text-align: center;
  font-size: 38px;
}
div {
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: justify;
  width: 70%;
  margin: 2em auto;
}
#card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px; /* 5px rounded corners */
}
#card h3, #card a {
  text-align: center;
  justify-items: center;
}
/*Style from w3schools*/
#card a button {
  background-color: #00afea;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #00afea;
  width: 60%;
  border-radius: 10px;
}
#card a button:hover {
  background-color: #00afea;
  color: white;
}
#card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
/* Medium devices (landscape tablets, 768px and down) */
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 24px;
  }
  div {
    padding: 15px;
    width: 80%;
  }
}
</style>