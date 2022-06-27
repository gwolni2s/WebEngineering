<template>
  <div>
    <h1>CSS</h1>
  </div>
  <div id="card">
    <h3>Selektoren und Farben</h3>
    <router-link to="/CSS/Task1"><button>Selektoren und Farben</button></router-link>
  </div>
  <div id="card">
    <h3>Positionierung 1</h3>
    <router-link to="/CSS/Task2"><button>Positionierung 1</button></router-link>
  </div>
  <div id="card">
    <h3>Positionierung 2</h3>
    <router-link to="/CSS/Task3"><button>Positionierung 2</button></router-link>
  </div>
  <div id="card">
    <h3>CSS Wireframe</h3>
    <router-link to="/CSS/Task4"><button>CSS Wireframe</button></router-link>
  </div>
  <div id="card">
    <h3>Responsive Flexbox Desktop</h3>
    <router-link to="/CSS/Task5"><button>Responsive Flexbox Desktop</button></router-link>
  </div>
  <div id="card">
    <h3>Resposive Flexbox Desktop</h3>
    <router-link to="/CSS/Task6"><button>Resposive Flexbox Desktop</button></router-link>
  </div>
  <div id="card">
    <h3>Responsive Grid</h3>
    <router-link to="/CSS/Task7"><button>Responsive Grid</button></router-link>
  </div>
</template>

<script>
export default {
  name: "CSS_category"
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