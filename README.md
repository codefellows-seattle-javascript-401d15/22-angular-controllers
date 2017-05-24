![cf](https://i.imgur.com/7v5ASc8.png) Angular Controllers (return of the cowsay)
======

## Description
  * add a form and submit button that will be used to save the current state of the cow's text
    * use the `ng-submit` directive to control the form's on-submit functionality
    * add a button that uses the `ng-click` directive to populate a second `pre` tag with the current `pre` tag state
  * add a button that uses the `ng-click` directive to create an **undo** effect
    * whenever this button is clicked, it should reset the second `pre` tag with the content it last showed
  * add a select menu that uses the `ng-repeat` directive
    * this should be used to populate the select menu with the names of all `cowsay` files
      * hint: `cowsay.list((err, list) => {})`
  * when a `cowsay` filename is selected from the menu, have the first `pre` tag use the selected cowfile
  * use the `ng-show` directive to show the second `pre` tag **only** if the history state is not empty
  * create your own styleguide for the application, using SCSS.
    * make good use of css variables for all of your base (repeatable) styles
    * include at least one mix-in
