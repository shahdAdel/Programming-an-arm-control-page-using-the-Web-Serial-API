var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

recognition.lang='ar';

var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true


recognition.onstart = function() {

 instructions.text("Voice Recognition is On")

}
recognition.onresult = function(event) {

 var current = event.resultIndex;

 var transcript = event.results[current][0].transcript



 content += transcript
 onChangespeech()
 textbox.val(content)

}

$("#start-btn").click(function(event) {

 recognition.start()

})

textbox.on('input', function() {

 content = $(this).val()

})