var Main = function () {
    'use strict';

    //Ceci est un singleton
    if (Main.prototype.instance) {
        return Main.prototype.instance;
    }
    Main.prototype.instance = this;

    var gameIntervalId,
        music,
        configuration;

    this.getConfiguration = function(){
        return configuration;
    };

    this.launchGame = function () {

        $("#music").bind('durationchange', function (event) {

            $.ajax({
                dataType: "json",
                mimeType: "application/json",
                url: 'js/config.json',
                success: function(data) {

                    configuration = data;
                    console.log(event.currentTarget.duration);

                    //Creation du jeu
                    var game = new Game(event.currentTarget.duration);

                    //Creation de l'ecoute des touches
                    var keyEvent = new KeyPressed();

                    music = event.target;

                    //Jouer music
                    $("#music").bind('ended', function(){
                        Main().endGame();
                    });

                    music.volume = 0.3;
                    music.play();
                    gameIntervalId = setInterval( function(){
                        game.run_game();
                    }, configuration.ms_before_next_frame );

                    $(window).on("blur focus", function(e) {
                        var prevType = $(this).data("prevType");

                        if (prevType !== e.type) {   //  reduce double fire issues
                            switch (e.type) {
                                case "blur":
                                    clearInterval(gameIntervalId);
                                    music.pause();
                                    break;
                                case "focus":
                                    music.play();
                                    gameIntervalId = setInterval( function(){
                                        game.run_game();
                                    }, configuration.ms_before_next_frame );
                                    break;
                            }
                        }

                        $(this).data("prevType", e.type);
                    });




                }
            });


            /*
            window.requestAnimationFrame(function (time){
              Main().animationLoop(0);
            });
            */
        });

//Autre version: setInterval( game, ONE_FRAME_TIME );, voir http://www.playmycode.com/blog/2011/08/building-a-game-mainloop-in-javascript/


    };

    this.endGame = function(){
        clearInterval(gameIntervalId);
        music.pause();
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
