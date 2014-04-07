var Tutoriel = function () {

    var press_right = false,
        press_left = false,
        press_up = false,
        press_down = false;

    var sound1;

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
            }, 3500);

            setTimeout(function(){
                sound1 = new Audio(config.bip_4);
                sound1.play();
            }, 8500);

            setTimeout(press_leftF, 15000);

        } else {
            set_press_false();
            setTimeout(press_rightF, 2000);
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
            }, 3500);

            setTimeout(function(){
                sound1 = new Audio(config.bip_2);
                sound1.play();
            }, 8500);

            setTimeout(press_rightF, 15000);

        } else {
            set_press_false();
            setTimeout(press_upF, 2000);
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
            }, 3500);

            setTimeout(function(){
                sound1 = new Audio(config.bip_1);
                sound1.play();
            }, 8500);

            setTimeout(press_upF, 15000);
        } else {
            set_press_false();
            setTimeout(press_downF, 2000);
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
            }, 3500);

            setTimeout(function(){
                sound1 = new Audio(config.bip_3);
                sound1.play();
            }, 8500);

            setTimeout(press_downF, 15000);

        } else {
            set_press_false();
            
        }
    }

    this.main = function () {
        // son : Bienvenue dans le tutoriel de argyros
        // but du jeu.

        // le tutoriel commence :

        setTimeout(press_leftF, 1000);

    }

    function key_left() {
        press_left = true;
    }

    function key_right() {
        press_right = true;
    }

    function key_down() {
        press_up = true;
    }

    function key_up() {
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
            //F1
            case 112:
                help();
                break;
            //F2è
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

};

var tuto = new Tutoriel();
tuto.main();
