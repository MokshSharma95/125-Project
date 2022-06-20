LeftWrisx="";
RightWristx="";
nosex="";
nosey="";
difference="";
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,450);
    canvas.position(590,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log("poseNet is Initialised")

}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = " + nosex +" nosey = " + nosey);

        LeftWrisx = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWrisx - RightWristx);

        console.log("LeftWrisx = " + LeftWrisx + " RightWristx = "+ RightWristx + " difference = " + difference);
    }
    }

}
function draw(){
    background('grey');
    document.getElementById("text_px").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('lightblue');
    stroke('black');
    square(nosex, nosey, difference);
}
