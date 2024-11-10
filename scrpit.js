let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("good morning sir")
    }
    else if(hours>=12 && hours <16){
        speak("good afternoon sir")
    }else{
        speak("good evening sir")
    }  

}
window.addEventListener('load',()=>{
    wishme()
})
let SpeechRecognition= window. SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition();
recognition.onresult=(event)=>{
   let currentIndex=event.resultIndex
  let transcript=event.results[currentIndex][0].transcript
  content.innerText=transcript
takecommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
recognition.start()
btn.style.display="none"
voice.style.disply="block"
})
function takecommand(message){
    btn.style.display="flex"
    voice.style.disply="none"
    if(message.includes("hello")||message.includes("hey")){
 speak("hello sir,what can i help you")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assitant, created by chandu yadav")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://https://www.youtube.com","-blank")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://https://www.google.com","-blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://https://www.facebook.com","-blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://https://www.instagram.com","-blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time=new Date().tolocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)

    }
    else if(message.includes("date")){
        let date=new Date().tolocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)

    }
    else{
        speak('this is what i found on internet regarding')
        window.open('https://www.google.com/search?q=what+a+java+script=${message}')
    }
}