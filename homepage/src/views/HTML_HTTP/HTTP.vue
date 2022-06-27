<template>
  <div>
    <h1>HTTP</h1>
  </div>
  <div id="card">
    <h3>Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?</h3>
    <p>
      Die 2xx HTTP Status Codes bedeuten, dass der Status <b>Erfolgreich</b> ist. Der Status Code 200, dass alles ok ist.
    </p>
  </div>
  <div id="card">
    <h3>Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?</h3>
    <p>
      Der HTTP Status Code 301 bedeutet, dass eine URL dauerhaft ausgetauscht wurde
      und durch eine neue URL ersetzt wurde. Das bedeutet letztendlich,
      dass man zur dann aktuell korrekten URL automatisch weitergeleitet wird.
    </p>
  </div>
  <div id="card">
    <h3>Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was können Sie dagegen tun?</h3>
    <p>
      Der HTTP Status Code 400 repräsentiert eine <b>fehlerhafte Anfrage</b>,
      die 4xx Status Code's stehen für Client Error. Bedeutet,
      der Server konnte eine fehlerhafte Anfrage des Client nicht verarbeiten. Eine Lösungsmöglichkeit wäre,
      die Anfrage auf Syntax Fehler hin zu überprüfen und schließlich zu korrigieren.
    </p>
  </div>
  <div id="card">
    <h3>Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was können Sie dagegen tun?</h3>
    <p>
      Der HTTP Status Code 403, bedeutet,
      dass man als Client eine <b>fehlende Zugriffsberechtigung</b> hat.
      Um sich eine Zugriffsberechtigung zu holen, müsste man den Admin der WWW-Seite um eine Berechtigung bitten.
    </p>
  </div>
  <div id="card">
    <h3>In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage,
      die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll.
      Aus Performanzgründen soll die Abfrage jedoch cacheable sein. Wie könnten Sie dafür eine Lösung angehen?</h3>
    <p>
      Man könnte die Server-Optionen beim ersten Abfragen temporär speichern.
      Möchte man nun die Server-Optionen Performanz bedingt nicht per Options anfragen,
      kann man mithilfe einer Get Anfrage die temporär gespeicherten Server-Optionen anfragen.
      Die Options-Methode müsste man dann nur einmal verwenden, außer wenn sich die Server-Optionen ändern sollten.
    </p>
  </div>
</template>

<script>
export default {
  name: "HTTP"
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