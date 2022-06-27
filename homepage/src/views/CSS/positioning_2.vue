<template>
  <h1>Uebung 2.2</h1>
  <input type="checkbox" id="confirm" name="confirm">
  <label for="confirm">hide and show via checkbox</label>
  <img for="confirm" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Hochschule_Bonn-Rhein-Sieg_Wolfgang_G%C3%B6ddertz_Induktion.jpg"
       alt="Campus Sankt Augustin">
</template>

<script>
export default {
  name: "positioning_2"
}
</script>

<style scoped>
img {
  border: 2px solid;
  padding: 4px;
  color: grey;
  max-width: 98%;
  max-height: 98%;
  margin: 0;
}
input[type=checkbox] ~ img {
  visibility: hidden;
}
input[type=checkbox]:checked ~ img {
  visibility: visible;
}
</style>