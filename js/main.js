
let weeks =  ['日', '一', '二', '三', '四', '五', '六'];


function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}



function getNowTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let week_index = now.getDay();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let $dashboard = $('.js-dashboard');
    let $clock_wrap = $dashboard.find('.clock-wrap');
    let $date_wrap = $dashboard.find('.date-wrap');
    let $hour_wrap = $clock_wrap.find('.hour-wrap');
    let $minutes_wrap = $clock_wrap.find('.minutes-wrap');
    let $seconds_wrap = $clock_wrap.find('.seconds-wrap');

    $hour_wrap.text(formatNumber(hour));
    $minutes_wrap.text(formatNumber(minutes));
    $seconds_wrap.text(formatNumber(seconds));
    $date_wrap.text(`週${weeks[week_index]}, ${year}年${formatNumber(month)}月${formatNumber(date)}日`);


}

setInterval(getNowTime);



$(function() {
    

});



