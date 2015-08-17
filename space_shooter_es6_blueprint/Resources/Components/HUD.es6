'use strict';

module.exports.component = function (self) {
    var node = self.node;
    var root = new Atomic.UIView();

    var layout = new Atomic.UILayout();
    layout.rect = root.rect;
    layout.axis = Atomic.UI_AXIS_Y;
    layout.layoutPosition = Atomic.UI_LAYOUT_POSITION_GRAVITY;

    //var uiStyle = Atomic.cache.getResource("XMLFile", "UI/DefaultStyle.xml");
    //root.defaultStyle = uiStyle;

    var scoreText = new Atomic.UITextField();

    scoreText.text = "Score: 0";
    //var font = Atomic.cache.getResource("Font", "Fonts/Anonymous Pro.ttf");

    var fd;
    // FIXME
    fd = new Atomic.UIFontDescription();
    fd.id = "Vera";
    fd.size = 24;
    scoreText.setFontDescription(fd);
    scoreText.color = [0, 1, 0, 1];

    scoreText.gravity = Atomic.GRAVITY_RIGHT;
    //scoreText.horizontalAlignment = Atomic.HA_RIGHT;
    //scoreText.verticalAlignment = Atomic.VA_TOP;
    root.addChild(scoreText);

    var titleText = new Atomic.UITextField();

    titleText.text = "Atomic Space Game";

    // FIXME
    //titleText.setFont(font, 18);
    titleText.color = [0, 1, 0, 1];

    titleText.horizontalAlignment = Atomic.HA_LEFT;
    titleText.verticalAlignment = Atomic.VA_TOP;
    root.addChild(titleText);

    var healthText = new Atomic.UITextField();

    healthText.text = "Health: 10";

    // FIXME
    //healthText.setFont(font, 18);
    healthText.color = [0, 1, 0, 1];

    healthText.horizontalAlignment = Atomic.HA_RIGHT;
    healthText.verticalAlignment = Atomic.VA_BOTTOM;
    root.addChild(healthText);

    var gameText = new Atomic.UITextField();

    // FIXME
    //gameText.setFont(font, 40);
    gameText.color = [0, 1, 0, 1];

    gameText.horizontalAlignment = Atomic.HA_CENTER;
    gameText.verticalAlignment = Atomic.VA_CENTER;
    root.addChild(gameText);

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
