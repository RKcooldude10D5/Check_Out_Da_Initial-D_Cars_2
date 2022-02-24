hctr="";
hnsx="";
mrx7="";
mle="";
nfz="";
nsgtr="";
ra="";
si="";
sc="";
tae85="";
tae86="";
ts=""; 
rightwristX=0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(350, 300);
    video.position(30, 200);
    canvas=createCanvas(400, 350);
    canvas.position(560, 200);
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
var speechrecognition= window.webkitSpeechRecognition;
var recognition= new speechrecognition();
function start(){
    recognition.start();
function modelLoaded(){
    console.log("poseNet is Initial-Dised");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        rightwristX=results[0].pose.rightWrist.x;
        leftwristX=results[0].pose.leftWrist.x;
    }
}
recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    if (content=="honda civic type r"){
        hctr="set";
    }
    if (content=="honda nsx"){
        hnsx="set";
    }
    if (content=="mazda rx7"){
        mrx7="set";
    }
    if (content=="mitsubishi lancer evolution"){
        mle="set";
    }
    if (content=="nissan fairlady z"){
        nfz="set";
    }
    if (content=="nissan skyline gtr"){
        nsgtr="set";
    }
    if (content=="rick astley"){
        ra="set";
    }
    if (content=="subaru impreza"){
        si="set";
    }
    if (content=="suzuki cappuccino"){
        sc="set";
    }
    if (content=="toyota ae85"){
        tae85="set";
    }
    if (content=="toyota ae86"){
        tae86="set";
    }
    if (content=="toyota supra"){
        ts="set";
    }
}
function draw(){
    background('#808080');
    if(hctr=="set"){
    hctr="Honda Civic Type-R.png";
    }
    if(hctr=="set"){
    hnsx="Honda NSX.png";
    }
    if(hctr=="set"){
    mrx7="Mazda RX7.png";
    }
    if(hctr=="set"){
    mle="Mitsubishi Lancer Evolution.png";
    }
    if(hctr=="set"){
    nfz="Nissan Fairlady Z.png";
    }
    if(hctr=="set"){
    nsgtr="Nissan Fairlady GT-R.png";
    }
    if(hctr=="set"){
    ra="Rick Astley.png";
    }
    if(hctr=="set"){
    si="Subaru Impreza.png";
    }
    if(hctr=="set"){
    sc="Suzuki Cappuccino.png";
    }
    if(hctr=="set"){
    tae85="Toyota AE85.png";
    }
    if(hctr=="set"){
    tae86="Toyota AE86.png";
    }
    if(hctr=="set"){
    ts="Toyota Supra.png";
    }
}