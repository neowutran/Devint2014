/**
 * Created by draragar on 4/1/14.
 */
/*jslint browser: true*/
/*global $, jQuery, alert*/

/* classe menu */
var SelectMusic = function () {
    "use strict";

    /* variables */
    var index_selectionne = 0,
        music_src;

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
                event.preventDefault();
                help();
                break;
            //F2
            case 113:
                event.preventDefault();
                re_read();
                break;
            //key up
            case 38:
                event.preventDefault();
                key_up();
                break;
            //key down
            case 40:
                event.preventDefault();
                key_down();
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

    });

    function display_music() {
        var first = 1;
        music_list.forEach(function (music) {
            if (first === 1) {
                $("#music").append("<button type='button' class='music btn btn-primary btn-lg btn-block'>" + music.file + "</button>");
                first = 0;
                music_src = music.file;
                speak.play(music.file.replace(".ogg", ""));

            } else {
                $("#music").append("<button type='button' class='music btn btn-default btn-lg btn-block'>" + music.file + "</button>");
            }
        });
    }

    function update() {

        $('.music').each(function (index, element) {
            console.log($(this).text());
            if (index === index_selectionne) {
                speak.play($(this).text().replace(".ogg",""));
                music_src = $(this).text();
                $(element).attr("class", "music btn btn-primary btn-lg btn-block");
            } else {
                $(element).attr("class", "music btn btn-default btn-lg btn-block");
            }

        });

    }

    function re_read() {
        console.log("re read");
        update();
    }

    function cancel() {
        console.log("cancel");
        $(location).attr('href', "./menu-jouer.html");

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

    function key_down() {
        console.log("keydown");
        index_selectionne++;
        if (index_selectionne >= music_list.length) {
            index_selectionne = 0;
        }
        update();
    }

    function validate() {
        localStorage.setItem("music", "music/" + music_src);
        $(location).attr('href', "./jouer.html");
    }

};

var selectMusic = new SelectMusic();

