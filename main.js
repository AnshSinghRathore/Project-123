noseX= 0;
noseY= 0;
leftWristX= 0;
rightWristX= 0;
difference= 0;

function setup() 
{
  video = createCapture(VIDEO);
  video.size(600, 550);
  
  canvas = createCanvas(600,600);
  canvas.position(1000,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is initialised");
}


function gotPoses(results)
{
  if(results.length > 0)
   {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("The nose X is "+ noseX + " and nose Y is "+ noseY);
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("The left wrist X is "+ leftWristX + " and rigth wrist X is "+ rightWristX + " and the difference is " + difference);
   }
}

function draw()
{
    background('#137ef0');
    fill("#c91212");
    stroke("#c91212");
    document.getElementById("font").innerHTML = "The font size is " +  + " px";
    textSize(difference);
    text("Ansh Singh Rathore", noseX, noseY);
}

