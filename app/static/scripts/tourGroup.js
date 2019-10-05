// localStorage.setItem('navID', "0");







$('.left').on('tap', function () {
    window.open('findtour.html', "_self");
});
loadingNewList();

function loadingNewList() {
    $.ajax({
        url: homeDetailApi,
        success: function (data) {
            //   console.log('请求成功');
            data = data.list;
            // console.log(data.length);
            var listHtml = ``;
            for (var i = 0; i < data.length; i++) {

                listHtml += `               
                <p><span class="iconfont icon-jingdian"></span> <span class="endCityName">${data[i].endPlace}</span></p>
                <p><span class="iconfont icon-weizhi"></span> <span class="endCityName">${data[i].userPlace}</span></p>
                <p><span class="iconfont icon-shijian5 "></span> <span class="time">${data[i].time}</span></p>
                <p><span class="iconfont icon-gerenzhongxin2"></span> <span class="time">${data[i].funderName}</span></p>
                <p class="idea"><span class="iconfont icon--idea"></span> <span class="time">${data[i].idea}</span></p>
                <p class="bottom-border" ><span class="iconfont icon-renshutongji "></span> <span class="time">${data[i].peopleNum}人</span></p>
                <p class="join-now-box"><span class="join-now">进入群聊</span></p>                   
            `
            }

            $('.detail').html(listHtml);

            setMap(data[0].endPlace);
            loaded();
            $('.join').on('tap', function () {
                window.open('settour.html', "_self");
            });
        },
        fail: function () {
            console.log('请求失败');
        }
    });
}

function setMap(endPlace){
    
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398, 39.897445);
    map.centerAndZoom(point, 16);
    map.centerAndZoom(endPlace, 13); // 用城市名设置地图中心点
}

function loaded() {

    var myScroll = new IScroll('.slide-box', {
        bounce: true,
        freeScroll: true,
        click: true,
        tap: true,
        scrollY: true,
        mouseWheel: true,
        probeType: 3, //1,2,3
        startY: 0,
    });


    myScroll.on('scroll', function () {
        console.log(myScroll.y);
    });
}
