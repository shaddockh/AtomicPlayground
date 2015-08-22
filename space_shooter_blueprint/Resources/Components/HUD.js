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
    layout.axis = Atomic.UI_AXIS_Y;
    layout.layoutDistribution = Atomic.UI_LAYOUT_DISTRIBUTION_AVAILABLE;
    layout.layoutDistributionSize = Atomic.UI_LAYOUT_SIZE_AVAILABLE;
    layout.layoutSpacing = 0;
    view.addChild(layout);

    var layout2 = new Atomic.UILayout();
    layout.layoutDistribution = Atomic.UI_LAYOUT_DISTRIBUTION_GRAVITY;
    layout.addChild(layout2);

    var container = new Atomic.UIContainer();
    container.gravity = Atomic.UI_GRAVITY_LEFT_RIGHT;
    layout2.addChild(container);

    var layout3 = new Atomic.UILayout();
    layout.layoutDistribution = Atomic.UI_LAYOUT_DISTRIBUTION_AVAILABLE;
    layout.layoutDistributionSize = Atomic.UI_LAYOUT_SIZE_AVAILABLE;
    container.addChild(layout3);

    var scoreText = new Atomic.UITextField();
    scoreText.text = "Score: 0";
    scoreText.setFontDescription(buildFontDescription('Vera', 24));
    scoreText.color = [0, 1, 0, 1];
    scoreText.gravity = Atomic.UI_GRAVITY_LEFT;
    scoreText.textAlign = Atomic.UI_TEXT_ALIGN_LEFT;
    scoreText.setLayoutParams((function () {
        var lp = new Atomic.UILayoutParams();
        lp.setWidth(192);
        return lp;
    }()));
    layout3.addChild(scoreText);

    var titleText = new Atomic.UITextField();
    titleText.text = "Atomic Space Game";
    titleText.setFontDescription(buildFontDescription('Vera', 24));
    titleText.color = [0, 1, 0, 1];
    titleText.gravity = Atomic.UI_GRAVITY_ALL
    layout3.addChild(titleText);

    var healthText = new Atomic.UITextField();
    healthText.text = "Health: 10";
    healthText.setFontDescription(buildFontDescription('Vera', 24));
    healthText.color = [0, 1, 0, 1];
    healthText.gravity = Atomic.UI_GRAVITY_RIGHT;
    healthText.textAlign = Atomic.UI_TEXT_ALIGN_RIGHT;
    healthText.setLayoutParams((function () {
        var lp = new Atomic.UILayoutParams();
        lp.setWidth(128);
        return lp;
    }()));
    layout3.addChild(healthText);

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
