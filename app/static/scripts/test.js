var btn1 = document.querySelector('.btn1');
btn1.onclick = function (){
    $.ajax({
        url: homeBannerApi,
        success: function(data){
          console.log('请求成功');
          console.log(data);
        }, 
        fail: function(){
          console.log('请求失败');
        }
      });
};