<template>
  <div>
  <h3>
    Please enter your text into the following input field
  </h3>
  <input @keydown="analyse" type="text" id="input" name="input">
  <br><br>
  <a id="letters-count">
    Your given text has {{ letters }} Letters
  </a>
  <br><br>
  <a id="spaces-count">
    Your given text has {{ spacess }} Spaces
  </a>
  <br><br>
  <a id="words-count">
    Your given text has {{ words }} Words
  </a>
  </div>
</template>

<script>
export default {
  name: 'AnalyseInput',
  data: function() {
    return {
      letters: 0,
      spacess: 0,
      words: 0
    }
  },

  methods: {
      countLetters() {
        this.letters = document.getElementById('input').value.length + 1;
      },

      countSpaces() {
        this.spacess = document.getElementById('input').value.split(' ').length - 1;
      },

      countWords() {
        this.words = document.getElementById('input').value.split(' ').length;
      },

      analyse() {
        this.countLetters();
        this.countWords();
        this.countSpaces();
      }
  }
}

</script>

