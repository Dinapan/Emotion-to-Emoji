 Webcam.set({
     width="350",
     height="300",
     image_format : 'png',
     png_quality : 90
 });

 camera = document.getElementById("camera");

 Webcam.attach('#camera');

 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>'
     })
 }

 console.log('ml5 version:',ml5.version);

 classifier = ml5.imageCLassifier('https://teachablemachine.withgoogle.com/models/0eUfaCI5s/model.json',modelLoaded);

 function modelLoaded(){
     console.log("model loaded");
 }

 function speak(){
     var synth = window.speechSynthesis;
     speak_data_1 = "the first prediction is" + perdiction_1;
     speak_data_2 = "the second prediction is" + perdiction_2;
     var utterthis = new.SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
     synth.speak(utterthis);
 }