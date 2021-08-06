SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

recognition = new SpeechRecognition();

let element = ""
let select = ""

let parent = document.getElementById("idimg1")
let child = document.getElementById("idimg2")

recognition.onresult = function(e){
    console.log(e)
    console.log(e.results[0][0].transcript)
    select.innerHTML = e.results[0][0].transcript + " - acc: " + e.results[0][0].confidence
}
recognition.onstart = function(){
    console.log('Yes, Now You Can start to Talk');
    console.log(element)
}

function startRecognition(e){
    console.log(e.nextSibling.innerHTML)
    recognition.start();
    element = e.nextSibling.innerHTML
    select = e.nextSibling
    console.log(e)
}

//parent.addEventListener('click', startRecognition(this))
//child.addEventListener('click', startRecognition(this))