<template>
  <div>
    <h1>Fachliche Argumentation über Erfolgsprinzipien des <b>WWW</b></h1>
  </div>
  <div id="card">
    <h3>Mit welchen fachlichen Argumenten wurde das <b>WWW-Proposal</b> von TBL abgelehnt ?</h3>
    <p>
      Die Vagheit im Konzept des WWW-Proposals wurde mit der Idee der <b>Evolvierbarkeit</b> verwechselt.
      Außerdem war man zu der Zeit der Ansicht, dass die Hypertext-Community diesbezüglich schon weiter fortgeschritten war
      bzw. mehr erreicht wurde und das Konzept von <b>TBL</b> ein Rückschritt gewesen wäre.
      Zudem waren <b>Broken Links</b> in TBL's Konzept möglich, die man hätte vermeiden können.
      Technisch wäre dies möglich gewesen, Stichwort <b>'Referentielle Integrität'</b>.
    </p>
  </div>
  <div id="card">
    <h3>Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde ?</h3>
    <p>
      Diesbezüglich gibt es verschiedene Sichtweisen und Gründe. Auf der einen Seite, <b>Offenheit</b>, <b>Dezentralität</b>
      und <b>Evolvierbarkeit</b> laut TBL und auf der anderen wissenschaftlichen Seite die <b>mathematische Rigorosität</b>, das Ziel,
      dass alles <b>integer</b> ist und das <b>referentielle Integrität</b> vorhanden ist.
    </p>
  </div>
  <div id="card">
    <h3>Was wäre der Preis für die garantierte Verhinderung von “broken links” ?</h3>
    <p>
      Der Preis für <b>referentielle Integrität</b>, um <b>Broken Links</b> zu verhindern,
      wäre ein hoher Ressourcenaufwand seitens der Rechner,
      auf Grund der einzelnen Prüfungen des Datenbankmanagementsystems, wodurch immense Kosten entstehen.
    </p>
  </div>
</template>

<script>
export default {
  name: "Erfolgsprinzipien"
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
