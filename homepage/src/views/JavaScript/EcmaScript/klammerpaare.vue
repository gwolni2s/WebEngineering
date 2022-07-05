<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport">
    <title>Klammerpaare</title>
  </head>
  <body>
  <h1>Klammerpaare</h1>
  <label>Please enter your phrase to check on right amount of brackets</label><br>
  <input id="input" class="correct">
  </body>
</template>

<script>
export default {
  name: "klammerpaare",
  mounted() {
      // Source: Solutions from WE App
      const input = document.getElementById('input');
      input.addEventListener('input', () => {
      const value = input.value;
      if (parse( value )){
      input.classList.remove( 'error' );
    } else {
      input.classList.add( 'error' );
    }
    });
      console.assert( parse('()') );
      console.assert( ! parse('({)}') );
      function parse( value ){
      const stack = [];
      for ( const ch of value.split('') ){
      switch ( ch ){
      case '[': case '(': case '{':
      stack.push( ch );
      break;
      case ']':
      if ( stack.pop() !== '[' ) return false;
      break;
      case ')':
      if ( stack.pop() !== '(' ) return false;
      break;
      case '}':
      if ( stack.pop() !== '{' ) return false;
      break;
      default:
      // do nothing
    }
    }
      return stack.length === 0;
    }
  }
}
</script>

<style scoped>
input {
  background-color: #c8ffc8;
}
.error {
  background-color: lightcoral;
}
</style>