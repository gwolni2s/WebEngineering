<template>
  <div>
    <h1>Fibonacci</h1>
  </div>
  <div id="card">
    Um die Fibonacci Reihe zu sehen, schauen Sie in den Developer Tools in der Konsole nach.
    <div id="fibonacci">

    </div>
  </div>
</template>

<script>
export default {
  name: "Fibonacci",
  mounted() {
      //Fibonacci from w3schools and stack overflow
      const fib = [];
      fib[0] = BigInt(0);
      fib[1] = BigInt(1);
      for(let i = 2; i <= 2000; i++) {
      fib[i] = BigInt(fib[i - 2]) + BigInt(fib[i - 1]);
    }
      console.log("The Finonacci series: ");
      for(let i = 0; i <= 100; i++) {
      console.log(fib[i]);
      const element = document.getElementById('fibonacci');
      const elem = document.createElement('a');
      elem.innerHTML = fib[i];
    }

      /**
      * Max Safe Integer: 927372692193079200000
      * Max Value: 1.3069892237633987e+308
      */


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
