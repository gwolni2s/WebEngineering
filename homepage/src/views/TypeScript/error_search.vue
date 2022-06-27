<template>
  <div>
    <h1>Fehlersuche in TypeScript</h1>
  </div>
  <div id="card">
    <h3>Gegeben sei folgendes fehlerbehaftete JavaScript-Programm.
      Ergänzen Sie dieses um möglichst viele Typisierungen und übersetzen Sie es in ein TypeScript-Programm.</h3>
    <p>
        <a>const add = (x,y) => x+y;</a>
        <a>const equals = (x,y) => x===y;</a>

        <a>console.log( add(1,2) );</a>
        <a>console.log( add(true, true ) );</a>
        <a>console.log( add(true, false ) );</a>
        <a>var x = y = 1;</a>
        <a>console.log( add(equals(x,y), equals(y,x)) );</a>
    </p>
  </div>
  <div id="card">
    <h3>Was ist der Fehler in dem gegebenen JavaScript-Code?</h3>
    <p>
      Die Variable y muss bevor sie einer anderen Variable zugewiesen wird bzw. deren Wert, deklariert werden.
    </p>
  </div>
  <div id="card">
    <h3>Geben Sie hier Ihren TypeScript-Code ein:</h3>
    <p>
      <a>const add = (x:number,y:number):number => x+y;</a>
      <a>const equals = (x:number,y:number):boolean => x===y;</a>

      <a>console.log( add(1,2) );</a>
      <a>console.log( add(true, true ) );</a>
      <a>console.log( add(true, false ) );</a>
      <a>var y: number;</a>
      <a>var x: number = y = 1;</a>
      <a>console.log( add(equals(x,y), equals(y,x)) );</a>
    </p>
  </div>
  <div id="card">
    <h3>Welche Fehler meldet TypeScript?</h3>
    <p>
      Das Argument true bzw false kann der Methode add nicht übergeben werden, da der type number erwartet wird.
    </p>
  </div>
  <div id="card">
    <h3>Geben Sie weitere Beispiele an, wie TypeScript bei der Fehlersuche helfen kann:</h3>
    <p>
      Das gezeigte Beispiel beschrieb die Fehlersuche bei der Übergabe von typisierten Parametern zu typisierten Funktionen.
      Die Fehlersuche kann auch bei der Zuweisung einer Variable aus dem Rückgabewert einer Funktion helfen,
      falls die Typen nicht übereinstimmen.<br>
      Beispiel: var name: String = add(x, y); //Type number als Rückgabewert kann name(String) nicht zugewiesen werden
    </p>
  </div>
</template>

<script>
export default {
  name: "error_search"
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
#card p a {
  display: flex;
  flex-direction: column;
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