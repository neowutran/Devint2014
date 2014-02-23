

			
			
			var tmp = generation_level(1000);
			alert(tmp);



			function generation_level(time){
				/*INITIALISATION */
				$('p').css('color', 'pink');			//TEST Jquery offline.
				var u = 0;
				var time;
				var high = 0;
				var patern = [];
				var JSONlevel = "";
				var maxiTime = time;
				var i=0;


				//for (var i = 0; i < maxiTime; i++) {
			
				while(i<maxiTime){								//put an obstacle all the 5secs
					var rand=Math.floor((Math.random()*2)+1); // Random between 1 and 2 .
					if(rand==2){
						if(high<=4){			//the maximum high for a player is 4. can be change.
							high++;
						}
					}
					else{
						if(high!=0){
							high--;
						}
					}
						var item = {
							"input": rand,				//1 -> down  2-> up.
							"high" : high,				//the high of the player (for a graphical game).
							"time" : i					//time when the obstacle pop.
						};

					patern.push(item);

					var delay = computDelay(0,1);

					i=i+delay;					//TODO maybe a better random.
					


				}
			
			
				JSONlevel = JSON.stringify({level: patern});
				//alert(myJSON);
				return JSONlevel;



			}

		function computDelay(min,max){

			return Math.floor((Math.random()*(max-min))+1);

		}

