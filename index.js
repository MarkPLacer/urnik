// Disable Right click
document.addEventListener('contextmenu', event => event.preventDefault());

// Disable key down
document.onkeydown = disableSelectCopy;

// Disable mouse down
document.onmousedown = dMDown;

// Disable click
document.onclick = dOClick;

function dMDown(e) { return false; }

function dOClick() { return true; }

function disableSelectCopy(e) {
    // current pressed key
    var pressedKey = String.fromCharCode(e.keyCode).toLowerCase();
    if ((e.ctrlKey && (pressedKey == "c" || pressedKey == "x" || pressedKey == "v" || pressedKey == "a" || pressedKey == "u")) ||  e.keyCode == 123) {
        return false;
    }
}