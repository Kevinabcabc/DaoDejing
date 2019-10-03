// console.log(localStorage.getItem('navID'));

// console.log($('.footer a')[localStorage.getItem('navID')]);

// // $('.footer a')[localStorage.getItem('navID')];


// $('.footer a').on('tap', function () {
//     console.log($(this).attr('data-id'));
//     $('.footer a')[localStorage.getItem('navID')].removeClass('active');
//     localStorage.setItem('navID', $(this).attr('data-id'));
//     console.log($(this).attr('data-id'));

//     $(this).addClass('active');

// })



$('.footer').on('touchstart','a.a',function(e){
    e.preventDefault(); // 解决a标签长按出现菜单问题
    console.log(1);

});
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
