var Main = function () {
    'use strict';

    //Ceci est un singleton
    if (Main.prototype.instance) {
        return Main.prototype.instance;
    }
    Main.prototype.instance = this;

    var music,ended,animFrame;

    this.launchGame = function () {

           //console.log(event.currentTarget.duration);
            music = new Audio("music/RammsteinSonne.ogg");

            //Creation du jeu
            //event.currentTarget.duration
            var game = new Game(),
                level = new LevelGeneration(),
                keyEvent = new KeyPressed(),
                ended = 0,
                sound = new Sound(music);

            // loop and update
            animFrame = requestAnimationFrame(function update() {
                if (ended === 0) {
                    animFrame = requestAnimationFrame(update);
                }
                game.run_game(Sound().getVolume());
            });



    };

    this.endGame = function () {
        cancelAnimationFrame(animFrame);
        Sound().pause();
    };

};

var main = new Main();
main.launchGame();
