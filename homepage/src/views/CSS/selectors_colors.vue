<template>
  <div>
    <h1>CSS Selektoren und CSS Farben</h1>
  </div>
  <div id="card">
    <h3>Berechnen Sie die Spezifität folgender CSS-Selektoren:</h3>
    <h4>
      <a>div div div:focus  .inner</a>
      <a>h1 + div.main</a>
      <a>div a:link[href*='h-brs']</a>
      <a>nav > a:hover::before</a>
      <a>ul#primary-nav  li.active</a>
    </h4>
    <p>
      <a>1: 23</a>
      <a>2: 12</a>
      <a>3: 22</a>
      <a>4: 13</a>
      <a>5: 112</a>
    </p>
  </div>
  <div id="card">
    <h3>Rechnen Sie folgende RGB-Werte in HSL-Werte um:</h3>
    <h4>
      <a>#ffffff</a>
      <a>#000</a>
      <a>#ab0978</a>
      <a>rgb(127,255,33)</a>
      <a>rgba(255,127,33,0.8)</a>
    </h4>
    <p>
      <a>1. (0°,0%,100%)</a>
      <a>2. (0,0,0)</a>
      <a>3. (0.89,0.9,0.35)</a>
      <a>4. (95°,100.0%,56.5%)</a>
      <a>5. (0.07,1.00,0.56)</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "selectors_colors"
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
#card h4 a,
#card p a{
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