'use strict';

var game = Atomic.game;
var node = self.node;
var ui = game.ui;
var root = ui.getRoot();

var uiStyle = game.cache.getResource("XMLFile", "UI/DefaultStyle.xml");
root.defaultStyle = uiStyle;

var scoreText = new Atomic.Text();

scoreText.text = "Score: 0";
var font = game.cache.getResource("Font", "Fonts/Anonymous Pro.ttf");

scoreText.setFont(font, 24);
scoreText.color = [0, 1, 0, 1];

scoreText.horizontalAlignment = Atomic.HA_RIGHT;
scoreText.verticalAlignment = Atomic.VA_TOP;
root.addChild(scoreText);

var titleText = new Atomic.Text();

titleText.text = "Atomic Space Game";

titleText.setFont(font, 18);
titleText.color = [0, 1, 0, 1];

titleText.horizontalAlignment = Atomic.HA_LEFT;
titleText.verticalAlignment = Atomic.VA_TOP;
root.addChild(titleText);

var healthText = new Atomic.Text();

healthText.text = "Health: 10";

healthText.setFont(font, 18);
healthText.color = [0, 1, 0, 1];

healthText.horizontalAlignment = Atomic.HA_RIGHT;
healthText.verticalAlignment = Atomic.VA_BOTTOM;
root.addChild(healthText);

var gameText = new Atomic.Text();

gameText.setFont(font, 40);
gameText.color = [0, 1, 0, 1];

gameText.horizontalAlignment = Atomic.HA_CENTER;
gameText.verticalAlignment = Atomic.VA_CENTER;
root.addChild(gameText);

if (Atomic.platform === "iOS" || Atomic.platform === "Android") {
    self.node.createJSComponent("TouchInput");
}

var defaultBlueprint = {};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function() {
}());

// using start to initialize the script component
function start() {
}

self.updateScore = function (value) {
    scoreText.text = "Score: " + value;
};

self.updateHealth = function (value) {
    healthText.text = "Health: " + value;
};

self.updateGameText = function (text) {
    gameText.text = text;
};


function update(timeStep) {

}
