// Init angular app
let app = angular.module('emotions', []);

/**
 * Base angular controller for the emotions game
 */
app.controller('EmotionsBodyController', function(){
    
    // Store the state inside the game object
    let ctrl = this;
    ctrl.game = {};

    // Hi
    ctrl.game.hello = "HelloWorld"

} )