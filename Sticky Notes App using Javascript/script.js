let createBox = document.getElementsByClassName('createBox')[0];
let notes = document.getElementsByClassName('notes')[0];
let input = document.getElementById('userInput');
let i = 0;

createBox.addEventListener('keydown', content);

document.getElementById('create').addEventListener("click", function() {
    createBox.style.display = "block";
});

function content(e) {
    if (e.keyCode == '13') {
        createBox.style.display = "none";
    }
}

function divStyle(params) {

}