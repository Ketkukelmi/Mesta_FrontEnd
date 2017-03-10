/* Toggling post view (animation) */
var togglePostView = function () {
    $('post-view')
        .transition('fade right');
    ;
};
/* Toggling add view (animation) */
var toggleAddView = function () {
    $('add-view')
        .transition('fade right');
    ;
};
/* Toggling account view (animation) */
var showAccountView = function () {
    $('account-view')
        .modal('show')
    ;
};
