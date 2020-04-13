var cardLink = $('.card-front');
var btnClose = $('.btn-Close');


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