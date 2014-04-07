var Main = function () {
    'use strict';

    //Ceci est un singleton
    if (Main.prototype.instance) {
        return Main.prototype.instance;
    }
    Main.prototype.instance = this;

    var music,
        fanfare = new Audio(config.fanfare),
        animFrame;

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

        console.log(srcMusic);


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

    this.endGame = function (victory) {
        cancelAnimationFrame(animFrame);
        Sound().stop();
        var score = 0;
        if(Game().getScore() > 0){
            score = Game().getScore();
        }

        /*
        var delay = fanfare.duration, // durée de fanfare
            now = new Date(),
            desiredTime = new Date().setSeconds(now.getSeconds() + delay);

        while (now < desiredTime) {
            now = new Date(); // update the current time
        }*/
        if(victory===1){
            fanfare.play();
            setTimeout(function(){
                console.log(fanfare.duration);
                speak.play(config.score.replace("%d", score), "fr");
            },(fanfare.duration)*1000);

        }else{
            speak.play(config.score.replace("%d", score), "fr");
        }
    };

};
var main = new Main();
main.launchGame();
