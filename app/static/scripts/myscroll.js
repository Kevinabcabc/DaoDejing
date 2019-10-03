
function MyFristScroll(dom,options) {

    var topHeight = $('header').height();
    console.log(topHeight);
    

    var myScroll = new IScroll(dom, {
        bounce: true,
        freeScroll: true,
        tap: true,
        mouseWheel: true,
        probeType: 3, //1,2,3
        startY: -topHeight,
    });

    myScroll.on('scroll', function () {
        if (myScroll.y >= 0) {
            document.querySelector('.loading-top strong').innerText = '释放刷新';
        } else{
            document.querySelector('.loading-top strong').innerText = '下拉刷新';
        } 
    });
    myScroll.on('scrollEnd', function () {
        if (myScroll.y >= 0) {
            document.querySelector('.loading-top strong').innerText = '刷新ing';
            options.loadmoreData();
            myScroll.scrollTo(0, -topHeight, 300);
            myScroll.refresh();
        } else if (myScroll.y > -topHeight && myScroll.y < 0) {
            myScroll.scrollTo(0, -topHeight, 300);
        } 
    });
}