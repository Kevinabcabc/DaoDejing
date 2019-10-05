// localStorage.setItem('navID', "0");
$('.left').on('tap', function () {
    window.open('findtour.html', "_self");
});



loadingNewList();


function loadingNewList() {
    $.ajax({
        url: homeBannerApi,
        success: function (data) {
            //   console.log('请求成功');
            data = data.list;
            // console.log(data.length);
            var listHtml = `
            <div class="loading-top">
                <strong>下拉刷新</strong>
            </div>
            `;
            for (var i = 0; i < data.length; i++) {

                listHtml += `
            <div class="item">
    
            <div class="user-add">
                <div class="user-add-left">
                    <p> <span class = "list-id">${data[i].id} </span> 终点：<span class="city">${data[i].endPlace}</span></p>
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
                <div class="nav-item  people-num-box">参与人数: <b class="people-num"> ${400- data[i].peopleNum}</b></div>
    
            </div>
    
    
        </div>
            `
            }
            // console.log(listHtml);

            $('.list-items').html(listHtml);
            MyFristScroll('.slide-box', {
                loadmoreData: loadingNewList,
            });

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