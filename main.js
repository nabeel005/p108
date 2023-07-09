function startClassification(){

    dog = 0;
    cat = 0
    tiger = 0;
    cow = 0;

navigator.mediaDevices.getUserMedia({audio:true});

classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/X2S29elnq/model.json",modelReady);

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);

        red = Math.floor(Math.random()*255)+1;
        console.log(red);
        green = Math.floor(Math.random()*255)+1;
        blue = Math.floor(Math.random()*255)+1;

        document.getElementById("audio_detected").innerHTML = "Animal sound detected - " + results[0].label;
        document.getElementById("audio_detected").style.color = "rgb("+red+','+green+','+blue+")";

        document.getElementById("number_detected").style.color = "rgb("+red+','+green+','+blue+")";

        if(results[0].label == "Barking"){
            document.getElementById("animal_image").src = "dog.gif";
            dog = dog+1;
            console.log(dog);
            document.getElementById("number_detected").innerHTML = "Detected Dog  - "+dog+" Detected Cat - "+cat+" Detected Tiger - "+tiger+" Detected Cow - "+cow;
         }
        else if(results[0].label == "Meowing"){
            document.getElementById("animal_image").src = "cat.gif";
            cat = cat+1;
            document.getElementById("number_detected").innerHTML = "Detected Dog  - "+dog+" Detected Cat - "+cat+" Detected Tiger - "+tiger+" Detected Cow - "+cow;
        }
        else if(results[0].label == "Roar"){
            document.getElementById("animal_image").src = "tiger.gif";
            tiger=tiger+1;
            document.getElementById("number_detected").innerHTML = "Detected Dog  - "+dog+" Detected Cat - "+cat+" Detected Tiger - "+tiger+" Detected Cow - "+cow;
        }
        else if(results[0].label == "Mooing"){
            document.getElementById("animal_image").src = "cow.gif";
            cow=cow+1;
            document.getElementById("number_detected").innerHTML = "Detected Dog  - "+dog+" Detected Cat - "+cat+" Detected Tiger - "+tiger+" Detected Cow - "+cow;
        }
        else{
            document.getElementById("animal_image").src = "";
            document.getElementById("number_detected").innerHTML = "Detected Dog  - "+dog+" Detected Cat - "+cat+" Detected Tiger - "+tiger+" Detected Cow - "+cow;
        }
}

}

}