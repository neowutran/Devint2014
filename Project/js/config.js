/**
 * Created by lb000790 on 24/03/14.
 */


var configMenu = {
    "menu_aide1"       : "sounds/menu/menu-aide1.ogg",
    "menu_jouer1"      : "sounds/menu/menu-jouer1.ogg",
    "menu_preferences1": "sounds/menu/menu-preferences1.ogg",
    "menu_scores1"     : "sounds/menu/menu-scores1.ogg",
    "menu_regles1"     : "sounds/menu/menu-regles1.ogg",
    "menu_facile1"     : "sounds/menu/menu-facile1.ogg",
    "menu_normal1"     : "sounds/menu/menu-normal1.ogg",
    "menu_difficile1"  : "sounds/menu/menu-difficile1.ogg",
    "menu_retour1"     : "sounds/menu/menu-retour1.ogg",
    "menu_tutoriel1"   : "sounds/menu/menu-tutoriel1.ogg"
};

var configTuto = {
    "q_v_e_c_s"         : "sounds/tuto/tuto_quand_vous_entendrez_ce_son.ogg",
    "fleche_droite"         : "sounds/tuto/tuto_fleche_droite.ogg",
    "fleche_gauche"         : "sounds/tuto/tuto_fleche_gauche.ogg",
    "fleche_haut"         : "sounds/tuto/tuto_fleche_haut.ogg",
    "fleche_bas"         : "sounds/tuto/tuto_fleche_bas.ogg"
};

var config = {
    "frame_delay_between_wrong_input": 70,
    "max_pv"                         : 8,
    "bip_1"                          : "sounds/jump.wav",
    "bip_2"                          : "sounds/right.wav",
    "bip_3"                          : "sounds/down.wav",
    "bip_4"                          : "sounds/left.wav",
    "fanfare"                        : "sounds/crwin.ogg",
    "damage": "sounds/damage.ogg",
    "explosion": "sounds/explosion.ogg",
    "pv_lost": 50,
    "score": "Votre score est de %d points",
    "cooldown": 60
};
Object.freeze(config);
Object.freeze(configMenu);
