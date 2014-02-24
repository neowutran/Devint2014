'use strict';

function generation_level(time) {
    /*INITIALISATION */
    var high = 0;
    var pattern = [];
    var i = 0;

    while (i < time) {								//put an obstacle all the 5secs
        var rand = Math.floor((Math.random() * 2) + 1); // Random between 1 and 2 .
        if (rand == 2) {
            if (high <= 4) {			//the maximum high for a player is 4. can be change.
                high++;
            }
        } else {
            if (high != 0) {
                high--;
            }
        }
        var item = {
            "input": rand,				//1 -> down  2-> up.
            "high": high,				//the high of the player (for a graphical game).
            "time": i					//time when the obstacle pop.
        };

        pattern.push(item);

        var delay = computDelay(0, 1);

        i = i + delay;					//TODO maybe a better random.


    }

    return JSON.stringify({level: pattern});


}

function computDelay(min, max) {

    return Math.floor((Math.random() * (max - min)) + 1);

}

