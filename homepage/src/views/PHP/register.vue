<template>
  <h1>Register</h1>
  <form id="register_form">
    <fieldset>
      <legend>Register a new account</legend>
      Account Name:<br>
      <input type="text" name="account">
      <br>
      Password:<br>
      <input type="password" name="password">
      <br><br>
      <div><button @click="send()">Submit</button></div>
    </fieldset>
  </form>

  <div id="card">
    <h3>Kommentar zu PHP und VUE</h3>
    <p>
      Es gab Schwierigkeiten PHP mit Vue zu verbinden. Deswegen funktioniert die Registrierung nicht korrekt.
      Um eine korrekte Lösung zu sehen, wird hiermit auf den Ordner Uebung12 im Web Engineering Ordner verwiesen.
    </p>
  </div>
</template>

<script>

export default {
  name: "register",
  methods: {
    // this does not work how it should
    async send(event) {
      event.preventDefault();
      const response = await ( await fetch(new Request ("register.php"), {
        method: 'post',
        body: new FormData(document.getElementById('register_form'))
      })).json();
      alert(JSON.stringify(response, null, 2));
    }
  }
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