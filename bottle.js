status = "";
objects = [];
img = "";
function preload(){
img = loadImage("Bottle.jpg")  
}
function setup(){
canvas = createCanvas(640, 420);
canvas.center(); 
objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Object";  
}
function modelLoaded(){
console.log("Model Loaded");    
status = true;
objectDetector.detect(img , gotResult)
}
function gotResult(error , results){
if(error){
console.log(error);
}
console.log(results);
objects = results;
}
function draw(){
image(img , 0 , 0 , 640 , 450);
if(status != ""){
for (i = 0; i < objects.length; i++){
document.getElementById("status").innerHTML = "Status : Object Detected!"
fill("red");
percent = floor(objects[i].confidence*100);
text(objects[i].label + " " + percent + "%" , objects[i].x -175 , objects[i].y -170);
noFill();
stroke("red");
rect(objects[i].x - 330 , objects[i].y , objects[i].width - 200  , objects[i].height - 1000);
}
}
}
function back_mob1(){
window.location = "Home.html";    
}