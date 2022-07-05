<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Textanalyse</title>
    <a>Code aus Lösung für Aufgabe 7.2 in der WE App</a>
  </head>
  <body>
  <h1>Textanalyse</h1>
  <p>Die drei häufigste Wörter sind:</p>
  <ul id="container"></ul>
  </body>
</template>

<script>
export default {
  name: "analyze",
  mounted() {
    const container = document.getElementById('container');
    (async _=>{ // async IIFE
      const stoppWordList = ['','und','der','die','das','den','in','zum','usw'];
      const response = await fetch( new Request( 'https://kaul.inf.h-brs.de/we/assets/html/plagiatsresolution.html' ) );
      const text = await response.text();
      const result = top3( sortValues( countWords( filter( words( text ) ) ) ) );
      console.log( result );
      result.forEach( word => {
        const item = document.createElement('li');
        item.textContent = word;
        container.appendChild( item );
      });

      function top3( entries ){
        return entries.slice(0,3).map( entry => entry[ 0 ] );
      }

      function sortValues( count ){
        return Object.entries( count ).sort( ([k1,v1], [k2,v2]) => v2-v1 );
      }

      function countWords( wordList ){
        return wordList.reduce((count,word)=>{
          if ( ! count[ word ] ) count[ word ] = 0;
          count[ word ] += 1;
          return count;
        },{});
      }

      function filter( wordList ){
        return wordList.filter( word => isValidWord( word ) );
      }

      function isValidWord( word ){
        if ( stoppWordList.includes( word ) ) return false;
        if ( word.includes('<') || word.includes('>') ) return false;
        return true;
      }

      function wordsUsed( text ){
        return unique( words( text ));
      }

      function words( text ){
        return text.split(/\s/);
      }

      function unique( anyArray ){
        return new Set( anyArray );
      }
    })();
  }
}
</script>

<style scoped>

</style>