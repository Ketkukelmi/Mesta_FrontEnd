/* ------------------------------------------------------------------------------------------------------------------ */
/* View Control ------------------------------------------------------------------------------------------------------*/
/* ------------------------------------------------------------------------------------------------------------------ */

// Keeps track of views that were opened (when we hide them, but not close (on smaller screens)
var openedViews = ['sidebar-view'];
// Keep track of current hide/show button position
var button_position = "right";

var selectize;

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
/* Opening the PostView once asd*/
var openPostView = function () {
    if (openedViews.indexOf('post-view') == -1) {
        openedViews.push('post-view');
        $('post-view')
            .transition('fade right');
    }
};
/* Showing account view (animation) */
var toggleAccountView = function () {
    $('account-view')
        .modal('show')
    ;
};
/* Toggling add view (animation) */
var toggleAddView = function () {

    var scope = angular.element(document.getElementById("map")).scope();
    scope.changeCanAddMarker();

    // Remove/Add add view from/to array of opened views
    if (button_position == "right") {
        if (openedViews.indexOf('add-view') == -1) {
            openedViews.push('add-view');
        }
        else {
            openedViews.splice(openedViews.indexOf('add-view'), 1);
            clearInputFields();
        }
        // Show/Hide the view
        $('add-view').transition('fade right');

    }
    else {
        if (openedViews.indexOf('add-view') == -1) {
            openedViews.push('add-view');
        }
        toggleSideViews();
    }
};

var clearInputFields = function(){
    var scope = angular.element(document.getElementById("addForm")).scope();
    scope.latitude = 0;
    scope.longitude = 0;
    scope.name = "";
    scope.description = "";
    scope.tags = null;
    scope.categories = "";
    scope.image = null;
    document.getElementById("imgPreview").src = "http://i.the-mesta.com/0";
    document.getElementById("files").value = "";
    //selectize[0].selectize.clear();
}

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
    $('sidebar-view').transition('fade right');
    // Move the button
    moveSideHideButton();
};

/* Function for moving hide/show button on smaller screens */
var moveSideHideButton = function () {
    if ($('#showHideSidebarButton').hasClass('visible')) {
        $('#showHideSidebarButton').addClass('side_hidden');
        $('#showHideSidebarButton').removeClass('visible');
        $('#showHideSidebarButton i.left.icon').removeClass('left').addClass('right');
    }
    else {
        $('#showHideSidebarButton').addClass('visible');
        $('#showHideSidebarButton').removeClass('side_hidden');
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
