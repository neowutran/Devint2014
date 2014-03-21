function computeDelay(min, max) {
    'use strict';
    return Math.floor((Math.random() * (max - min)) + 1);

}

function generation_level(time) {
    'use strict';

    console.log("time :"+ time);
    /*INITIALISATION */
    var stringtmp,
        distance = 60,
        pattern = [],
        JSONlevel = "",
        i = 0,
        id = 0,
        cmp = 0,
        j,
        rand = Math.floor((Math.random() * 4) + 1),
        portee,
        item;
        //configuration;    //TODO pour le fichier de config.
		/*$.getJSON("config.json", function(data ){
			configuration = data;
            console.log("test");
		});*/

    while (i <= time) {

        for (j = 0; j < 40; j++) {						//40 frames per secondes.

            if(distance<=0){
                portee=0;
            }
            else{
                portee=1;
            }


            item = {
                "distance": portee,
                "direction": rand,				//1 -> down  2-> up.
                "id": id					//time when the obstacle pop.
            };

            pattern.push(item);
            distance--;
            if (distance < 0) {
                distance = computeDelay(40, 160);
                id++;
                rand = Math.floor((Math.random() * 4) + 1); // Random between 1 and 4 .
            }

            if(distance===0){
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

            cmp++;
        }

        i++;


    }


    JSONlevel = "{" + JSONlevel + "}";
    console.log(JSONlevel);
    return JSONlevel;

}