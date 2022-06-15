/*
 * This file is part of the YesWiki Extension replaceexportcsv.
 *
 * Authors : see README.md file that was distributed with this source code.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

$(document).ready(function () {
    function clickbuttons(reminder){
        let buttons = $('.buttons-csv.buttons-html5');
        if (buttons.length == 0 && reminder > 0){
            setTimeout(function() {
                clickbuttons(reminder -1);
            }, 600);
        } else {
            $(buttons).click();
        }
    }
    setTimeout(function() {
        clickbuttons(10);
    }, 600);
});