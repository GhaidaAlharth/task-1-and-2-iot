function startConverting () {


		if('webkitSpeechRecognition' in window) {
		    // get action element reference
	        var action = document.getElementById("action");
			// get result div reference
		    var result = document.getElementById('result');
			var speechRecognizer = new webkitSpeechRecognition();
			speechRecognizer.continuous = true;
			speechRecognizer.interimResults = true;
			speechRecognizer.lang = 'ar';
			speechRecognizer.start();
			var finalTranscripts = '';

        // This runs when the speech recognition service starts
			speechRecognizer.onstart = function() {
            action.innerHTML = "<small>listening, please speak...</small>";}
			speechRecognizer.onspeechend = function() {
			action.innerHTML = "<small>stopped listening</small>";
            speechRecognizer.stop();
		    };

			speechRecognizer.onresult = function(event) {
				var interimTranscripts = '';
				for(var i = event.resultIndex; i < event.results.length; i++){
					var transcript = event.results[i][0].transcript;
					transcript.replace("\n", "<br>");
					if(event.results[i].isFinal) {
						finalTranscripts += transcript;
					}else{
						interimTranscripts += transcript;
					}
				}
				result.innerHTML = finalTranscripts + '<span style="color: #999">' + interimTranscripts + '</span>';
			};
			speechRecognizer.onerror = function (event) {

			};
		}
		else {
			result.innerHTML = 'Your browser is not supported. Please download Google chrome or Update your Google chrome!!';
		}	
		
		}