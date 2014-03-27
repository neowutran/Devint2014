var Main = function () {
    'use strict';

    //Ceci est un singleton
    if (Main.prototype.instance) {
        return Main.prototype.instance;
    }
    Main.prototype.instance = this;

    var music,ended,animFrame;

    this.launchGame = function () {

        $("#music").bind('durationchange', function (event) {

            console.log(event.currentTarget.duration);
            music = event.target;

            //Creation du jeu
            var game = new Game(event.currentTarget.duration),
                keyEvent = new KeyPressed(),
                ended = 0,
                sound = new Sound(music);






            /*

            var context = new AudioContext();
            // Create lineOut
            var lineOut = new WebAudiox.LineOut(context);
            lineOut.volume = 0.3;

            analyser.connect(lineOut.destination);
            lineOut.destination = analyser;

            // load a sound and play it immediatly
            WebAudiox.loadBuffer(context, music.src, function (buffer) {
                var source = context.createBufferSource();
                source.buffer = buffer;
                source.loop = true;
                source.connect(lineOut.destination);
                source.start(0);
                // source.volume = 0.3;
            });
*/
            // create the object
           // var analyser2Volume = new WebAudiox.Analyser2Volume(analyser);

            //var beatDetector= new WebAudiox.AnalyserBeatDetector(analyser, function(time){
            //  console.log("beat:"+time);
            //});

            var nextVolume = 0,
                currentVolume = -1,
                counter = 0;

            // loop and update
            animFrame = requestAnimationFrame(function update() {
                if (ended === 0) {
                    animFrame = requestAnimationFrame(update);
                }

                // get volume
             //   var volume = analyser2Volume.rawValue();
               /*
                if(currentVolume === -1){
                    currentVolume = volume;
                }
*/
                game.run_game(0);
  /*
                nextVolume += volume;
                counter++;

                if(counter === 40){
                    currentVolume = nextVolume / 40;
                    nextVolume = 0;
                    counter = 0;
                }
*/
            });

        });

    };

    this.endGame = function () {
        cancelAnimationFrame(animFrame);
        Sound().pause();
    };

};

var main = new Main();
main.launchGame();
