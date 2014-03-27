/*jslint browser: true*/
/*global $, jQuery, alert*/

/* classe menu */
var Menu = function () {
    
    /* variables */
    var menu = new Array("jouer", "scores", "preferences", "regles", "aide");
    var index_selectionne = 0; 
    
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
                help();
                break;
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
            //escape
            case 27:
                cancel();
                break;
        }

    });

    /* fonctions */

    function getMenuSelectionne(){
	return menu[index_selectionne];
    }

    function lire_son(src) {
        var sound = new Audio(src);
	sound.play();
    }

    function selectionMenu(nomMenu){
	for (i=0; i<menu.length; i++){
			$("#" + menu[i]).attr("class", "btn btn-default btn-lg btn-block");
	}
	$("#" + nomMenu).attr("class", "btn btn-primary btn-lg btn-block");
	lire_son(getSoundAdress()); 
    }

    function update(){

        selectionMenu(getMenuSelectionne());
    }

    function getSoundAdress(){
	return "music/menu/menu-" + getMenuSelectionne() + "1.ogg";
    }

    function re_read() {
        console.log("re read");
    }

    function cancel() {
        console.log("cancel");
	 $("#results").html("cancel");
    }

    function help() {
        console.log("help");
	 $("#results").html("help");
    }

    function key_up() {
	index_selectionne--;
	if (index_selectionne<0) {index_selectionne = menu.length-1;}
        console.log("keyup: 1");
	update();
    }

    function key_right() {
        console.log("keyright: 2");
	 $("#results").html("key right" + index_selectionne);
    }

    function key_down() {
	index_selectionne++;
	if (index_selectionne>=menu.length) {index_selectionne = 0;}
        console.log("keydown: 3");
	update();
    }

    function key_left() {
        console.log("keyleft: 4");
	 $("#results").html("key left" + index_selectionne);
    }

    function validate() {
        console.log("validate");
	 $("#results").html("validate");
	$(location).attr('href',$("#" + getMenuSelectionne()).attr("data-link"));
    }

};

var menuPrincipal = new Menu();

