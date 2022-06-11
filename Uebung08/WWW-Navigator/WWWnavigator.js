let navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const sidebar = document.getElementById("side-bar");

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
        sidebar.classList.toggle("sidebar-active");
    });
}

const navClicks = () => {
    const htmlButton = document.getElementById("HTML-Btn");
    const cssButton = document.getElementById("CSS-Btn");
    const jsButton = document.getElementById("JS-Btn");
    const sideLinkButtons = [];
    sideLinkButtons[0] = document.getElementById("side-link1");
    sideLinkButtons[1] = document.getElementById("side-link2");
    sideLinkButtons[2] = document.getElementById("side-link3");
    sideLinkButtons[3] = document.getElementById("side-link4");

    const mainHeading = document.getElementById("main-heading");
    const mainParagraph = document.getElementById("main-paragraph");

    const htmlButtons = ["Headings", "Paragraph", "Unordered List", "Button"];
    const cssButtons = ["Selectors", "Colors", "Flexbox", "Res. Design"];
    const jsButtons = ["Function", "Object", "Hyperlinks", "Structure"];

    const data = fetch("data.json")
        .then(response => response.json());

    htmlButton.addEventListener("click", () => {
        sideLinkButtons.forEach((link, index) => {
            link.innerHTML = htmlButtons[index];
        });
       data.then(data => {
           document.getElementById("main-heading").innerHTML = data["html"]["headings"]["heading"];
           document.getElementById("main-paragraph").innerHTML =
               data["html"]["headings"]["content"];
           document.getElementById("reference").innerHTML =
               data["html"]["headings"]["references"];
       });
    });

    cssButton.addEventListener("click", () => {
        sideLinkButtons.forEach((link, index) => {
            link.innerHTML = cssButtons[index];
        });
        data.then(data => {
            document.getElementById("main-heading").innerHTML = data["css"]["selectors"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["css"]["selectors"]["content"];
            document.getElementById("reference").innerHTML =
                data["css"]["selectors"]["references"];
        });
    });

    jsButton.addEventListener("click", () => {
        sideLinkButtons.forEach((link, index) => {
            link.innerHTML = jsButtons[index];
        });
        data.then(data => {
            document.getElementById("main-heading").innerHTML = data["javascript"]["function"]["heading"];
            document.getElementById("main-paragraph").innerHTML =
                data["javascript"]["function"]["content"];
            document.getElementById("reference").innerHTML =
                data["javascript"]["function"]["references"];
        });
    });

    sideLinkButtons[0].addEventListener("click", () => {
        if(document.getElementById("side-link1").innerHTML === "Headings") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["html"]["headings"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["html"]["headings"]["content"];
                document.getElementById("reference").innerHTML =
                    data["html"]["headings"]["references"];
            });
        } else if (document.getElementById("side-link1").innerHTML === "Selectors") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["css"]["selectors"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["css"]["selectors"]["content"];
                document.getElementById("reference").innerHTML =
                    data["css"]["selectors"]["references"];
            });
        } else if(document.getElementById("side-link1").innerHTML === "Function") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["javascript"]["function"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["javascript"]["function"]["content"];
                document.getElementById("reference").innerHTML =
                    data["javascript"]["function"]["references"];
            });
        }
    });

    sideLinkButtons[1].addEventListener("click", () => {
        if(document.getElementById("side-link2").innerHTML === "Paragraph") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["html"]["paragraph"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["html"]["paragraph"]["content"];
                document.getElementById("reference").innerHTML =
                    data["html"]["paragraph"]["references"];
            });
        } else if (document.getElementById("side-link2").innerHTML === "Colors") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["css"]["colors"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["css"]["colors"]["content"];
                document.getElementById("reference").innerHTML =
                    data["css"]["colors"]["references"];
            });
        } else if(document.getElementById("side-link2").innerHTML === "Object") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["javascript"]["object"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["javascript"]["object"]["content"];
                document.getElementById("reference").innerHTML =
                    data["javascript"]["object"]["references"];
            });
        }
    });
    sideLinkButtons[2].addEventListener("click", () => {
        if(document.getElementById("side-link3").innerHTML === "Unordered List") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["html"]["unordered list"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["html"]["unordered list"]["content"];
                document.getElementById("reference").innerHTML =
                    data["html"]["unordered list"]["references"];
            });
        } else if (document.getElementById("side-link3").innerHTML === "Flexbox") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["css"]["flexbox"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["css"]["flexbox"]["content"];
                document.getElementById("reference").innerHTML =
                    data["css"]["flexbox"]["references"];
            });
        } else if(document.getElementById("side-link3").innerHTML === "Hyperlinks") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["javascript"]["hyperlinks"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["javascript"]["hyperlinks"]["content"];
                document.getElementById("reference").innerHTML =
                    data["javascript"]["hyperlinks"]["references"];
            });
        }
    });
    sideLinkButtons[3].addEventListener("click", () => {
        if(document.getElementById("side-link4").innerHTML === "Button") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["html"]["button"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["html"]["button"]["content"];
                document.getElementById("reference").innerHTML =
                    data["html"]["button"]["references"];
            });
        } else if (document.getElementById("side-link4").innerHTML === "Res. Design") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["css"]["responsive design"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["css"]["responsive design"]["content"];
                document.getElementById("reference").innerHTML =
                    data["css"]["responsive design"]["references"];
            });
        } else if(document.getElementById("side-link4").innerHTML === "Structure") {
            data.then(data => {
                document.getElementById("main-heading").innerHTML = data["javascript"]["Struktur einer Website"]["heading"];
                document.getElementById("main-paragraph").innerHTML =
                    data["javascript"]["Struktur einer Website"]["content"];
                document.getElementById("reference").innerHTML =
                    data["javascript"]["Struktur einer Website"]["references"];
            });
        }
    });
}


navClicks();
navSlide();

