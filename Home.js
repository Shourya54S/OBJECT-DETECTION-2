Name = "";
function laptop(){
window.location = "Laptop.html";    
}
function mobile(){
window.location = "Mobile.html";
}
function bottle(){
window.location = "bottle.html";
}
function name_enter(){
Name = document.getElementById("box-enter").value;
document.getElementById("NameH").innerHTML = "Welcome " + Name + "!";
}