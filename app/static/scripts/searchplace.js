// localStorage.setItem('navID', "0");
$('.left').on('tap', function () {
    window.open('findtour.html', "_self");
});

var city;

$('.search').on('tap', function () {
    city = $('.search-input').val();
    loadingNewList();
    
});



function loadingNewList() {
    $.ajax({
        url: homeNearApi,
        success: function (data) {
            //   console.log('请求成功');
            data = data.list;
            // console.log(data.length);
            var listHtml = ``;
            for (var i = 0; i < data.length; i++) {

                listHtml += `
            <div class="item">
    
            <div class="user-add">
                <div class="user-add-left">
                    <p> 终点：<span class="city">${city}</span></p>
                    <b>时间：约<span class="city">${data[i].time}</span></b>
    
                </div>
    
                <div class="user-add-right">
                    <button class="join">立即加入</button>
                </div>
            </div>
    
            <div class="content">
    
                <p class="intro">${data[i].content}</p>
    
            </div>
    
    
            <div class="nav">
    
                <div class="nav-item user-place-box"><span class="iconfont icon-weizhi"></span> <b
                        class="user-place">${data[i].userPlace}</b></div>
                <div class="nav-item  people-num-box">参与人数: <b class="people-num"> ${data[i].peopleNum}</b></div>
    
            </div>
        </div>
            `
            }
            // console.log(listHtml);

            $('.list-items').html(listHtml);
            loaded();

            $('.join').on('tap', function () {
                window.open('tourdetailsearch.html', "_self");
            });
        },
        fail: function () {
            console.log('请求失败');
        }
    });
}



function loaded(){


    var myScroll = new IScroll('.slide-box', {
        bounce: true,
        freeScroll: true,
        click: true,
        tap: true,
        mouseWheel: true,
        probeType: 3, //1,2,3
        startY: 0,
    });
    
    
    // myScroll.on('scroll', function () {
    //     console.log(myScroll);
    // });

}






