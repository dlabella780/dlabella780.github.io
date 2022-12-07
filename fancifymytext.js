function biggify() {
    document.getElementById("textfield").style.fontSize = "24pt";
}

function moo() {
    document.getElementById("textfield").style.textTransform = "uppercase";
    var sentence = document.getElementById("textfield").value.split(".");
    document.getElementById("textfield").value = sentence.join(", moo.");
}


function fancify() {
    document.getElementById("textfield").style.color = "blue";
    document.getElementById("textfield").style.fontWeight = "bold";
    document.getElementById("textfield").style.textDecoration = "underline";
}

function boringfy() {
    document.getElementById("textfield").style.color = "black";
    document.getElementById("textfield").style.fontWeight = "normal";
    document.getElementById("textfield").style.textDecoration = "none";
}