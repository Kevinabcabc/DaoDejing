$('.contractUs').on('tap', function () {
    window.open('sendidea.html', "_self");
});

$('.editUserName').on('tap', function () {
    window.open('setUserName.html', "_self");
});

$('.tourBefore').on('tap', function () {
    window.open('tourBefore.html', "_self");
});

$('.follower').on('tap', function () {
    window.open('follower.html', "_self");
});

$('.following').on('tap', function () {
    window.open('following.html', "_self");
});

if (navigator.userAgent.match(/mobile/i)) {
    var name = localStorage.getItem('username');
    $('.user').text(name);
}