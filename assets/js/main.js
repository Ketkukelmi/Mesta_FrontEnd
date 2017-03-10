/* Save views currently opened */
var openedViews = ['sidebar-view'];
/* Toggling post view (animation) */
var togglePostView = function () {
    if(openedViews.indexOf('post-view') == -1) {
        openedViews.push('post-view');
    }
    else {
        openedViews.splice(openedViews.indexOf('post-view'));
    }
    $('post-view')
        .transition('fade right');
    ;
};
/* Toggling add view (animation) */
var toggleAddView = function () {
    if(openedViews.indexOf('add-view') == -1) {
        openedViews.push('add-view');
    }
    else {
        openedViews.splice(openedViews.indexOf('add-view'));
    }
    $('add-view')
        .transition('fade right');
    ;
};
/* Showing account view (animation) */
var showAccountView = function () {
    $('account-view')
        .modal('show')
    ;
};

var toggleSideViews = function () {
    if(openedViews.indexOf('add-view') != -1) {
        $('add-view')
            .transition('fade right');
        ;
    }
    if(openedViews.indexOf('post-view') != -1) {
        $('post-view')
            .transition('fade right');
        ;
    }
    $('sidebar-view')
        .transition('fade right');
    ;
    if($('#showHideSidebarButton').hasClass('visible')) {
        $('#showHideSidebarButton').addClass('not_shown');
        $('#showHideSidebarButton').removeClass('visible');
    }
    else {
        $('#showHideSidebarButton').addClass('visible');
        $('#showHideSidebarButton').removeClass('not_shown');
    }
};
