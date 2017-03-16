// Keeps track of views that were opened (when we hide them, but not close (on smaller screens)
var openedViews = ['sidebar-view'];
// Keep track of current hide/show button position
var button_position = "right";
/* Toggling post view (animation) */
var togglePostView = function () {
    // Remove/Add post view from/to array of opened views
    if (openedViews.indexOf('post-view') == -1) {
        openedViews.push('post-view');
    }
    else {
        openedViews.splice(openedViews.indexOf('post-view'), 1);
    }
    $('post-view')
        .transition('fade right');
};
/* Toggling add view (animation) */
var toggleAddView = function () {
    // Remove/Add add view from/to array of opened views
    if (button_position == "right") {
        if (openedViews.indexOf('add-view') == -1) {
            openedViews.push('add-view');
        }
        else {
            openedViews.splice(openedViews.indexOf('add-view'), 1);
        }
    }
    else {
        // Move the button
        moveSideHideButton();
        if (openedViews.indexOf('add-view') == -1) {
            openedViews.push('add-view');
        }
    }
    // Show/Hide the view
    $('add-view')
        .transition('fade right');
};

var toggleSideViews = function () {
    // Show/hide the views
    if (openedViews.indexOf('add-view') != -1) {
        $('add-view')
            .transition('fade right');
    }
    if (openedViews.indexOf('post-view') != -1) {
        $('post-view')
            .transition('fade right');
    }
    $('sidebar-view')
        .transition('fade right');
    // Move the button
    moveSideHideButton();
};
/* Function for moving hide/show button on smaller screens */
var moveSideHideButton = function () {
    if ($('#showHideSidebarButton').hasClass('visible')) {
        $('#showHideSidebarButton').addClass('not_shown');
        $('#showHideSidebarButton').removeClass('visible');
        $('#showHideSidebarButton i.left.icon').removeClass('left').addClass('right');
    }
    else {
        $('#showHideSidebarButton').addClass('visible');
        $('#showHideSidebarButton').removeClass('not_shown');
        $('#showHideSidebarButton i.right.icon').removeClass('right').addClass('left');
    }
    // Keep track of current button position - change the record
    switch (button_position) {
        case "right":
            button_position = "left";
            break;
        case "left":
            button_position = "right";
            break;
    }
};

$(function () {
    //Initialize Dropdown(s)
    $('select.dropdown').dropdown();
});

/* Showing account view (animation) */
var showAccountView = function () {
    $('account-view')
        .modal('show')
    ;
};
