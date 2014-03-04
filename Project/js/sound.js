/**
 * Created by neowutran on 04/03/14.
 */
var Sound = function () {
    "use strict";

    //Ceci est un singleton
    if (Sound.prototype.instance) {
        return Sound.prototype.instance;
    }
    Sound.prototype.instance = this;

    this.musicToLevel = function (music) {
        //music est un string qui contient l'addresse de la musique accessible par le navigateur
        return generation_level(getTime());

    };

    function getTime() {
        return $("#music").duration;
    }

};