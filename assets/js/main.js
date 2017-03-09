/* Toggling post view (animation) */
var togglePostView = function () {
    $('post-view')
        .transition('fade right');
    ;
};
/*  */
var showLogin = function () {
    $('.ui.modal')
        .modal('show')
    ;
};
