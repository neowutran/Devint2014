'use strict';

			function generation_level(time){
				/*INITIALISATION */
				$('p').css('color', 'pink');			//TEST Jquery offline.
				var u = 0;
				var stringtmp;
				var time;
				var distance = 60;
				var patern = [];
				var JSONlevel = "";
				var maxiTime = time;
				var i=0;
				var id = 0;
				var cmp=0;
				var j;
				var rand=Math.floor((Math.random()*4)+1); // Random between 1 and 4 .
			
				while(i<=maxiTime){								

					for(j=0;j<40;j++){						//40 frames per secondes.
						
						/*if(rand==2){
							if(high<=4){			//the maximum high for a player is 4. can be change.
								high++;
							}
						}
						else{
							if(high!=0){
								high--;
							}
						}*/
							var item = {
								"distance" : distance,
								"direction": rand,				//1 -> down  2-> up.
								"id" : id					//time when the obstacle pop.
							};
					
						patern.push(item);
						//level.push(patern);
						distance --;
						if(distance < 0){
							distance = computDelay(40,160);
							id++;
							rand=Math.floor((Math.random()*4)+1); // Random between 1 and 4 .
						}

						if(i>maxiTime){
							stringtmp='"'+JSON.stringify(cmp)+'"'+":"+JSON.stringify(patern);
						}
						else{
							stringtmp='"'+JSON.stringify(cmp)+'"'+":"+JSON.stringify(patern)+",";
						}
						JSONlevel = JSONlevel+stringtmp;			//JSONlevel+JSON.stringify(patern)+","; //JSON.stringify({test: patern})
						var patern =[];
						cmp++;
					}

					i++;					//TODO maybe a better random.


				}
			
				
				JSONlevel = "{"+JSONlevel+"}";
				//alert(myJSON);
				return JSONlevel;
				//return level;


			}

		function computDelay(min,max){

			return Math.floor((Math.random()*(max-min))+1);

		}

