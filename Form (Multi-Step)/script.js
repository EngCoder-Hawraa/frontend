var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");

var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Next3 = document.getElementById("Next3");

var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");
var Step1 = document.getElementById("step1");
var Step2 = document.getElementById("step2");
var Step3 = document.getElementById("step3");

var progress = document.getElementById("progress");

Next1.onclick = function() {
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "250px";
    Step1.style.color = "#fff";
    Step2.style.color = "#fff";
}
Back1.onclick = function() {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "120px";
    Step1.style.color = "#fff";
    Step2.style.color = "#333";
    Step3.style.color = "#333";
}
Next2.onclick = function() {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "400px";
    Step1.style.color = "#fff";
    Step2.style.color = "#fff";
    Step3.style.color = "#fff";
}
Back2.onclick = function() {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "250px";
    Step1.style.color = "#fff";
    Step2.style.color = "#fff";
    Step3.style.color = "#333";
}







