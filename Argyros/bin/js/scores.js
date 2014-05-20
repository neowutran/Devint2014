/**
 * Created by gr100287 on 12/05/14.
 */
/*jslint browser: true*/
/*global $, jQuery, alert*/

/* classe menu */
var Scores = function () {
    "use strict";

    /* singleton */
    if (Scores.prototype.instance) {
        return Scores.prototype.instance;
    }
    Scores.prototype.instance = this;


    $("body").keypress(function (event) {
        switch (event.keyCode) {
            //escape
            case 27:
                event.preventDefault();
                cancel();
                break;
        }

    });


    function cancel() {
        console.log("cancel");
        $(location).attr('href', "./index.html");

    }

};

var scores = new Scores();

