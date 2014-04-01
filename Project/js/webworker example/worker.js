setTimeout(function () {
//le setTimeout ne sert qu'à permettre
//de bien voir les premiers messages

    postMessage("Lancement");

    var refresh = 0;

    while (true) {

        // wait 1/40 sec
        sleep(25);

        postMessage("Nb refresh : " + refresh);
        refresh = refresh + 1;
    }

}, 1000);

function sleep(milliseconds) {
    var start = new Date().getTime();
    while (true) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
