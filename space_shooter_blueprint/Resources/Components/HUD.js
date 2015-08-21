'use strict';

function buildFontDescription(font, size) {
    var fd;
    fd = new Atomic.UIFontDescription();
    fd.id = font;
    fd.size = size; 
    return fd;
}
module.exports.component = function (self) {
    var node = self.node;
    var view = new Atomic.UIView();

    var layout = new Atomic.UILayout();
    layout.rect = view.rect;
    //layout.axis = Atomic.UI_AXIS_Y;
    layout.layoutPosition = Atomic.UI_LAYOUT_POSITION_GRAVITY;

    view.addChild(layout);

    //var uiStyle = Atomic.cache.getResource("XMLFile", "UI/DefaultStyle.xml");
    //view.defaultStyle = uiStyle;

    var scoreText = new Atomic.UITextField();
    scoreText.text = "Score: 0";
    scoreText.setFontDescription(buildFontDescription('Vera', 24));
    scoreText.color = [0, 1, 0, 1];
    scoreText.gravity = Atomic.UI_GRAVITY_RIGHT | Atomic.UI_GRAVITY_TOP;
    layout.addChild(scoreText);



    var titleText = new Atomic.UITextField();
    titleText.text = "Atomic Space Game";
    titleText.setFontDescription(buildFontDescription('Vera', 18));
    titleText.color = [0, 1, 0, 1];
    titleText.gravity = Atomic.UI_GRAVITY_LEFT | Atomic.UI_GRAVITY_TOP;
    layout.addChild(titleText);


    var healthText = new Atomic.UITextField();
    healthText.text = "Health: 10";
    titleText.setFontDescription(buildFontDescription('Vera', 18));
    healthText.color = [0, 1, 0, 1];
    healthText.gravity = Atomic.UI_GRAVITY_RIGHT | Atomic.UI_GRAVITY_BOTTOM;
    layout.addChild(healthText);

    var gameText = new Atomic.UITextField();
    titleText.setFontDescription(buildFontDescription('Vera', 40));
    gameText.color = [0, 1, 0, 1];
    gameText.gravity = Atomic.UI_GRAVITY_ALL;
    layout.addChild(gameText);

    if (Atomic.platform === "iOS" || Atomic.platform === "Android") {
        self.node.createJSComponent("TouchInput");
    }

    var inspectorFields = {};

    // using start to initialize the script component
    self.start = function start() {};

    self.updateScore = function (value) {
        scoreText.text = "Score: " + value;
    };

    self.updateHealth = function (value) {
        healthText.text = "Health: " + value;
    };

    self.updateGameText = function (text) {
        gameText.text = text;
    };

    self.update = function update(timeStep) {

    };
};
