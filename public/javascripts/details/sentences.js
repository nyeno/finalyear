
let alphabets = [
    {word : 'I want to go outside', color: '#574B8BFF', background: '#E69A8DFF' },
    {word : 'Throw the ball',  color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'The frog jumps', background: '#574B8BFF', color: '#E69A8DFF'  },
    {word : 'I want biscuits', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'Stop it',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {word : 'I want to watch TV', color: '#EEA47FFF', background: '#00539CFF' },
    {word : 'I am hungry', color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'Can I go visit my friend?', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'I want to go to sleep', color: '#FAD0C9FF', background: '#6E6E6DFF'  },
    {word : 'Can I have an apple?',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {word : 'The book is red', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'I want water',  color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'Look at that', color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'I want to play', color: '#00539CFF', background: '#EEA47FFF'  },
    {word : 'Can I pet the dog', color: '#FAD0C9FF', background: '#6E6E6DFF'  },
    {word : 'She has red hair', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'It is time for school',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {word : 'This is break time', color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'Can you help me', color: '#00539CFF', background: '#EEA47FFF' },
    {word : 'I am cold', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'I am hot', color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'I miss Daddy', color: '#EEA47FFF', background: '#00539CFF' },
]
let main = document.querySelector("main")
let added = ""
SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

recognition = new SpeechRecognition();

let element = ""
let select = ""

recognition.onresult = function (e){
    console.log(e)
    console.log(e.results[0][0].transcript)
    select.innerHTML = e.results[0][0].transcript + " - acc: " + e.results[0][0].confidence
}
recognition.onstart = function(){
    console.log('Yes, Now You Can start to Talk');
    //console.log(element)
}

function startRecognition(e){
    //console.log(e.previousElementSibling.innerHTML)
    recognition.start();
    element = e.previousElementSibling.innerHTML
    select = e.previousElementSibling
    //console.log(element)
}


alphabets.forEach(item => {

    added += `
    <section style="background-color:${item.background}"> 
        <h1 style="color:${item.color}; font-size:3rem">${item.word}</h1>
        <div class="buttons">
            <img src ="/images/icons8-play-100.png" onclick ="speakText(this.id)" id="${item.word}">
            <p> The word </p>
            <img src ="/images/icons8-microphone-100.png" onclick ="startRecognition(this)">
        </div>
    </section>  
    `
});
main.innerHTML = added

function speakText(event){
    console.log(event)
    responsiveVoice.speak(event);
}


