var woh = document.getElementById("woh");

woh.onmouseover = function() {
    if(woh.mp3) {
        if(woh.mp3.paused) woh.mp3.play();
        else woh.mp3.pause();
    }
    else {
        woh.mp3 = new Audio("WOT.mp3");
        woh.mp3.play();
    }
}