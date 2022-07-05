<template>
  <div>
    <h1>Operationen</h1>
  </div>
  <div id="card">
    Die Ergebnisse der Aufgaben sind in der Konsole in den Dev Tools zu sehen.
  </div>
</template>

<script>
export default {
  name: "operations",
  mounted() {
    const t0 = performance.now();
    const a = document.createElement("a");
    const t1 = performance.now();
    const diff1 = t1 - t0;
    console.log("Call to create element took " + diff1 + " milliseconds.");

    const t2 = performance.now();
    a.appendChild(document.createTextNode("text"));
    const t3 = performance.now();
    const diff2 = t3 - t2;
    console.log("Call to append a child took "+ diff2 + " milliseconds.");

    const t4 = performance.now();
    a.textContent = "text";
    const t5 = performance.now();
    const diff3 = t5 - t4;
    console.log("Call to create a text content took "  + diff3 + " milliseconds.");

    const t7 = performance.now();
    a.innerText = "text";
    const t8 = performance.now();
    const diff4 = t8 - t7;
    console.log("Call to create a inner Text took " + diff4 + " milliseconds.");

    const t9 = performance.now();
    a.innerHTML = "text";
    const t10 = performance.now();
    const diff5 = t10 - t9;
    console.log("Call to create a inner HTML took " + diff5 + " milliseconds.");

    const t11 = performance.now();
    a.nodeValue = "text";
    const t12 = performance.now();
    const diff6 = t12 - t11;
    console.log("Call to create a node value took " + diff6 +  " milliseconds.");
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