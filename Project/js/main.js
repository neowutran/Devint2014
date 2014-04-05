var Main = function () {
    'use strict';

    //Ceci est un singleton
    if (Main.prototype.instance) {
        return Main.prototype.instance;
    }
    Main.prototype.instance = this;

    var music, animFrame;

    this.launchGame = function () {

        var srcMusic = localStorage.getItem("music"),
            difficulte = localStorage.getItem("difficulte");

        switch(difficulte){
            case "0":
                difficulte = difficulteEnum.TUTORIAL;
                break;
            case "1":
                difficulte = difficulteEnum.FACILE;
                break;
            case "2":
                difficulte = difficulteEnum.NORMAL;
                break;
            case "3":
                difficulte = difficulteEnum.DIFFICILE;
                break;
            default:
                $(location).attr('href', "./menu-jouer.html");
                break;
        }

        if(srcMusic === null){
            $(location).attr('href', "./menu-jouer.html");
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
