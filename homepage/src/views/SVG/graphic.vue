<template>
  <h4>
    <b>SVG Use The Platform</b>
  </h4>

  <svg id="svg-obj"
       width="300"
       height="300"
       onmouseout="this.setAttribute('width', 300);
                 this.setAttribute('height', 300);
                 rect.setAttribute('width', 300);
                 rect.setAttribute('height', 300);
                 document.getElementById('line1').setAttribute('x1', '50');
                 document.getElementById('line2').setAttribute('x1', '50');
                 document.getElementById('line3').setAttribute('x1', '50');

                 document.getElementById('line1').setAttribute('x2', '270');
                 document.getElementById('line2').setAttribute('x2', '270');
                 document.getElementById('line3').setAttribute('x2', '270');

                 document.getElementById('line1').setAttribute('y1', '90');
                 document.getElementById('line2').setAttribute('y1', '190');
                 document.getElementById('line3').setAttribute('y1', '290');

                 document.getElementById('line1').setAttribute('y2', '90');
                 document.getElementById('line2').setAttribute('y2', '190');
                 document.getElementById('line3').setAttribute('y2', '290');

                 document.getElementById('text1').setAttribute('x', '50');
                 document.getElementById('text1').setAttribute('y', '80');

                 document.getElementById('text2').setAttribute('x', '50');
                 document.getElementById('text2').setAttribute('y', '180');

                 document.getElementById('text3').setAttribute('x', '50');
                 document.getElementById('text3').setAttribute('y', '280');

                 document.getElementById('text1').setAttribute('font-size', '60');
                 document.getElementById('text2').setAttribute('font-size', '60');
                 document.getElementById('text3').setAttribute('font-size', '60')"
       onmouseover="this.setAttribute('width', 600);
                 this.setAttribute('height', 600);
                 rect.setAttribute('width', 600);
                 rect.setAttribute('height', 600);
                 document.getElementById('line1').setAttribute('x1', '100');
                 document.getElementById('line2').setAttribute('x1', '100');
                 document.getElementById('line3').setAttribute('x1', '100');

                 document.getElementById('line1').setAttribute('x2', '550');
                 document.getElementById('line2').setAttribute('x2', '550');
                 document.getElementById('line3').setAttribute('x2', '550');

                 document.getElementById('line1').setAttribute('y1', '180');
                 document.getElementById('line2').setAttribute('y1', '380');
                 document.getElementById('line3').setAttribute('y1', '580');

                 document.getElementById('line1').setAttribute('y2', '180');
                 document.getElementById('line2').setAttribute('y2', '380');
                 document.getElementById('line3').setAttribute('y2', '580');

                 document.getElementById('text1').setAttribute('x', '100');
                 document.getElementById('text1').setAttribute('y', '160');

                 document.getElementById('text2').setAttribute('x', '100');
                 document.getElementById('text2').setAttribute('y', '360');

                 document.getElementById('text3').setAttribute('x', '100');
                 document.getElementById('text3').setAttribute('y', '560');

                 document.getElementById('text1').setAttribute('font-size', '120');
                 document.getElementById('text2').setAttribute('font-size', '120');
                 document.getElementById('text3').setAttribute('font-size', '120')">
    <rect id="rect"
          x="25"
          y="10"
          width="300"
          height="300"
          style="fill:#a64f7a">
    </rect>
    <text id="text1"
          x="50"
          y="80"
          fill="#faf9f9"
          font-size="60">Use</text>
    <line id="line1"
          x1="50"
          y1="90"
          x2="270"
          y2="90"
          style="stroke:#faf9f9;stroke-width:4px"
    ></line>
    <text id="text2"
          x="50"
          y="180"
          fill="#faf9f9"
          font-size="60">The</text>
    <line id="line2"
          x1="50"
          y1="190"
          x2="270"
          y2="190"
          style="stroke:#faf9f9;stroke-width:4px"></line>
    <text id="text3"
          x="50"
          y="280"
          fill="#faf9f9"
          font-size="60">Platform</text>
    <line id="line3"
          x1="50"
          y1="290"
          x2="270"
          y2="290" style="stroke:#faf9f9;stroke-width:4px"></line>
  </svg>
</template>

<script>
export default {
  name: "graphic"
}
</script>

<style scoped>

</style>