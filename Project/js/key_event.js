/*jslint browser: true*/
/*global $, jQuery, alert*/

var KeyPressed = function () {
    "use strict";

    if (KeyPressed.prototype.instance) {
        return KeyPressed.prototype.instance;
    }
    KeyPressed.prototype.instance = this;

    function re_read() {
        console.log("re read");
    }

    this.mouse = function(id){

        if(id===1){
            alert("GG");
        }
    };



    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds){
                break;
            }
        }
    }



    function cancel() {
        console.log("cancel");
        $(location).attr('href', "./select_music.html");
    }

    function help() {
        console.log("help");
    }

    function key_up() {
        console.log("keyup: 1");
        Game().set_user_input(1);
    }

    function key_right() {
        console.log("keyright: 2");
        Game().set_user_input(2);
    }

    function key_down() {
        console.log("keydown: 3");
        Game().set_user_input(3);
    }

    function key_left() {
        console.log("keyleft: 4");
        Game().set_user_input(4);
    }

    function validate() {
        console.log("validate");
    }

    $("body").keypress(function (event) {
        switch (event.keyCode) {
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
                //TODO remove after
                key_up();

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
        // console.log(event.keyCode);

    });

};
