/*jslint browser: true*/
/*global $, jQuery, alert*/

/* classe menu */
var MenuJouer = function () {
    
    /* variables */
    var menu = new Array("tutoriel","facile", "normal", "difficile", "retour");
    var index_selectionne = 0; 
    
    /* singleton */
    if (MenuJouer.prototype.instance) {
        return MenuJouer.prototype.instance;
    }
    MenuJouer.prototype.instance = this;

    /* constructeur */
    selectionMenu(getMenuSelectionne());
    

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

    /* fonctions */

    function getMenuSelectionne(){
	console.log("get menu selectionne");
	return menu[index_selectionne];
    }

    function lire_son(src) {
	console.log("lire son");
        var sound = new Audio(src);
	sound.play();
    }

    function selectionMenu(nomMenu){
	console.log("selection menu");
	for (i=0; i<menu.length; i++){
			$("#" + menu[i]).attr("class", "btn btn-default btn-lg btn-block");
	}
	$("#" + nomMenu).attr("class", "btn btn-primary btn-lg btn-block");
	lire_son(getSoundAdress()); 
    }

    function update(){
	console.log("update");
        selectionMenu(getMenuSelectionne());
    }

    function getSoundAdress(){
        switch (getMenuSelectionne()){
            //TODO changer le tutoriel
            case "tutoriel" : return configMenu.menu_facile1;
            case "facile" : return configMenu.menu_facile1;
            case "normal" : return configMenu.menu_normal1;
            case "difficile" : return configMenu.menu_difficile1;
            case "retour" : return configMenu.menu_retour1;
            default : return "erreur";
        }
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
	if (index_selectionne<0) {index_selectionne = menu.length-1;}
	update();
    }

    function key_right() {
        console.log("keyright");
    }

    function key_down() {
        console.log("keydown");
	index_selectionne++;
	if (index_selectionne>=menu.length) {index_selectionne = 0;}
	update();
    }

    function key_left() {
        console.log("keyleft");
    }

    function validate() {
        console.log("validate");
	$(location).attr('href',$("#" + getMenuSelectionne()).attr("data-link"));
    }

};

var menuPrincipal = new MenuJouer();

