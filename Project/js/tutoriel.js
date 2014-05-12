var Tutoriel = function () {
    'use strict';

    var press_right = false,
        press_left = false,
        press_up = false,
        press_down = false,
        sound1;

    //Ceci est un singleton
    if (Tutoriel.prototype.instance) {
        return Tutoriel.prototype.instance;
    }
    Tutoriel.prototype.instance = this;

    function press_leftF(){
        if (!press_left){


            // Quand vous entendez ce son appuyez sur la touche gauche du clavier
            sound1 = new Audio(configTuto.q_v_e_c_s);
            sound1.play();

            setTimeout(function(){
                sound1 = new Audio(config.bip_4);
                sound1.play();
            }, 2500);

            setTimeout(function(){
                sound1 = new Audio(configTuto.fleche_gauche);
                sound1.play();
            }, 2500);

            setTimeout(function(){
                sound1 = new Audio(config.bip_4);
                sound1.play();
            }, 6500);

            setTimeout(press_leftF, 13000);

        } else {
            set_press_false();
            setTimeout(press_rightF, 0);
        }
    }

    function press_rightF(){
        if (!press_right){

            // Quand vous entendez ce son appuyez sur la touche droite du clavier
            sound1 = new Audio(configTuto.q_v_e_c_s);
            sound1.play();

            setTimeout(function(){
                sound1 = new Audio(config.bip_2);
                sound1.play();
            }, 2500);

            setTimeout(function(){
                sound1 = new Audio(configTuto.fleche_droite);
                sound1.play();
            }, 2500);

            setTimeout(function(){
                sound1 = new Audio(config.bip_2);
                sound1.play();
            }, 6500);

            setTimeout(press_rightF, 12000);

        } else {
            set_press_false();
            setTimeout(press_upF, 0);
        }
    }

    function press_upF(){
        if (!press_up){

            // Quand vous entendez ce son appuyez sur la touche haut du clavier
            sound1 = new Audio(configTuto.q_v_e_c_s);
            sound1.play();

            setTimeout(function(){
                sound1 = new Audio(config.bip_1);
                sound1.play();
            }, 2500);

            setTimeout(function(){
                sound1 = new Audio(configTuto.fleche_haut);
                sound1.play();
            }, 2500);

            setTimeout(function(){
                sound1 = new Audio(config.bip_1);
                sound1.play();
            }, 6500);

            setTimeout(press_upF, 12000);
        } else {
            set_press_false();
            //setTimeout(press_downF, 0);
            $(location).attr('href', "./menu-jouer.html");
        }
    }

    function press_downF(){
        if (!press_up){

            // Quand vous entendez ce son appuyez sur la touche gauche du clavier
            sound1 = new Audio(configTuto.q_v_e_c_s);
            sound1.play();

            setTimeout(function(){
                sound1 = new Audio(config.bip_3);
                sound1.play();
            }, 2500);

            setTimeout(function(){
                sound1 = new Audio(configTuto.fleche_bas);
                sound1.play();
            }, 2500);

            setTimeout(function(){
                sound1 = new Audio(config.bip_3);
                sound1.play();
            }, 6500);

            setTimeout(press_downF, 12000);

        } else {
            set_press_false();

        }
    }

    this.main = function () {
        // son : Bienvenue dans le tutoriel de argyros
        // but du jeu.

        // le tutoriel commence :

        setTimeout(press_rightF, 1000);

    };

    function key_left() {
        press_left = true;
       // sound1 = new Audio(config.bip_4);
        sound1.play();
    }

    function key_right() {
        press_right = true;
        sound1 = new Audio(config.bip_2);
        sound1.play();
    }

    function key_down() {
        sound1 = new Audio(config.bip_3);
      //  sound1.play();
        press_down = true;
    }

    function key_up() {
        sound1 = new Audio(config.bip_1);
        sound1.play();
        press_up = true;
    }

    function set_press_false() {
        press_down = false;
        press_right = false;
        press_down = false;
        press_up = false;
    }

    function cancel() {
        $(location).attr('href', "./menu-jouer.html");
    }

    $("body").keypress(function (event) {
        switch (event.keyCode) {
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
            //escape
            case 27:
                event.preventDefault();
                cancel();
                break;
        }

    });

};

var tuto = new Tutoriel();
tuto.main();
