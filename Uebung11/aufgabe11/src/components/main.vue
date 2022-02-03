<template>
  <main id="main" class="main">
    <h2 id="main-heading" class="main-heading">
      8.3. WWW-Navigator
    </h2>
    <br>
    <p id="main-paragraph" class="main-paragraph">
      Schreiben Sie einen Navigator für die Fachbegriffe des WWW zu den Oberthemen HTML, CSS und JavaScript. Im Hauptmenü sollen diese 3 Oberthemen zur Auswahl stehen. Im Untermenü soll eine zugehörige Liste von Fachbegriffen zum jeweiligen ausgewählten Oberthema stehen. In der Mitte soll eine Dokumentation zum ausgewählten Fachbegriff erscheinen.
      <br>
      <br>
      Schreiben Sie in HTML und CSS nur den responsiven Rahmen für einen solchen WWW-Navigator. Dabei können Sie auch ein schöneres Layout als das hier gezeigte erstellen. Die Inhalte sollen in einer JSON-Datei extern gelagert werden. Mit der fetch-API soll die JSON-Datei asynchron nicht-blockierend geladen werden, und zwar nur einmal, nicht mehrfach. (d.h. Sparen Sie Internet-Bandbreite.) Sobald die Inhalte angekommen sind, sollen sie im Browser auch sofort angezeigt werden.
      Fügen Sie selbst in die JSON-Datei zusätzliche Inhalte zu Themen der Vorlesung als Strings beispielhaft ein. Wenn Sie Inhalte aus fremden Quellen kopieren, so schreiben Sie bitte stets die Quelle als externe Ressource hinzu. Diese soll dann auf der rechten Seite im WWW-Navigator erscheinen.
      <br>
      <img id="image" class="image" src="C:\Users\wolni\Desktop\Projects\Workspace\IdeaProjects\WebEngineering\Uebung08\WWW-Navigator\www-navigator.png" alt="www-navigator.png">
    </p>
  </main>
</template>

<script>

</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.main {
  position: absolute;
  height: 92vh;
  top: 8vh;
  right: 20%;
  left: 10%;
  padding: 20px;
}
.main-heading {
  text-transform: uppercase;
  font-size: 32px;
}
.main-paragraph {
  font-size: 20px;
}
.image {
  height: 45vh;
  top:8vh;
  right: 25%;
  left: 15%;
  padding: 10px;
}
@media screen and (max-width: 1024px) {
  .main {
    left: 20%;
  }
}
@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .nav-links li {
    opacity: 0;
  }
  .main {
    left: 20%;
    right: 30%;
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