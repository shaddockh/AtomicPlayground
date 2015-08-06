//
// Copyright (c) 2008-2015 the Urho3D project.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// This script is the main entry point of the game


// FIXME: The UI Event system needs to be looked at with the new version.

var game;

/// The Window.
var window_;

/// The UI's root UIElement.
var uiRoot_;

/// Remembered drag begin position.
var dragBeginPosition_;

// called at the start of play
function start() {
    game = Atomic.game;
    uiRoot_ = game.ui.getRoot();

    // Load XML file containing default UI style sheet
    var style = game.cache.getResource("XMLFile", "UI/DefaultStyle.xml");

    // Set the loaded style as default style
    uiRoot_.setDefaultStyle(style);

    // Initialize Window
    initWindow();

    // Create and add some controls to the Window
    initControls();

    // Create a draggable Fish
    createDraggableFish();
}

// called per frame
function update(timeStep) {

}

function initControls() {
    // Create a CheckBox
    var checkBox = new Atomic.CheckBox();
    checkBox.setName('CheckBox');

    // Create a Button
    var button = new Atomic.Button();
    button.setName('Button');
    button.setMinHeight(24);

    // Create a LineEdit
    var lineEdit = new Atomic.LineEdit();
    lineEdit.setName('LineEdit');
    lineEdit.setMinHeight(24);

    // Add controls to Window
    window_.addChild(checkBox);
    window_.addChild(button);
    window_.addChild(lineEdit);

    // Apply previously set default style
    checkBox.setStyleAuto();
    button.setStyleAuto();
    lineEdit.setStyleAuto();
}

function initWindow() {
    // Create the Window and add it to the UI's root node
    window_ = new Atomic.Window();
    uiRoot_.addChild(window_);

    // Set Window size and layout settings
    window_.setMinSize(384, 192);
    window_.setLayout(Atomic.LM_VERTICAL, 6, [6, 6, 6, 6]);
    window_.setAlignment(Atomic.HA_CENTER, Atomic.VA_CENTER);
    window_.setName("Window");

    // Create Window 'titlebar' container
    var titleBar = new Atomic.UIElement();
    titleBar.setMinSize(0, 24);
    titleBar.setVerticalAlignment(Atomic.VA_TOP);
    titleBar.setLayoutMode(Atomic.LM_HORIZONTAL);

    // Create the Window title Text
    var windowTitle = new Atomic.Text();
    windowTitle.setName("WindowTitle");
    windowTitle.setText("Hello GUI!");

    // Create the Window's close button
    var buttonClose = new Atomic.Button();
    buttonClose.setName("CloseButton");

    // Add the controls to the title bar
    titleBar.addChild(windowTitle);
    titleBar.addChild(buttonClose);

    // Add the title bar to the Window
    window_.addChild(titleBar);

    // Apply styles
    window_.setStyleAuto();
    windowTitle.setStyleAuto();
    buttonClose.setStyle("CloseButton");

    // Subscribe to buttonClose release (following a 'press') events
    // FIXME: Doesn't work
    self.listenToEvent(buttonClose, "OnClickEnd", handleClosePressed);
    buttonClose.onClickEnd = handleClosePressed;

    self.listenToEvent(buttonClose, "UIMouseClick", handleClosePressed);

    // Subscribe also to all UI mouse clicks just to see where we have clicked
    self.listenToEvent(null, "UIMouseClick", handleControlClicked);
}

function createDraggableFish() {
    var cache = game.cache;
    var graphics = game.graphics;

    // Create a draggable Fish button
    var draggableFish = new Atomic.Button();
    draggableFish.setTexture(cache.getResource("Texture2D", "../resources/textures/UrhoDecal.dds")); // Set texture
    draggableFish.setBlendMode(Atomic.BLEND_ADD);
    draggableFish.setSize(128, 128);
    draggableFish.setPosition([(graphics.getWidth() - draggableFish.getWidth()) / 2, 200]);
    draggableFish.setName("Fish");
    uiRoot_.addChild(draggableFish);

    // Add a tooltip to Fish button
    var toolTip = new Atomic.ToolTip();
    draggableFish.addChild(toolTip);
    toolTip.setPosition([draggableFish.getWidth() + 5, draggableFish.getWidth() / 2]); // slightly offset from close button
    var textHolder = new Atomic.BorderImage();
    toolTip.addChild(textHolder);
    textHolder.setStyle("ToolTipBorderImage");
    var toolTipText = new Atomic.Text();
    textHolder.addChild(toolTipText);
    toolTipText.setStyle("ToolTipText");
    toolTipText.setText("Please drag me!");

    //// Subscribe draggableFish to Drag Events (in order to make it draggable)
    //// See "Event list" in documentation's Main Page for reference on available Events and their eventData
    //Atomic.subscribeToEvent(draggableFish, 'DragBegin', handleDragBegin);
    // FIXME: Event system
    self.listenToEvent(draggableFish, "OnDragBegin", handleDragBegin);
    draggableFish.onDragBegin = handleDragBegin;
    //SubscribeToEvent(draggableFish, E_DRAGMOVE, HANDLER(HelloGUI, HandleDragMove));
    //SubscribeToEvent(draggableFish, E_DRAGEND, HANDLER(HelloGUI, HandleDragEnd));
}

function handleDragBegin(eventType, eventData) {
    print('here');
    // Get UIElement relative position where input (touch or click) occured (top-left = IntVector2(0,0))
    //dragBeginPosition_ = IntVector2(eventData["ElementX"].GetInt(), eventData["ElementY"].GetInt());
}

function handleDragMove(eventType, eventData) {
    //IntVector2 dragCurrentPosition = IntVector2(eventData["X"].GetInt(), eventData["Y"].GetInt());
    //UIElement* draggedElement = static_cast<UIElement*>(eventData["Element"].GetPtr());
    //draggedElement->SetPosition(dragCurrentPosition - dragBeginPosition_);
}

function handleDragEnd(eventType, eventData) { // For reference (not used here)
}

function handleClosePressed(eventType, eventData) {
    print("handle close pressed");
    Atomic.engine.exit();
}

function handleControlClicked(clicked) {

    // Get the Text control acting as the Window's title
    // FIXME: No findChild or getChild available yet.
    //var windowTitle = window_.findChild("WindowTitle");

    //// Get control that was clicked
    //var clicked = eventData[UIMouseClick::P_ELEMENT].GetPtr());

    var name = "...?";
    if (clicked) {
        // Get the name of the control that was clicked
        name = clicked.getName();
    }

    // Update the Window's title text
    //windowTitle.setText("Hello " + name + "!");
}
