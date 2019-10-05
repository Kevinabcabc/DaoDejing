// localStorage.setItem('navID', "0");
$('.left').on('tap', function () {
    window.open('mine.html', "_self");
});

function scroll(dom){

    var myScroll = new IScroll(dom, {
        bounce: true,
        freeScroll: true,
        tap: true,
        mouseWheel: true,
        probeType: 3, //1,2,3
    });
}

loadingNewList();


function loadingNewList() {
    $.ajax({
        url: homeFollowerApi,
        success: function (data) {
            //   console.log('请求成功');
            data = data.list;
            // console.log(data.length);
            var listHtml = ``;
            for (var i = 0; i < data.length; i++) {

                listHtml += `
                <div class="item">
                <div class="left">
                    <img src="${data[i].picUrl}"
                        alt="">
                   <p>${data[i].username}</p>
                </div>

                <div class="right">
                    <span class="iconfont icon-xiaoxi1"></span>
                </div>
            </div>
            `
            }
            // console.log(listHtml);

            $('.list-items').html(listHtml);

            scroll('.slide-box');
            $('.join').on('tap', function () {
                window.open('tourdetailtop100.html', "_self");
                console.log(1);

            });

        },
        fail: function () {
            console.log('请求失败');
        }
    });
}