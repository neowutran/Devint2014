var Main = function () {
    'use strict';

    //Ceci est un singleton
    if (Main.prototype.instance) {
        return Main.prototype.instance;
    }
    Main.prototype.instance = this;

    var music, animFrame;

    this.launchGame = function () {

        var srcMusic;
        var difficulte;

        if (localStorage.difficulte) {
            difficulte = parseInt(localStorage.getItem("difficulte"), 10);
        }

        if (localStorage.music) {
            srcMusic = localStorage.getItem("music");
        }

        music = new Audio(srcMusic);

        //Creation du jeu
        var game = new Game(difficulte),
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
        Sound().stop();
        var score = 0;
        if(Game().getScore() > 0){
            score = Game().getScore();
        }
        speak.jouer(config.score.replace("%d", score));
    };

};
var main = new Main();
main.launchGame();
