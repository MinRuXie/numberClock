$(function() {
    let viewport_width = document.body.clientWidth;
    let viewport_height = document.body.clientHeight;
    
    let $snow_wrap = $('#js-snow-wrap');
    let snow_sizes = ['size-smaller', 'size-small', 'size-middle', 'size-large'];

    let count = Math.floor(viewport_width / 10);

    
    /* get random number */
    function getRandomNumber(min, max) {
        return Math.floor(Math.random()* (max - min + 1)) + min;
    }

    /* get snow element HTML */
    function getSnowHTML() {
        return `<div class="snow ${snow_sizes[getRandomNumber(0, 3)]}" style="--top: ${getRandomNumber(30, viewport_height)}; --left:${getRandomNumber(0, 100)}; --down-speed: ${getRandomNumber(20, 95)}s; --path: ${getRandomNumber(20, 50)}; --path-speed: ${getRandomNumber(5, 25)}s;"></div>`;
    }

    /* build snow element */
    function buildSnow(count) {
        for (let i=0; i < count - 1 ; i++) {
            $snow_wrap.append( getSnowHTML() );
        }
    }


    /* init */

    // build snow element
    buildSnow(count);
});