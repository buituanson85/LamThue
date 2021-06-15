//    Product  column 4 activation
$(".product_column4").on("changed.owl.carousel initialized.owl.carousel", function (event){
    $(event.target)
        .find(".owl-item")
        .removeClass("last")
        .eq(event.item.index + event.page.size - 1)
        .addClass("last");
}).owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 5000,
    items : 6,
    dots: false,
    navText : [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items : 1,
        },
        576: {
            items : 1,
        },
        640: {
            items : 2,
        },
        768: {
            items : 3,
        },
        992 : {
            items : 6,
        },
    },
});



//    activation of blog section
$(".blog_column3").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    autoplayTimeout: 5000,
    items : 4,
    dots: true,
    responsiveClass: true,
    responsive: {
        0: {
            items : 1,
        },
        768: {
            items : 1,
        },
        992 : {
            items : 2,
        },
        1200:{
            items : 3,
        }
    },
});
