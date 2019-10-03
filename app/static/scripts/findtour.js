
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 100,
    loop:true,
    autoplay : 5000,
});


$('.send-idea').on('tap',function(){
    window.open('sendidea.html',"_self");
});

$('.top100').on('tap',function(){
    window.open('top100.html',"_self");
});

$('.search-near').on('tap',function(){
    window.open('searchnear.html',"_self");
});
$('.search-endplace').on('tap',function(){
    window.open('searchplace.html',"_self");
});



