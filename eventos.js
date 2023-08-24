document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("saludarButton");

    button.addEventListener("click", function() {
        alert("¡Hola!");
    });

    var div = document.getElementById("botonDiv");

    div.addEventListener("click", function() {
        alert("¡Hola! Soy el div minieri");
    });
});
