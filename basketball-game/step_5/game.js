(function () {
    'use strict';
/* declare variables */
    var playButton = document.getElementById("play");
    var hoop = {
        elem: document.getElementById("hoop"),
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0
    };
    var ball = {
        elem: document.getElementById("basketball"),
        left: 0,
        top: 0,
        x1: 0, // holds x1 point after spacebar pressed...
        x2: 0,
        y1: 0,
        y2: 0
    };
    var statusElem = document.getElementById("status");
    var basketballHoopAligned = false;
    var interval = 0;
/* write functions */
    // find coordinates of basketball hoop
    function hoopCoordinates() {}
    // find x coordinates of basketball
    function basketballXCoordinates() {}
    // find y coordinates of basketball
    function basketballYCoordinates() {}
    // is the basketball aligned with the hoop?
    function checkAlignment() {}
    // check if basketball has reached basketball hoop end game accordingly and return true
    function checkforDone() {}
    // move basketball to the right over time
    function moveRight() {}
    // check if basketball has reached basketball hoop and either move basketball or end game
    function moveDown() {}
    // reset #basketball to 0,0
    function resetbasketball(left, top) {}
    // set up clicks and keypresses
    function eventBindings() {}
    // set up initialization
/* initialize game */
}());