

var link = document.getElementById("css");
var linkId = link.getAttribute("href");

const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
            $("#mode").text("Light Mode");
            link.setAttribute("href", "light.css");
    }
    else {
            $("#mode").text("Dark Mode");
            link.setAttribute("href", "master.css");
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
