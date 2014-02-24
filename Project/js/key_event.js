'use strict';
function KeyEvent(){

    this.initialize = function (){
        $( "body" ).keypress(function( event ) {
            switch(event.keyCode){
                //F1
                case 112:
                    event.preventDefault();
                    help();
                    break;
                case 113:
					event.preventDefault();
					re_read();
					break;
                //key up
                case 38:
                    event.preventDefault();
                    key_up();
                    break;
                //key right
                case 39:
                    event.preventDefault();
                    key_right();
                    break;
                //key down
                case 40:
                    event.preventDefault();
                    key_down();
                    break;
                //key left
                case 37:
                    event.preventDefault();
                    key_left();
                    break;
                //enter
                case 13:
                    event.preventDefault();
                    validate();
                    break;
                //escape
                case 27:
                    event.preventDefault();
                    cancel();
                    break;
            }
            console.log(event.keyCode);
            
        });

    }


	function re_read(){
		console.log("re read");
	}
	
    function cancel(){
        console.log("cancel");
    }

    function help(){
        console.log("help");
    }

    function key_up(){
        console.log("keyup");
    }

    function key_right(){
        console.log("keyright");
    }

    function key_down(){
        console.log("keydown");
    }

    function key_left(){
        console.log("keyleft");
    }

    function validate(){
        console.log("validate");
    }

}
