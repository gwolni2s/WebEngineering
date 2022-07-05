<template>
  <div id="card">
    <h1>Vue</h1>
    <h3>Kommentar zum Vue Kapitel</h3>
    <p>
      Die Homepage wurde mit dem Framework Vue js proramiiert. Deswegen sind Komponenten, wie beispielsweise ein Menu
      oder eine Navigation bereits in der Homepage erhalten.
      <br>
      Ein Beispiel für eine Menu Komponente ist ein Link, wie HTML in der Navigationsleiste mit den Unterthemen als
      Unterpunkte eines Dropdown Menus.
      <br><br>
      Ein Beispiel für eine Komponente ist die Home View Seite der Homepage, die die Kategerien der Themen,
      wie HTML oder CSS zeigt.
      <br><br>
      Die Navigationsleiste ist das Beispiel für den WWW-Solution Navigator.
    </p>

  </div>
</template>

<script>
export default {
  name: "vue_category"
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