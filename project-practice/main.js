var cardLink = $('.card-front');
var btnClose = $('.btn-Close');
var menuOpen = $('.menu-open');
var menuClose = $('.menu-close');

cardLink.click(function (e) {
    e. preventDefault();
    // menuItems.removeClass('menu-item-act')
    $(this).parent().addClass('menu-item-act');
});

btnClose.click(function (e) {
    e. preventDefault();
    // menuItems.removeClass('menu-item-act')
    $(this).parent().parent().removeClass('menu-item-act');
});

menuOpen.click(function (e) {
    e. preventDefault();
    // menuItems.removeClass('menu-item-act')
    $(this).parent().addClass('menu-item-act');
});

menuClose.click(function (e) {
    e. preventDefault();
    // menuItems.removeClass('menu-item-act')
    $(this).parent().parent().removeClass('menu-item-act');
});
