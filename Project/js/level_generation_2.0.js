/**
 * Created by Buisson on 29/03/14.
 */
function computeDelay(min, max) {
    'use strict';
    return Math.floor(min + (Math.random() * (max - min)));

}
//TODO ajouter des parammetres pour le traitement audio.
function generation_level(distance,i,cmp,time) {
    'use strict';

   // console.log("time :"+ time);
    /*INITIALISATION */
    var stringtmp,
        pattern = [],
        JSONlevel = "",
        //i = 0, TODO mettre dans game.js
        id = 0,
        //cmp = 0, TODO mettre dans game.js
        j,
        tmp=distance,
        rand = Math.floor((Math.random() * 4) + 1),
        portee=1,
        item;
    //configuration;    //TODO pour le fichier de config.
    /*$.getJSON("config.json", function(data ){
     configuration = data;
     console.log("test");
     });*/

    //TODO mettre la boucle for dans game.js.
    for (j = 0; j < 40; j++) {						//40 frames per secondes.



        /*      TODO A METTRE DANS game.js
        if (distance < 0) {

            distance = computeDelay(60, 180);
            tmp = distance;
            id++;
            rand = Math.floor((Math.random() * 4) + 1); // Random between 1 and 4 .
            console.log(distance);
        }*/


        if(distance===tmp){
            portee=1;
        }
        else if(distance===0){
            portee=0;
        }

        item = {
            "distance": portee,
            "direction": rand,				//1 -> down  2-> up.
            "id": id					//time when the obstacle pop.
        };

        pattern.push(item);


        if(distance===tmp || distance===0){

            if (i >= time) {
                stringtmp = '"' + JSON.stringify(cmp) + '"' + ":" + JSON.stringify(pattern);
            }
            else {
                stringtmp = "";
                if(JSONlevel !== ""){
                    stringtmp = ",";
                }
                stringtmp += '"' + JSON.stringify(cmp) + '"' + ":" + JSON.stringify(pattern);
            }

            JSONlevel = JSONlevel + stringtmp;
        }

        pattern = [];

        //distance--; // TODO mettre dans game.js
        //cmp++;  TODO mettre dans game.js
    }

    i++;




    JSONlevel = "{" + JSONlevel + "}";
    //console.log(JSONlevel);
    return JSONlevel;

}
