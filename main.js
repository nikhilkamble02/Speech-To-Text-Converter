let start_btn = document.getElementById('start-btn')
let speech_to_text = document.getElementsByClassName('speech-to-text')[0]
let btn_clicked = false;

// let content = '';




start_btn.addEventListener('click', () => {


    let speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
        speech_to_text.innerHTML = transcript;


        // if(content.length){
        //     content+=transcript;

        // }


    })

    // addEventListener("audiostart", (event) => {});

    recognition.onaudiostart = (event) => {
        console.log("1")
        start_btn.style.backgroundColor = "rgb(224, 255, 70)"
        document.getElementById('listening-gif').style.display = "block";
        start_btn.innerHTML = "Listening.."
        btn_clicked = !btn_clicked;
    };
    recognition.onaudioend = (event) => {
        document.getElementById('listening-gif').style.display = "none";
        start_btn.innerHTML = "Start Speaking"
        start_btn.style.backgroundColor = "rgb(97, 254, 83)"
    };


    if (speech) {
        recognition.start();
        SpeechRecognition.continuous = true
    }






    //     if (btn_clicked) {

    //         console.log("2")
    //         document.getElementById('listening-gif').style.display = "none";
    //         start_btn.innerHTML = "Start Speaking"
    //     }

    //   else{
    //     console.log("1")
    //     // start_btn.style.backgroundColor = "red"
    //     document.getElementById('listening-gif').style.display = "block";
    //     start_btn.innerHTML = "Stop Listening"
    //     btn_clicked = !btn_clicked;
    //   }






})

