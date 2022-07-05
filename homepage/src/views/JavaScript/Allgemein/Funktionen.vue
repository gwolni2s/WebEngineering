<template>
  <div>
    <h1>Funktionen</h1>
  </div>
  <div id="card">
    <p id="id1">
      id1
    </p>
    <p id="id2">
      id2
    </p>
    <p id="id3">
      id3
    </p>
    <p id="id4">
      id4
    </p>
    <p id="id5">
      id5
    </p>
    <p id="id6">
      id6
    </p>
  </div>
</template>

<script>


export default {
  name: 'Funktionen',
  mounted() {
    this.control();
  },
  methods: {
    identity(arg) {
      return arg;
    },
    identity_function(arg) {
      return this.identity(arg);
    },
    add(arg1, arg2) {
      return arg1 + arg2;
    },
    mul(arg1, arg2) {
      return arg1 * arg2;
    },
    min(arg1, arg2) {
      return arg1 - arg2;
    },
    div(arg1, arg2) {
      return arg1 / arg2;
    },
    addf(y) {
      return (x) => {
        return y + x;
      }
    },
    applyf(f) {
      return (x) => {
        return (y) => {
          return f(x, y);
        }
      }
    },
    control() {
      document.getElementById('id1').innerHTML = this.identity('Hello World');
      document.getElementById('id2').innerHTML = this.identity_function('Hallo Welt');
      document.getElementById("id3").innerHTML = this.add(2, 3);
      document.getElementById("id4").innerHTML = this.mul(4, 5);
      const number1 = this.addf(6);
      document.getElementById("id5").innerHTML = number1(9);
      const number2 = this.applyf(this.min);
      const number3 = number2(13);
      document.getElementById("id6").innerHTML = number3(5);
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