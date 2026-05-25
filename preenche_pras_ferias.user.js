// ==UserScript==
// @name         preenche_pras_ferias
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://sigeduca.seduc.mt.gov.br/grh/ttgrhprocessomovimentacao2.aspx?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gov.br
// @grant        none
// @updateURL    https://github.com/lksoumon/preenche_ferias/raw/refs/heads/main/preenche_pras_ferias.user.js
// @downloadURL  https://github.com/lksoumon/preenche_ferias/raw/refs/heads/main/preenche_pras_ferias.user.js
// ==/UserScript==

(function() {
    'use strict';

     // define a handler
    function doc_keyUp(e) {
        //alert(e.code);
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
        //if (e.ctrlKey && e.code === 'ArrowDown') {
        if (e.code === 'KeyF' && e.shiftKey) {
            // call your function to do the thing
            //document.getElementsByTagName('button')[8].click();
            document.getElementById("GRHPRCNUMERO").value = "SEDUC-OFC-2025/00061";
            document.getElementById("GRHPRCOBS").value = "REGISTRO DE USUFRUTO DE FÉRIAS COLETIVAS 15(QUINZE) DIAS CONFORME   PORTARIA Nº 951/2025/GS/SEDUC/MT";
            document.getElementById("GRHPRCDTAINI").value = "06/07/2026";
        }
        if (e.code === 'KeyS') {
            // call your function to do the thing



        }
    }
    // register the handler
    document.addEventListener('keyup', doc_keyUp, false);
})();
