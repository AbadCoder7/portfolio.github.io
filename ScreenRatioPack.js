
//var scene = document.getElementById("scene");
setInterval(function() {
    let x = window.innerWidth;
    let y = window.innerHeight;

    if (x >=(y * 1.5)) {
        document.getElementById("scene").style.width = "unset";
        document.getElementById("scene").style.height = "100%";
    }
    else {
        document.getElementById("scene").style.width = "100%";
        document.getElementById("scene").style.height = "unset";
    }
}, 20);