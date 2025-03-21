const keyboardDemo = document.getElementById("keyboardDemo");

// Event Listener for keydown event
document.addEventListener("keydown", function(event) {
    keyboardDemo.textContent = 'Key pressed: ' + event.key;
    keyboardDemo.style.backgroundColor = "#27ae60";
});

// Event Listener for keyup event
document.addEventListener("keyup", function() {
    keyboardDemo.textContent = "Press a key...";
    keyboardDemo.style.backgroundColor = "#3498db";
});