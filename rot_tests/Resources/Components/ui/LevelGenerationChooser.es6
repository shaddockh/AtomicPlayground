var game = Atomic.game;
var ui = game.ui;
var root = ui.getRoot();

import * as blueprintLib from 'blueprintLib';

var buttonDef = {
    btn1: {
        text: 'Digger',
        builderBlueprint: 'levelGeneratorDigger'
    },
    btn2: {
        text: 'Maze',
        builderBlueprint: 'levelGeneratorMaze'
    }
};

var dialog;
var generatorNode;

build();

function build() {
    var uiStyle = game.cache.getResource("XMLFile", "UI/DefaultStyle.xml");
    root.defaultStyle = uiStyle;

    dialog = new Atomic.Window();
    root.addChild(dialog);

    dialog.setMinSize(250, 192);

    dialog.setAlignment(Atomic.HA_LEFT, Atomic.VA_TOP);

    dialog.setLayout(Atomic.LM_VERTICAL, 6, [6, 6, 6, 6]);
    dialog.setName("Window");

    var titleBar = new Atomic.UIElement();
    titleBar.setMinSize(0, 24);
    titleBar.setVerticalAlignment(Atomic.VA_TOP);
    titleBar.setLayoutMode(Atomic.LM_HORIZONTAL);

    // Create the Window title Text
    var windowTitle = new Atomic.Text();
    windowTitle.setName("WindowTitle");
    windowTitle.setText("Generate Level Using:");
    titleBar.addChild(windowTitle);

    dialog.addChild(titleBar);

    dialog.movable = true;
    dialog.resizeable = true;

    dialog.setStyleAuto();
    titleBar.setStyleAuto();
    windowTitle.setStyleAuto();

    for (let btnId in buttonDef) {
        dialog.addChild(createButton(buttonDef[btnId].text, btnId));
    }
}

function loadScene(element, buttonDef) {
    if (generatorNode) {
        generatorNode.trigger('onClear');

        generatorNode.remove();
        generatorNode = null;
    }
    generatorNode =  blueprintLib.createChild(game.scene, buttonDef.builderBlueprint);
}

self.onMouseClick = function (element) {
    var handler = buttonDef[element.name];
    if (handler.builderBlueprint) {
        loadScene(element, handler);
    }
};

function start() {
    self.listenToEvent(null, "UIMouseClick", self.onMouseClick);
}

function update(timeStep) {

}

/**
 * Create a button with the provided text and id
 */
function createButton(text, id) {
    var button = new Atomic.Button();
    button.setName(id);
    button.setMinHeight(48);

    var buttonText = new Atomic.Text();

    buttonText.text = text;
    var font = game.cache.getResource("Font", "Fonts/Anonymous Pro.ttf");

    buttonText.setFont(font, 12);
    buttonText.color = [1, 1, 0, 1];

    buttonText.horizontalAlignment = Atomic.HA_CENTER;
    buttonText.verticalAlignment = Atomic.VA_CENTER;
    button.addChild(buttonText);

    button.setStyleAuto();
    return button;
}
