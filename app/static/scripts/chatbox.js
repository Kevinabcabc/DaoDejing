// localStorage.setItem('navID', "0");
$('.left').on('tap', function () {
    window.open('mymess.html', "_self");
});

$('.mid').text(localStorage.getItem('chatboxID'))

function scroll(dom) {

    var myScroll = new IScroll(dom, {
        bounce: true,
        freeScroll: true,
        tap: true,
        mouseWheel: true,
        probeType: 3, //1,2,3
    });
}

// scroll('slide-box');


$('.send').on('tap', function () {
    var mess = $('.write').val();
    var item = `
     <div class="messbox">
        <span class="mess">${mess}</span>
     </div>
     `
    $('.slide-box').prepend(item);
    $('.write').val("");
})