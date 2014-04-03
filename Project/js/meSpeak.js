/**
 * Created by draragar on 3/31/14.
 */
var MeSpeak = function () {
    "use strict";

    //Ceci est un singleton
    if (MeSpeak.prototype.instance) {
        return MeSpeak.prototype.instance;
    }
    MeSpeak.prototype.instance = this;

    this.play = function (message) {
        meSpeak.loadVoice("js/mespeak/voices/en/en.json");
        meSpeak.speak(message, {
            amplitude: 100,
            wordgap  : 0,
            pitch    : 45,
            speed    : 34,
            variant  : ''
        });
    };

    this.jouer = function(message){
        meSpeak.loadVoice("js/mespeak/voices/fr.json");
        meSpeak.speak(message, {
            amplitude: 100,
            wordgap  : 0,
            pitch    : 45,
            speed    : 34,
            variant  : ''
        });
    };

};

meSpeak.loadConfig("js/mespeak/mespeak_config.json");
var speak = new MeSpeak();
