var Main = function () {
    'use strict';

    //Ceci est un singleton
    if (Main.prototype.instance) {
        return Main.prototype.instance;
    }
    Main.prototype.instance = this;

    this.launchGame = function () {
        $("#music").bind('durationchange', function (event) {

            console.log(event.currentTarget.duration);

            //Creation du jeu
            var game = new Game(event.currentTarget.duration),
            //Creation de l'ecoute des touches
                keyEvent = new KeyPressed(),
                timer;

            //Jouer music
            event.target.play();

            /*
            window.requestAnimationFrame(function (time){
              Main().animationLoop(0);
            });
            */

            timer = setInterval( function(){
                Game().run_game();
            }, 1000/40 );

        });


//Autre version: , voir http://www.playmycode.com/blog/2011/08/building-a-game-mainloop-in-javascript/


    };

    /*
    this.animationLoop = function(time){

            //lancement du jeu

           // time += new Date(); // the unix time
            Game().run_game();
            this.animationLoop(time);
    };
    */


};

var main = new Main();
main.launchGame();