function alertButton() {
    //alert("Hello, world!");
    document.getElementById("textField").style.fontSize = "24pt";
    var selected = document.getElementsByName("style");

    if (selected[0].checked) {
        document.getElementById("textField").style.fontWeight = "bold";
        //document.getElementById("textField").style.fontStyle = "italic";
        document.getElementById("textField").style.color = "Blue";
        document.getElementById("textField").style.textDecoration = "underline";
    }
    if (selected[1].checked) {
        document.getElementById("textField").style.fontWeight = "initial";
        //document.getElementById("textField").style.fontStyle = "normal";
        document.getElementById("textField").style.color = "initial";
        document.getElementById("textField").style.textDecoration = "none";
    }
}

function alertRadio() {
    var selected = document.getElementsByName("style");

    if (selected[0].checked) {
        alert("fancy selected");
    }
    if (selected[1].checked) {
        alert("boring selected");
    }
}

function mooButton() {
    document.getElementById("textField").value = document.getElementById("textField").value.toUpperCase();
    var input = document.getElementById("textField").value;
    const parts = input.split(" ");
    for (let i = 0; i < parts.length; i++) {
        const ending = [".", ",","?","!",";"];
        for (let j = 0; j < ending.length; j++) {
            if (parts[i].substr(-ending[j].length) === ending[j]){
                const split = parts[i].split(ending[j]);
                parts[i] = split[0] + "-Moo" + ending[j];
            }
        }
    }
    input = parts.join(" ");
    document.getElementById("textField").value = input;
}