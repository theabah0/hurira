window.onload = () => {

  // (A) TTS SUPPORTED
  if ("speechSynthesis" in window) {
    // (B) GET HTML ELEMENTS
    var demo = document.getElementById("demo");
       var vlist = document.getElementById("demo-voice");
      var  vvol = document.getElementById("demo-vol");
       var vpitch = document.getElementById("demo-pitch");
      var vrate = document.getElementById("demo-rate");
       var vmsg = document.getElementById("demo-msg");
     var  vgo = document.getElementById("demo-go");
    
    // (C) POPULATE AVAILABLE VOICES
    var voices = () => {
      speechSynthesis.getVoices().forEach((v, i) => {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = v.name;
        vlist.appendChild(opt);
      });
    };
    voices();
    speechSynthesis.onvoiceschanged = voices;
  
    // (D) SPEAK
    var speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.voice = speechSynthesis.getVoices()[vlist.value];
      msg.pitch=vpitch.value;
      msg.volume=vvol.value;
      msg.rate=vrate.value; 
      msg.text = vmsg.value;
      speechSynthesis.speak(msg);
      return false;
    };
    
    // (E) ENABLE FORM
    demo.onsubmit = speak;
    vlist.disabled = false;
    vvol.disabled = false;
    vpitch.disabled = false;
    vrate.disabled = false;
    vmsg.disabled = false;
    vgo.disabled = false;
  }
  
  // (X) TTS NOT SUPPORTED
  else {
    alert("Text-to-speech is not supported on your browser!"); 
  }
};
