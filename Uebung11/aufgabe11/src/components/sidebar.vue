<template>
  <side-bar id="side-bar" class="side-bar">
    <a>References</a>
    <br>
    <a id="reference">
      https://kaul.inf.h-brs.de/we/?#app-9-3
      <br>
      <br>
      References used for solving the task:
      <br>
      <br>
      https://www.w3schools.com/default.asp
      <br>
      <br>
      https://www.youtube.com/watch?v=gXkqy0b4M5g&ab_channel=DevEd
      <br>
      <br>
      https://developer.mozilla.org/de/
    </a>
  </side-bar>
</template>

<script>

</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.side-bar {
  position: absolute;
  right: 0px;
  height: 92vh;
  top: 8vh;
  background-color: #9C5E5E;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}
.side-bar a {
  color: #d4d3d3;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
}


@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .side-bar {
    width: 30%;
  }
  .nav-links li {
    opacity: 0;
  }

}
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>