# Mesta Web Application (Front-End)
## Build Automation
Mesta Web Application is built with Gulp.

See __gulpfile.js__ in the root folder to review/change build configuration.
The result of the built is located in the *out* folder.

##Folder Structure

```
index.html
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js // initialize the application
----- app.routes.js // routes for application / switching between views
```
