$(function () {
    // Initialize Dropdown(s)
    $('select.dropdown').dropdown();
    // Initialize Tag Field(s)
    // Does not work without timeout - workaround (probably timing issues)
    setTimeout(function(){
        $('#input-tags').selectize({
            delimiter: ',',
            persist: false,
            create: function(input) {
                return {
                    value: input,
                    text: input
                }
            }
        });
    }, 1000);
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
});
