

var analyze = function () {

	var context;
	if (typeof AudioContext !== "undefined") {
		context = new AudioContext();
	} else if (typeof webkitAudioContext !== "undefined") {
		context = new webkitAudioContext();
	} else {
		$(".hideIfNoApi").hide();
		$(".showIfNoApi").show();
	return;
	}
	var audioElement = document.querySelector('#audioPlayer');
	var source = context.createMediaElementSource(audioElement);
	source.connect(context.destination);


	var analyser = context.createAnalyser();

	audioElement.addEventListener("canplay", function() {
	    var source = context.createMediaElementSource(audioElement);

	    // Connect the output of the source to the input of the analyser
	    source.connect(analyser);

	    // Connect the output of the analyser to the destination
	    analyser.connect(context.destination);
	});

	console.log(analyser.fftSize); // 2048 by default
	console.log(analyser.frequencyBinCount); // will give us 1024 data points

	analyser.fftSize = 64;
	console.log(analyser.frequencyBinCount); // fftSize/2 = 32 data points
 
	var frequencyData = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(frequencyData);

	document.querySelector('#affichage').innerHTML="Coucou";
	
}


var analyze = new analyze();
