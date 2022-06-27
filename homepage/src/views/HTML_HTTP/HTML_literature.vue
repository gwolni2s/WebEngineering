<template>
  <div>
    <h1>HTML Literatur</h1>
  </div>
  <div id="card">
    <h3>Was ist HTML?</h3>
    <p>
      HTML steht für <b>Hyper Text Markup Language</b>.
      HTML ist der Standard für die Erstellung von Webseiten.
      Es enthält mehrere verschiedene Elemente, um die Struktur der Webseite zu beschreiben.
      Außerdem beschreibt HTML, wie die Elemente im Browser dargestellt werden sollen.
    </p>
  </div>
  <div id="card">
    <h3>Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen?</h3>
    <p>
      Man erstellt eine geordnete Liste in einer geordneten Liste wiederum in einer geordneten Liste.
    </p>
  </div>
  <div id="card">
    <h3>Wie ist eine HTML-Tabelle aufgebaut?</h3>
    <p>
      Im Start tab lässt sich die Größe der Tabelle definieren.
      Dann erstellt man einen <b>header</b> table mit den Überschriften der Spalten,
      die in <b>table header</b> definiert werden. Anschließend werden beliebig viele tables erstellt,
      in denen dann der Inhalt, auch table data festegelegt wird.
    </p>
  </div>
  <div id="card">
    <h3>Welche Konventionen sollte man bei Pfaden und Dateinamen beachten?</h3>
    <p>
      <b>href</b> definiert einen Hyperlink, dem man dann den Link als Wert übergibt. Wichtig ist,
      diesen in Anführungsstrichen zu setzen. Weiter gefolgt von Text und dem end Tab.
      Man sollte die komplette URL und eine alternative Beschreibung angeben, falls der Link nicht geladen werden kann.
    </p>
  </div>
  <div id="card">
    <h3>Wie baut man in HTML ein Menü?</h3>
    <p>
      Man erstellt mehrere geschachtelte Listen, die <b>'responsive'</b> sind. Für die Punkte,
      die im Menü festgehalten werden, hinterlegt man jeweils einen Link, den man durch einen Text umbenennt.
      Klickt man auf Diesen, wird man auf die zugehörige Seite weitergeleitet.
    </p>
  </div>
  <div id="card">
    <h3>Welche Attribute sollte man bei Bildern wie verwenden?</h3>
    <p>
      Neben dem Source Link und der alternativen Textbeschreibung, werden im Attribut style Position,
      Breite und Höhe angegeben.
    </p>
  </div>
</template>

<script>
export default {
  name: "HTML_literature"
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