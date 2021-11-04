document.getElementById("id3").addEventListener
        ("click", addTalker);

function addTalker() {
    //Create list item
    const listItem = document.createElement("li");
    //Create/Get text node and append text
    const node = document.createTextNode(document.getElementById("id1").value);
    listItem.appendChild(node);
    //Append time
    listItem.appendChild(createTimer());
    //Append button
    listItem.appendChild(addButton());
    //Create element and append element
    const element = document.getElementById("id2");
    element.appendChild(listItem);
}

function addButton() {
    //Create, edit and append start button
    const button = document.createElement("button");
    button.innerHTML = "Start";
    button.type = "submit";
    button.addEventListener("click", function() {
        if(button.innerHTML === "Stop") {
            button.innerHTML = "Start";
        } else {
            button.innerHTML = "Stop";
        };
    });
    return button;
}
function createTimer() {
    const a =  document.createElement("a");
    a.innerHTML = " " + new Date().toLocaleTimeString() + " ";
    return a;
}