$(document).ready(function() {  
    // Color nav
    colorNavigation();

    $('#details-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var frameTitle = button.data('title');
        var variantTitle = button.data('variant');
        var imagePath = button.data('imgpath');
        var frameDesc = button.data('description');
        var varDesc = button.data('vardesc');
        var modal = $(this);
        $('#modal-frame-title').text(frameTitle);
        $('#modal-variant-title').text(variantTitle);
        $('#modal-variant-image').attr("src", imagePath);
        $('#modal-frame-description').text(frameDesc);
        $('#modal-variant-description').text(varDesc);
    });
});

// Scrolling
$(window).scroll(function() {
    colorNavigation();

});



function colorNavigation() {
    var windowTop = $(window).scrollTop() + 52; // 50 is nav height + border
    if (isOnOffWhite(windowTop)) {
        $('#main-navigation').css('background-color','#fefefe');
    } else {
        $('#main-navigation').css('background-color','#e8e8e8');
    }      
}

function isOnOffWhite(x) {
    var isOnRow = false;
    $('.off-white').each(function() {
        var top = $(this).offset().top;
        var bottom = $(this).height() + top;
        if (x > top && x < bottom) {
            isOnRow = true;
            return false;
        }
    });
    return isOnRow;
}