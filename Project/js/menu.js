/*jslint browser: true*/
/*global $, jQuery, alert*/

/* classe menu */
var Menu = function () {
    "use strict";

    /* variables */
    var menu = ["jouer", "scores", "preferences", "regles", "aide"],
        index_selectionne = 0;

    /* singleton */
    if (Menu.prototype.instance) {
        return Menu.prototype.instance;
    }
    Menu.prototype.instance = this;

    /* constructeur */
    selectionMenu(getMenuSelectionne());

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

        }

    });

    /* fonctions */

    function getMenuSelectionne() {
        console.log("get menu selectionne");
        return menu[index_selectionne];
    }

    function lire_son(src) {
        console.log("lire son");
        var sound = new Audio(src);
        sound.play();
    }

    function selectionMenu(nomMenu) {
        console.log("selection menu");
        var i;
        for (i = 0; i < menu.length; i++) {
            $("#" + menu[i]).attr("class", "btn btn-default btn-lg btn-block");
        }
        $("#" + nomMenu).attr("class", "btn btn-primary btn-lg btn-block");
        lire_son(getSoundAdress());
    }

    function update() {
        console.log("update");
        selectionMenu(getMenuSelectionne());
    }

    function getSoundAdress() {
        console.log("get sound adress");
        //var nommenu = getMenuSelectionne();
        //return configMenu.nommenu;
        switch (getMenuSelectionne()) {
            //case "jouer" : return configMenu.jouer;
            case "aide" :
                return configMenu.menu_aide1;
            case "jouer" :
                return configMenu.menu_jouer1;
            case "regles" :
                return configMenu.menu_regles1;
            case "preferences" :
                return configMenu.menu_preferences1;
            case "scores" :
                return configMenu.menu_scores1;
            default :
                return "erreur";
        }
        //return "music/menu/menu-" + getMenuSelectionne() + "1.ogg";
    }

    function re_read() {
        console.log("re read");
        update();
    }

    function help() {
        console.log("help");
    }

    function key_up() {
        console.log("keyup");
        index_selectionne--;
        if (index_selectionne < 0) {
            index_selectionne = menu.length - 1;
        }
        update();
    }

    function key_down() {
        console.log("keydown");
        index_selectionne++;
        if (index_selectionne >= menu.length) {
            index_selectionne = 0;
        }
        update();
    }

    function validate() {
        console.log("validate");
        $(location).attr('href', $("#" + getMenuSelectionne()).attr("data-link"));
    }

};

var menuPrincipal = new Menu();

