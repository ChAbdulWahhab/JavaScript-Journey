let parent = document.getElementById("parent");
let result = document.getElementById("result");
let textBox = document.getElementById("textBox");

parent.addEventListener("click", function (e) {
    result.innerHTML = "You pointed " + e.target.textContent + " for making tea.";
});

textBox.onkeydown = function (e) {
    result.innerHTML = "Your " + e.key + " is down.";
}

textBox.onkeyup = function (e) {
    result.innerHTML = "Your " + e.key + " is up.";
}

// textBox.onkeypress = function(e) {
//      result.innerHTML = "Your " + e.key + " is pressed.";
// }