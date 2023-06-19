noseX = 0;
noseY = 0;
rightWrist = 0;
leftWrist = 0;
difference = 0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO); //Creates camera
    video.size(550, 500); // sets size by width,height
    canvas = createCanvas(550, 500); // creates canvas
    canvas.position(560, 80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model is loaded!");
}

function draw() {
    background("#6699ff");
    text("Aryan", noseX, noseY); //Format is: text, x, y
    textSize(difference);
    fill('#3366ff');
    stroke('#000000');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX=" + noseX + " NoseY=" + noseY);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWrist - rightWrist);
        console.log("leftWrist=" + leftWrist + " rightWrist=" + rightWrist + " difference=" + difference);
    }
}