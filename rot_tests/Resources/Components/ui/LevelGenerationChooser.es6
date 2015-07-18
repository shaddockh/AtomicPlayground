var game = Atomic.game;
var ui = game.ui;
var root = ui.getRoot();

import {nodeBuilder, blueprintCatalog} from 'atomic-blueprintLib';

var dialog;
var generatorNode;
var buttonDef;

function loadScene(element, buttonDef) {
    if (generatorNode) {
        generatorNode.trigger('onClear');

        Atomic.destroy(generatorNode);
        generatorNode = null;
    }
    generatorNode = nodeBuilder.createChild(game.scene, buttonDef.builderBlueprint);
}

self.onMouseClick = function (element) {
    var handler = buttonDef[element.name];
    if (handler.builderBlueprint) {
        loadScene(element, handler);
    }
};

function start() {
    build();
    self.listenToEvent(null, "UIMouseClick", self.onMouseClick);
}

/**
 * Create a button with the provided text and id
 */
function createButton(text, id) {
    print(`Creating button ${id}`);
    var button = new Atomic.Button();
    button.setName(id);
    button.setMinHeight(38);

    var buttonText = new Atomic.Text();

    buttonText.text = text;
    var font = game.cache.getResource("Font", "Fonts/Anonymous Pro.ttf");

    buttonText.setFont(font, 10);
    buttonText.color = [1, 1, 0, 1];

    buttonText.horizontalAlignment = Atomic.HA_CENTER;
    buttonText.verticalAlignment = Atomic.VA_CENTER;
    button.addChild(buttonText);

    button.setStyleAuto();
    return button;
}

function build() {

    let btnId = 0;
    buttonDef = {};
    blueprintCatalog.find(blueprint => {
        if (blueprint.inherits === 'baseLevelGenerator') {
            buttonDef['btn' + blueprint.name] = {
                text: blueprint.LevelGenerator.strategy,
                builderBlueprint: blueprint.name
            };
            return true;
        }
    });

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
