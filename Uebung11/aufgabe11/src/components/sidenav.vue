<template>
  <side-nav>
    <ul id="side-nav-links" class="side-nav-links">
      <li>
        <a id="side-link1" href="#"></a>
      </li>
      <li>
        <a id="side-link2" href="#"></a>
      </li>
      <li>
        <a id="side-link3" href="#"></a>
      </li>
      <li>
        <a id="side-link4" href="#"></a>
      </li>
    </ul>
  </side-nav>
</template>

<script>

</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

side-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  font-family: 'Poppins', sans-serif;
}
.side-nav-links {
  display: flex;
  justify-content: space-around;
}
.side-nav-links {
  position: absolute;
  left: 0px;
  height: 92vh;
  top: 8vh;
  background-color: #9C5E5E;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
}
.side-nav-links li {
  list-style: none;
}
.side-nav-links a {
  color: #d4d3d3;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 14px;
}

@media screen and (max-width: 1024px) {

  .side-nav-links {
    width: 20%;
  }

}
@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }

  .side-nav-links {
    width: 20%;
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