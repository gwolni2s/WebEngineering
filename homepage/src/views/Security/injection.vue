<template>
  <div>
    <h1>WebGoat Injection</h1>
  </div>
  <div id="card">
    <h3>Geben Sie hier Ihre Lösungen zu (A1) Injection, SQL Injection (Intro) ein.</h3>
    <img src="@/assets/images/Injection.png" alt="Injection">
  </div>
</template>

<script>
export default {
  name: "injection"
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