<template>
  <div>
    <h1>Rednerliste</h1>
  </div>
  <div id="card">
    <p>
      Neuer Redner: <input id="id1" type="text" name="rednername">
      <button id="id3" type="submit">Hinzufügen</button>
    </p>
    <ul id="id2">

    </ul>
  </div>
</template>

<script>
export default {
  name: "rednerliste",
  mounted() {
    /**
     * 2. when speaker is added other timers will continue
     */

//speaker is added and all other speakers are stopped
    document.getElementById("id3").addEventListener
    ("click", addSpeaker);

    function addSpeaker() {

      //Create list item
      const listItem = document.createElement("li");

      //Create text node with input name
      const node = document.createTextNode(document.getElementById("id1").value);

      //append node with input name
      listItem.appendChild(node);

      //Create timer element
      const timer = document.createElement("a");

      //Start time with 00:00:00 for every speaker
      let hourS = 0;
      let minuteS = 0;
      let secondS = 0;

      //update of timer function every second
      let myVar = setInterval(addTimer,1000);

      //add timer
      function addTimer() {
        let hours = hourS;
        let minutes = minuteS;
        let seconds = secondS;
        seconds++;
        if(seconds >= 60) {
          minutes++;
          seconds -= 60;
        }
        if(minutes >= 60) {
          hours++;
          minutes -= 60;
        }
        if(hours >= 24) {
          hours -= 24;
        }
        hourS = hours;
        minuteS = minutes;
        secondS = seconds;
        let string = " ";
        if(hours < 10) {
          string += "0" + hours + ":";
        } else {
          string += hours + ":";
        }
        if(minutes < 10) {
          string += "0" + minutes + ":";
        } else {
          string += minutes * ":";
        }
        if(seconds < 10) {
          string += "0" + seconds + " ";
        } else {
          string += seconds + " ";
        }
        timer.innerHTML = string;
      }

      //append timer to list
      listItem.appendChild(timer);

      //Create Button
      const button = document.createElement("button");

      //edit button
      button.innerHTML = "Stop";
      button.type = "submit";

      /**
       * when button shows start timer is does not run
       * update of mytimer is cleared
       *
       * when button shows stop timer does run
       * update od mytimer is set again
       */
      button.addEventListener("click", function() {
        if(button.innerHTML === "Stop") {
          button.innerHTML = "Start";
          clearInterval(myVar);
        } else {
          button.innerHTML = "Stop";
          //Set timer to 00:00:00
          myVar = setInterval(addTimer, 1000);
        };
      });

      //Append Button
      listItem.appendChild(button);

      //Create element
      const element = document.getElementById("id2");

      //Append listItem to element
      element.appendChild(listItem);

    }

  }
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
#card h3, #card a {
  text-align: center;
  justify-items: center;
}
/*Style from w3schools*/
#card a button {
  background-color: #00afea;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #00afea;
  width: 60%;
  border-radius: 10px;
}
#card a button:hover {
  background-color: #00afea;
  color: white;
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