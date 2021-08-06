
let alphabets = [
    {letter : 'A', color: '#574B8BFF', background: '#E69A8DFF' },
    {letter : 'B',  color: '#FC766AFF', background: '#5B84B1FF' },
    {letter : 'C', background: '#574B8BFF', color: '#E69A8DFF'  },
    {letter : 'D', background: '#ADEFD1FF', color: '#00203FFF' },
    {letter : 'E',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {letter : 'F', color: '#EEA47FFF', background: '#00539CFF' },
    {letter : 'G', color: '#FC766AFF', background: '#5B84B1FF' },
    {letter : 'H', background: '#ADEFD1FF', color: '#00203FFF' },
    {letter : 'I', color: '#FAD0C9FF', background: '#6E6E6DFF'  },
    {letter : 'J',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {letter : 'K', background: '#ADEFD1FF', color: '#00203FFF' },
    {letter : 'L',  color: '#FC766AFF', background: '#5B84B1FF' },
    {letter : 'M', color: '#FC766AFF', background: '#5B84B1FF' },
    {letter : 'N', color: '#00539CFF', background: '#EEA47FFF'  },
    {letter : 'O', color: '#FAD0C9FF', background: '#6E6E6DFF'  },
    {letter : 'P', background: '#ADEFD1FF', color: '#00203FFF' },
    {letter : 'Q',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {letter : 'R', color: '#FC766AFF', background: '#5B84B1FF' },
    {letter : 'S', color: '#00539CFF', background: '#EEA47FFF' },
    {letter : 'T', background: '#ADEFD1FF', color: '#00203FFF' },
    {letter : 'U', color: '#FC766AFF', background: '#5B84B1FF' },
    {letter : 'V', color: '#EEA47FFF', background: '#00539CFF' },
    {letter : 'W', color: '#00539CFF', background: '#EEA47FFF'  },
    {letter : 'X',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {letter : 'Y', color: '#FAD0C9FF', background: '#6E6E6DFF'  },
    {letter : 'Z', color: '#FC766AFF', background: '#5B84B1FF' },
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
        <h1 style="color:${item.color}">${item.letter}</h1>
        <div class="buttons">
            <img src ="/images/icons8-play-100.png" onclick ="speakText(this.id)" id="${item.letter}">
            <p id ="${"p" + item.letter}"> The word </p>
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


