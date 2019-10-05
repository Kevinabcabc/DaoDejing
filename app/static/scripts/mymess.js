// localStorage.setItem('navID', "0");

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
        url: homeMymessApi,
        success: function (data) {
            //   console.log('请求成功');
            data = data.list;
            // console.log(data.length);
            var listHtml = ``;
            for (var i = 0; i < data.length; i++) {

                listHtml += `
            <div class="item">

                <div class="userPic">
                    <img src="${data[i].imgUrl}" alt="">
                </div>
                <div class="userMess">
                    <p class="tourInfo"><span class="city">${data[i].endPlace}</span>&nbsp;&nbsp; <span class="endtime">${data[i].date}</span>  </p>
                    <p class="time">${data[i].seconds}秒前</p>
                    <p class="sentence"><span class="user">${data[i].userName}：</span>${data[i].sentence}</p>
                </div>
            </div>
            `
            }
            // console.log(listHtml);

            $('.slide-box').html(listHtml);

            scroll('.content');
            $('.item').on('tap', function () {
                // console.log($(this).find('.tourInfo').text());
                
                localStorage.setItem('chatboxID',$(this).find('.tourInfo').text());
                window.open('chatbox.html', "_self");

            });

        },
        fail: function () {
            console.log('请求失败');
        }
    });
}