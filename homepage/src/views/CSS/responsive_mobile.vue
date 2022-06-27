<template>
  <!--
  Parts of Style and body from:
  https://codepen.io/una/pen/mdVbdBy
  https://wiki.selfhtml.org/wiki/CSS/Tutorials/Einstieg/Media_Queries#Desktop_first
  -->

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
  </head>

  <body>
  <header>
    <h1>Header</h1>
  </header>
  <div class="left-sidebar">Left Sidebar</div>
  <main>Content</main>
  <div class="right-sidebar">Right Sidebar</div>
  <footer>Footer</footer>
  </body>
</template>

<script>
export default {
  name: "responsive_mobile"
}
</script>

<style scoped>
body {
  display: grid;
  height: 100vh;
  width: auto;
  grid-template-rows: auto 2fr 11fr 3fr 1fr;
}

header {
  background: red;
  padding: 2rem;
  grid-column: 1 / 4;
}

.left-sidebar {
  background: lightgreen;
  grid-column: 1 / 4;
}

main {
  background: blue;
  grid-column: 1 / 4;
}

.right-sidebar {
  background: pink;
  grid-column: 1 / 4;
}

footer {
  background: orange;
  padding: 2rem;
  grid-column: 1 / 4;
}

.left-sidebar,
.right-sidebar,
main,
header {
  padding: 1rem;
}

@media all and (min-width: 600px) {
  body {
    grid-template: auto 1fr auto / auto 1fr auto
  }
  header,
  footer,
  .right-sidebar {
    grid-column: 1 / 4;
  }
  .left-sidebar {
    grid-column: 1 / 2;
  }
  main {
    grid-column: 2 / 4;
  }
}

@media all and (min-width: 800px) {
  header {
    grid-column: 1 / 4;
  }
  .left-sidebar {
    grid-column: 1 / 2;
  }
  main {
    grid-column: 2 / 3;
  }
  .right-sidebar {
    grid-column: 3 / 4;
  }
  footer {
    grid-column: 1 / 4;
  }
}
</style>