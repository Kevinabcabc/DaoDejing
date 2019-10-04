$('.contractUs').on('tap', function () {
    window.open('sendidea.html', "_self");
});

$('.editUserName').on('tap', function () {
    window.open('setUserName.html', "_self");
});


if (navigator.userAgent.match(/mobile/i)) {
    console.log(1);
    
}else{
    var name = localStorage.getItem('username');
    $('.user').text(name);

}