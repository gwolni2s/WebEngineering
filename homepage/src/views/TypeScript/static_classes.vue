<template>
  <div>
    <h1>Statische Klassen in TypeScript</h1>
  </div>
  <div id="card">
    <h3>Gibt es in TypeScript statische Klassen?
      Erläutern Sie den Unterschied von TypeScript zu anderen objekt-orientierten,
      statisch typisierten Programmiersprachen wie Java und C#.</h3>
    <p>
      Typescript und JavaScript haben keine statischen Klassen,
      wie es bei Java und C# der Fall ist. Das ist bei Java und C# nur der Fall,
      weil alle Daten und Funktionen in der jeweiligen Klasse sein müssen. In TypeScript gibt es diese Bedingung nicht.
      Eine Klasse mit einer einzelnen Instanz wird gewöhnlich als Objekt angesehen.
      Die "statische Klasse" Schreibweise ist unnötig, da ein reguläres Objekt, die gleiche funktionalität bereitstellt.
    </p>
  </div>
</template>

<script>
export default {
  name: "static_classes"
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