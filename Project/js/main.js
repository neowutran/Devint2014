var Main = function () {
    'use strict';

    this.launchGame = function () {
        $("#music").bind('durationchange', function (event) {

            console.log(event.currentTarget.duration);

            //Creation du jeu
            var game = new Game(event.currentTarget.duration);

//Creation de l'ecoute des touches
            var keyEvent = new KeyPressed();
            keyEvent.constructeur();

            //Jouer music
            event.target.play();

//lancement du jeu
            window.requestAnimationFrame(function (/* time */ time) {
                // time ~= +new Date // the unix time
                game.run_game();
            });
        });

//Autre version: setInterval( game, ONE_FRAME_TIME );, voir http://www.playmycode.com/blog/2011/08/building-a-game-mainloop-in-javascript/


    };

};

var main = new Main();
main.launchGame();