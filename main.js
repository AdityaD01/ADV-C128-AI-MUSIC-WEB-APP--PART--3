song_1 = "";
song_2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");

    poseNet = ml5.poseNet(Video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(" leftWristX " + leftWristX + " leftWristY " + leftWristY)
 
        
 
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log(" RightWristX " + RightWristX + " RightWristY " + RightWristY)
    
}

function modelLoaded{
    console.log("poseNet is Initiallised");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
   image(video,0,0,600,500);
}