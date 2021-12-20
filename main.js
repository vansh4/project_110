prediction_2=""
prediction_1=""
Webcam.set({
    width: 350,
    height:300,
    image_format:'png',
    png_quality:90

});
camera= document.getElementById("camera");
Webcam.attach('#camera');
function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("precam").innerHTML='<img id="spc" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/H2VOLojCC/.json', modelLoaded);
function modelLoaded(){
    console.log('modelLoaded');
}
function speak(){
    var synth= window.speechSynthesis;
    speak1="The first Prediction is"+prediction_1;
    speak2="The Second Prediction is"+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterThis)
} 