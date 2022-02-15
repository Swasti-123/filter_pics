
function preload(){}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(650, 350);
    video = createCapture(VIDEO);
    video.hide();
    tint_colour= "";
}

function draw(){
    image(video, 0 ,0, 640, 480);
    tint(tint_colour);
}

function take_snapshot(){
    save('tinted_img.png');
}

function colour_filter(){
    tint_colour= document.getElementById("colour").value;
}
