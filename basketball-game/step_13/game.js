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
    var basketballGarbageAligned = false;
    var interval = 0;
/* write functions */
    // find coordinates of garbage can
    function hoopCoordinates() {
        var el = hoop.elem;
        var width = el.offsetWidth;
        var height = el.offsetHeight;
        var x1 = el.offsetLeft;
        var y1 = el.offsetTop;
        // assign values to hoop object keys
        hoop.x1 = x1;
        hoop.x2 = x1 + width;
        hoop.y1 = y1;
        hoop.y2 = y1 + height;
    }
    // find x coordinates of basketball
    function basketballXCoordinates() {
        var el = ball.elem;
        var width = el.offsetWidth;
        var x1 = el.offsetLeft;
        //assign values to basketball object keys
        ball.x1 = x1;
        ball.x2 = x1 + width;
    }
    // find y coordinates of basketball
    function basketballYCoordinates() {
        var el = ball.elem;
        var height = el.offsetHeight;
        var y1 = el.offsetTop;
        //assign values to basketball object keys
        ball.y1 = y1;
        ball.y2 = y1 + height;
    }
    // is the basketball aligned with the hoop?
    function checkAlignment() {
        return (ball.x1 > hoop.x1 && ball.x2 < hoop.x2);
    }
    // check if basketball has reached garbage can end game accordingly and return true
    function checkforDone() {}
    // move basketball to the right over time
    function moveRight() {
        ball.left += 10;
        ball.elem.style.left = ball.left + "px";
    }
    // check if basketball has reached garbage can and either move basketball or end game
    function moveDown() {
        ball.top += 10;
        ball.elem.style.top = ball.top + "px";
    }
    // reset #basketball to 0,0
    function resetbasketball(left, top) {}
    // set up clicks and keypresses
    function eventBindings() {
        // playButton hides status/start button and starts right movement
        playButton.addEventListener('click', function () {
            // hide status/button
            document.getElementsByClassName('show')[0].className = "hide";
            // start right movement
            interval = setInterval(function () {
                moveRight();
            }, 50);
        });
        // space bar stops horizontal/starts downward movement and checks for alignment
        document.addEventListener('keydown', function (e) {
            // check if space bar pressed
            if (e.keyCode === 32) {
                // stop right movement
                clearInterval(interval);
                interval = setInterval(function () {
                    moveDown();
                }, 50);
            }
        });
    }
    /* initialize game */
    function initialize() {
        eventBindings();
    }
    // initialize on load
    initialize();
}());