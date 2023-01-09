$(function() {
    let viewport_width = document.body.clientWidth;
    let viewport_height = document.body.clientHeight;
    
    let $falling_btn_wrap = $('#js-falling-btn-wrap');
    let $falling_btn_snow = $falling_btn_wrap.find('.falling-snow');
    let $falling_btn_ginkgo = $falling_btn_wrap.find('.falling-ginkgo');
    let $falling_btn_maple = $falling_btn_wrap.find('.falling-maple');
    let $falling_btn_leafs = $falling_btn_wrap.find('.falling-leafs');
    let $falling_btn_sakura = $falling_btn_wrap.find('.falling-sakura');

    let $falling_wrap = $('#js-falling-wrap');
    let falling_item_sizes = ['size-smaller', 'size-small', 'size-middle', 'size-large'];
    let leaf_patterns = ['pattern-ginkgo', 'pattern-maple'];

    let snow_count = Math.floor(viewport_width / 10);
    let leaf_count = Math.floor(viewport_width / 30);


    /* get random number */
    // 產生介於 min ~ max 的整數 (包含頭尾)
    function getRandomNumber(min, max) {
        return Math.floor(Math.random()* (max - min + 1)) + min;
    }

    /* get snow element HTML */
    function getSnowHTML() {
        return `<div class="animate-falling snow ${falling_item_sizes[getRandomNumber(0, 3)]}" 
            style="--top: ${getRandomNumber(30, viewport_height)}; 
                   --left:${getRandomNumber(0, 100)}; 
                   --down-speed: ${getRandomNumber(20, 95)}s; 
                   --path: ${getRandomNumber(20, Math.floor(viewport_width / 25))}; 
                   --path-speed: ${getRandomNumber(5, 25)}s;"></div>`;
    }

    /* get ginkgo element HTML */
    function getGinkgoHTML() {
        return `<div class="animate-falling leaf pattern-ginkgo ${falling_item_sizes[getRandomNumber(0, 3)]}" 
            style="--top: ${getRandomNumber(30, viewport_height)}; 
                   --left:${getRandomNumber(0, 100)}; 
                   --down-speed: ${getRandomNumber(20, 65)}s; 
                   --path: ${getRandomNumber(20, Math.floor(viewport_width / 25))}; 
                   --path-speed: ${getRandomNumber(5, 25)}s; 
                   --rotate:${getRandomNumber(0, 360)}deg"></div>`;
    }

    /* get maple element HTML */
    function getMapleHTML() {
        return `<div class="animate-falling leaf pattern-maple ${falling_item_sizes[getRandomNumber(0, 3)]}" 
            style="--top: ${getRandomNumber(30, viewport_height)}; 
                   --left:${getRandomNumber(0, 100)}; 
                   --down-speed: ${getRandomNumber(20, 65)}s; 
                   --path: ${getRandomNumber(20, Math.floor(viewport_width / 25))}; 
                   --path-speed: ${getRandomNumber(5, 25)}s; 
                   --rotate:${getRandomNumber(0, 360)}deg"></div>`;
    }

    /* get leafs element HTML */
    function getLeafsHTML() {
        return `<div class="animate-falling leaf ${leaf_patterns[getRandomNumber(0, 1)]} ${falling_item_sizes[getRandomNumber(0, 3)]}" 
            style="--top: ${getRandomNumber(30, viewport_height)}; 
                   --left:${getRandomNumber(0, 100)}; 
                   --down-speed: ${getRandomNumber(20, 65)}s; 
                   --path: ${getRandomNumber(20, Math.floor(viewport_width / 25))}; 
                   --path-speed: ${getRandomNumber(5, 25)}s; 
                   --rotate:${getRandomNumber(0, 360)}deg"></div>`;;
    }

    /* get sakura element HTML */
    function getSakuraHTML() {
        return `<div class="animate-falling sakura ${falling_item_sizes[getRandomNumber(0, 3)]}" 
            style="--top: ${getRandomNumber(30, viewport_height)}; 
                   --left:${getRandomNumber(0, 100)}; 
                   --down-speed: ${getRandomNumber(20, 95)}s; 
                   --path: ${getRandomNumber(20, Math.floor(viewport_width / 25))}; 
                   --path-speed: ${getRandomNumber(5, 25)}s; 
                   --rotate:${getRandomNumber(0, 360)}deg"></div>`;;
    }


    /* build falling element */
    function buildFalling(kind, count) {
        for (let i=0; i < count - 1 ; i++) {
            switch (kind) {
                case 'snow':
                    $falling_wrap.append( getSnowHTML() );
                    break;
                case 'ginkgo':
                    $falling_wrap.append( getGinkgoHTML() );
                    break;
                case 'maple':
                    $falling_wrap.append( getMapleHTML() );
                    break;
                case 'leafs':
                    $falling_wrap.append( getLeafsHTML() );
                    break;
                case 'sakura':
                    $falling_wrap.append( getSakuraHTML() );
                    break;
            }
        }
    }

    /* remove all falling item */
    function removeAllFalling() {
        $('.animate-falling').remove();
    }

    /* reset button state */
    function resetButtonState() {
        $falling_btn_wrap.find('.falling-btn').removeClass('active');
    }


    /* click - snow */
    $falling_btn_snow.on('click', function() {
        // reset button state
        resetButtonState();

        // active
        $(this).addClass('active');

        // remove all falling item
        removeAllFalling();

        // build falling item
        buildFalling('snow', snow_count);
    });

    /* click - ginkgo */
    $falling_btn_ginkgo.on('click', function() {
        // reset button state
        resetButtonState();

        // active
        $(this).addClass('active');

        // remove all falling item
        removeAllFalling();

        // build falling item
        buildFalling('ginkgo', leaf_count);
    });

    /* click - maple */
    $falling_btn_maple.on('click', function() {
        // reset button state
        resetButtonState();

        // active
        $(this).addClass('active');

        // remove all falling item
        removeAllFalling();

        // build falling item
        buildFalling('maple', leaf_count);
    });

    /* click - leafs */
    $falling_btn_leafs.on('click', function() {
        // reset button state
        resetButtonState();

        // active
        $(this).addClass('active');

        // remove all falling item
        removeAllFalling();

        // build falling item
        buildFalling('leafs', leaf_count);
    });

    /* click - sakura */
    $falling_btn_sakura.on('click', function() {
        // reset button state
        resetButtonState();

        // active
        $(this).addClass('active');

        // remove all falling item
        removeAllFalling();

        // build falling item
        buildFalling('sakura', snow_count);
    });



    /* init */
    $falling_btn_snow.click(); // default
});