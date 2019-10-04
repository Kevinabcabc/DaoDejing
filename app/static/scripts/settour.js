
loadingNewList();
function loadingNewList() {
    $.ajax({
        url: homeAlreadyApi,
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
                        <p>终点：<span class="city">${data[i].endPlace}</span></p>
                        <b>时间：约<span class="city">${data[i].time}</span></b>

                    </div>

                    <div class="user-add-right">
                        <span class="iconfont icon-xiaoxi4" ></span>
                        <button class="join">查看详情</button>
                    </div>
                </div>

                <div class="tour-info">
                    <p>发起人：<span class="tour-founder">${data[i].funderName}</span></p>
                    <span class="iconfont icon-tianjiajiaose">关注</span>

                </div>


                <div class="nav">

                    <div class="nav-item user-place-box"><span class="iconfont icon-weizhi"></span> <b
                            class="user-place">${data[i].userPlace}</b></div>
                    <div class="nav-item  people-num-box">参与人数: <b class="people-num">${data[i].peopleNum}</b></div>

                </div>

            </div>
           `
            }
            listHtml +=`
            <div class="add-new-tour">
                <span class="iconfont icon-add"></span>
            </div>
            `

            // console.log(listHtml);

            $('.list-items').html(listHtml);
            
            loaded();

            $('.join').on('tap', function () {
                window.open('tourGroup.html', "_self");

            });
            $('.add-new-tour').on('tap', function () {
                window.open('creatNewTour.html', "_self");
                // console.log(1);

            });

        },
        fail: function () {
            console.log('请求失败');
        }
    });
}


function loaded(){


    var myScroll = new IScroll('.content', {
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

