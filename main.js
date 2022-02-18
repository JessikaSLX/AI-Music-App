song1 = "";
song2 = "";
song3 = "";

function preload() {
   song1 = loadSound("LLITN.mp3");
   song2 = loadSound("EOY.mp3");
   song3 = loadSound("Senorita.mp3")
}

function setup() {
   canvas = createCanvas(500, 400);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
   console.log("Pose Net is initialized");
 }

function draw() {
   image(video, 0, 0, 500, 400);
}