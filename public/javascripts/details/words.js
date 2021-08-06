
let alphabets = [
    {word : 'One', color: '#574B8BFF', background: '#E69A8DFF' },
    {word : 'Two',  color: '#FC766AFF', background: '#5B84B1FF' },

    {word : 'Three', background: '#574B8BFF', color: '#E69A8DFF'  },
    {word : 'Four', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'Five',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {word : 'Six', color: '#EEA47FFF', background: '#00539CFF' },
    {word : 'Seven', color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'Eight',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {word : 'Nine', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'Ten',  color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'Go', color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'Come', color: '#00539CFF', background: '#EEA47FFF'  },
    {word : 'Mummy', color: '#FAD0C9FF', background: '#6E6E6DFF'  },
    {word : 'Daddy', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'Frog',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {word : 'Food', color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'Water', color: '#00539CFF', background: '#EEA47FFF' },
    {word : 'Teddy', background: '#ADEFD1FF', color: '#00203FFF' },
    {word : 'Eat', color: '#FC766AFF', background: '#5B84B1FF' },
    {word : 'Spoon', color: '#EEA47FFF', background: '#00539CFF' },
    {word : 'Plate', color: '#00539CFF', background: '#EEA47FFF'  },
    {word : 'Biscuit',  color: '#574B8BFF', background: '#E69A8DFF'  },
    {word : 'Poo', color: '#FAD0C9FF', background: '#6E6E6DFF'  },
    {word : 'Sleep', color: '#FC766AFF', background: '#5B84B1FF' },
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
        <h1 style="color:${item.color}">${item.word}</h1>
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


