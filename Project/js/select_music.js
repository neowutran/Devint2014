/**
 * Created by draragar on 4/1/14.
 */
/*jslint browser: true*/
/*global $, jQuery, alert*/

/* classe menu */
var SelectMusic = function () {
    "use strict";

    /* variables */
    var index_selectionne = 0;

    /* singleton */
    if (SelectMusic.prototype.instance) {
        return SelectMusic.prototype.instance;
    }
    SelectMusic.prototype.instance = this;

    display_music();
    $("body").keypress(function (event) {
        switch (event.keyCode) {
            //F1
            case 112:
                help();
                break;
            //F2
            case 113:
                re_read();
                break;
            //key up
            case 38:
                key_up();
                break;
            //key right
            case 39:
                key_right();
                break;
            //key down
            case 40:
                key_down();
                break;
            //key left
            case 37:
                key_left();
                break;
            //enter
            case 13:
                validate();
                break;
        }

    });

    function display_music(){
        var first = 1;
        music_list.forEach(function(music){
            if(first === 1){
                $("#music").append("<button type='button' class='btn btn-primary btn-lg btn-block'>"+music.file+"</button>");
                first = 0;
            }else{
                $("#music").append("<button type='button' class='btn btn-default btn-lg btn-block'>"+music.file+"</button>");
            }
        });
    }

    function update(){

        $('#music').each(function(index,element) {
            console.log($( this).text());
            if(index === index_selectionne){
                $("#music").get(index).attr("class", "btn btn-primary btn-lg btn-block");
            }else{
                $("#music").get(index).attr("class", "btn btn-default btn-lg btn-block");
            }
        });

    }

    function re_read() {
        console.log("re read");
        update();
    }

    function cancel() {
        console.log("cancel");
    }

    function help() {
        console.log("help");
    }

    function key_up() {
        console.log("keyup");
        index_selectionne--;
        if (index_selectionne < 0) {
            index_selectionne = music_list.length - 1;
        }
        update();
    }

    function key_right() {
        console.log("keyright");
    }

    function key_down() {
        console.log("keydown");
        index_selectionne++;
        if (index_selectionne >= music_list.length) {
            index_selectionne = 0;
        }
        update();
    }

    function key_left() {
        console.log("keyleft");
    }

    function validate() {

    }

};

var selectMusic = new SelectMusic();

