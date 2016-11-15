(function($) {
   
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    $(document).on('scroll', function (e) {
    $('.navbar').css('opacity', ($(document).scrollTop() / 500));
});

    

   


})(jQuery); 
