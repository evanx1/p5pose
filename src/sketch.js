// import "p5/lib/addons/p5.dom";

const audioFile = require("./assets/calm.mp3");
console.info(audioFile)
const audio2File = require("./assets/sad.mp3");
console.info(audio2File)
const audio3File = require("./assets/up2u.mp3");
console.info(audio3File)

const scale = 1;
const width = 800 * scale;
const height = 600 * scale;

// setSketch sets this 
let p5;

// setup initializes this
let video;

let mySound;


export function preload() {
  //p5.soundFormats('mp3');
  p5.getAudioContext().resume();
  mySound = p5.loadSound(audioFile);
}


export function setSketch(sketch) {
  p5 = sketch;
}

export function setup() {
  p5.createCanvas(width, height);

  const audioButton = p5.createButton('calm');
  audioButton.position(5, height + 20);
  //mySound = p5.loadSound('assets/ShanghaiSoundloop.mp3');
  audioButton.mouseClicked(() => {
    //console.log
    
    
    mySound.play(); 
    p5.background(400,200,0); 
    my2Sound.pause(); 
    my3Sound.pause();  
    p5.userStartAudio().then(() => {

      //audioButton.remove(); 
      //osc = new window.p5.Oscillator();
      // now you can call osc methods to make sound happen
      p5.background(400,200,0); 
    });
  });

  let my2Sound;
  //p5.soundFormats('mp3');
  p5.getAudioContext().resume();
  my2Sound = p5.loadSound(audio2File);

  const sound2Button = p5.createButton('sad');
  sound2Button.position(60, height + 20);
  //mySound = p5.loadSound('assets/ShanghaiSoundloop.mp3');
  sound2Button.mouseClicked(() => {
    //console.log
    
    my2Sound.play(); 
    mySound.pause(); 
    my3Sound.pause(); 
    p5.userStartAudio().then(() => {

      //audioButton.remove(); 
      //osc = new window.p5.Oscillator();
      // now you can call osc methods to make sound happen
      p5.background(10,10,60); 
    });
  });
  
  let my3Sound;
  //p5.soundFormats('mp3');
  p5.getAudioContext().resume();
  my3Sound = p5.loadSound(audio3File); 

  const sound3Button = p5.createButton('Up 2 U');
  sound3Button.position(110, height + 20);
  //mySound = p5.loadSound('assets/ShanghaiSoundloop.mp3');
  sound3Button.mouseClicked(() => {
    //console.log
    
    my3Sound.play(); 
    mySound.pause();
    my2Sound.pause(); 
    p5.userStartAudio().then(() => {

      //audioButton.remove(); 
      //osc = new window.p5.Oscillator();
      // now you can call osc methods to make sound happen
      p5.background(100,10,600);
    });
  });
  video = p5.select('video') || p5.createCapture(p5.VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  const poseNet = ml5.poseNet(video, () => p5.select('#status').hide());

  // Every time we get a new pose, draw it
  poseNet.on('pose', drawPoses);
  
  // Hide the video element, and just show the canvas
  video.hide();
}

export function draw() {
}

function drawPoses(poses) {
  p5.translate(width, 0); // move to far corner
  p5.scale(-1.0, 1.0);
  p5.image(video, 0, 0, video.width, video.height); 
  drawKeypoints(poses);
  drawSkeleton(poses); 
}

// Draw ellipses over the detected keypoints
function drawKeypoints(poses) {
  poses.forEach((pose) =>
    pose.pose.keypoints.forEach((keypoint) => {
      if (keypoint.score > 0.2) {
        p5.fill(300, 500, 800); 
        p5.noStroke();
        p5.square(keypoint.position.x, keypoint.position.y, 20);
        
      }
    })
  )
}

let value = 0;
function draw() {
  //p5.fill(value);
  //p5.rect(25, 25, 50, 50);
}

// function mouseClicked() {
//   if (value === 0) {
//     value = 255;
//   } else {
//     value = 0;
//   }
// }
export function mouseClicked() {
  p5.soundFormats('mp3');
  p5.ellipse(mouseX, mouseY, 5, 5);
  
  console.log(p5.mySound);
  // prevent default
  //return false; 
}
// function mouseClicked(event) {
//   console.log(event);
// }

function drawSkeleton(poses) {
    poses.forEach((pose) => {
      pose.skeleton.forEach((skeleton) => {
        const [p1, p2] = skeleton;
        p5.stroke(200, 0, 0); 
        p5.line(p1.position.x, p1.position.y, p2.position.x, p2.position.y);
      

      });
    }); 
}
