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
require("AtomicGame");

Atomic.game.init(start, update);

// called at the start of play
function start() {
    // Create "Hello World" Text
    createText();
}

// called per frame
function update(timeStep) {

}

function createText() {
    var game = Atomic.game;

    // create a 2D scene
    game.createScene2D();

    // Construct new Text object
    var helloText = new Atomic.Text();

    // Set String to display
    helloText.setText("Hello World from Atomic Game Engine!");

    // Set font and text color
    helloText.setFont(game.cache.getResource("Font", "Fonts/Anonymous Pro.ttf"));

    //helloText.setColor(0.0, 1.0, 0.0);
    helloText.color = [0.0, 1.0, 0.0, 1.0];

    // Align Text center-screen
    helloText.setHorizontalAlignment(Atomic.HA_CENTER);
    helloText.setVerticalAlignment(Atomic.VA_CENTER);

    // Add Text instance to the UI root element
    game.ui.getRoot().addChild(helloText);
}
