'use strict';

//Creation du jeu
var game = new Game("file://super_music.ogg");

//Creation de l'ecoute des touches
var keyEvent = new KeyPressed();
keyEvent.constructeur();

//lancement du jeu
window.requestAnimationFrame(function (/* time */ time) {
    // time ~= +new Date // the unix time
    game.run_game();
});
//Autre version: setInterval( game, ONE_FRAME_TIME );, voir http://www.playmycode.com/blog/2011/08/building-a-game-mainloop-in-javascript/
