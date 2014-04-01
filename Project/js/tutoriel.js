var Tutoriel = function () {

    var press_right = false,
        press_left = false,
        press_up = false,
        press_down = false;

    //Ceci est un singleton
    if (Tutoriel.prototype.instance) {
        return Tutoriel.prototype.instance;
    }
    Tutoriel.prototype.instance = this;

    this.main = function () {
        // son : Bienvenue dans le tutoriel de argyros
        // but du jeu.

        // le tutoriel commence :

        while (!press_left) {
            // Quand vous entendez ce son appuyez sur la touche haut du clavier
            sleep(1000);
            sound1 = new Audio(config.bip_4);
            sound1.play();
            sleep(1000);
            // appuyez dessus
            sleep(5000);
        }

        set_press_false();
        while (!press_right) {
            // Quand vous entendez ce son appuyez sur la touche haut du clavier
            sleep(1000);
            sound1 = new Audio(config.bip_2);
            sound1.play();
            sleep(1000);
            // appuyez dessus
            sleep(5000);
        }

        set_press_false();
        while (!press_up) {
            // Quand vous entendez ce son appuyez sur la touche haut du clavier
            sleep(1000);
            sound1 = new Audio(config.bip_1);
            sound1.play();
            sleep(1000);
            // appuyez dessus
            sleep(5000);
        }

        set_press_false();
        while (!press_down) {
            // Quand vous entendez ce son appuyez sur la touche haut du clavier
            sleep(1000);
            sound1 = new Audio(config.bip_3);
            sound1.play();
            sleep(1000);
            // appuyez dessus
            sleep(5000);
        }

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
