// This script is the main entry point of the game
//
//
// this script shows a couple uses of promises.
// 1) use in a popup dialog to resolve a promise when a selection is made
// 2) use in an animation to queue animations
//
require('AtomicEventLoop'); // required for the setTimeout call that is needed by promises
require('es6-promise'); // promises library

var scene = createScene();

// initial head of the animation queue .. we will be adding to this
var animationQueue = Promise.resolve();
var uiQueue = null;
var star;

// generate a promise that resolves after # of milliseconds
function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms);
    });
}

// create a scene
function createScene() {
    // create a 2D scene
    var scene = new Atomic.Scene();
    scene.createComponent("Octree");

    var cameraNode = scene.createChild("Camera");
    cameraNode.position = [0.0, 0.0, -10.0];

    var camera = cameraNode.createComponent("Camera");
    camera.orthographic = true;
    camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;

    var viewport = null;

    viewport = new Atomic.Viewport(scene, camera);
    Atomic.renderer.setViewport(0, viewport);

    return scene;
}

// build the main ui screen
function buildUI(scene) {
    var view = new Atomic.UIView();
    var layout = new Atomic.UILayout();
    layout.rect = [0, 600, 200, 700];
    layout.axis = Atomic.UI_AXIS_Y;
    layout.layoutDistribution = Atomic.UI_LAYOUT_DISTRIBUTION_AVAILABLE;
    layout.layoutDistributionSize = Atomic.UI_LAYOUT_SIZE_AVAILABLE;
    layout.layoutSpacing = 0;
    view.addChild(layout);

    var container = new Atomic.UIContainer();
    container.gravity = Atomic.UI_GRAVITY_LEFT_RIGHT;
    layout.addChild(container);

    var layout2 = new Atomic.UILayout();
    layout2.layoutDistribution = Atomic.UI_LAYOUT_DISTRIBUTION_AVAILABLE;
    layout2.layoutDistributionSize = Atomic.UI_LAYOUT_SIZE_AVAILABLE;
    container.addChild(layout2);

    var button = new Atomic.UIButton();
    button.text = 'Queue Action';
    button.id = 'btnLaunchDialog';
    button.subscribeToEvent(button, "WidgetEvent", function (eventData) {
        if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
            return;
        }
        if (eventData.target && eventData.target.id === 'btnLaunchDialog') {
            // This demonstrates launching a dialog that returns a promise.  When the dialog closes
            // the promise will be resolved.
            launchDialog(view).then(queueAction);
        }
    });
    layout2.addChild(button);

    uiQueue = buildQueueTracker(view);

}

// Build the queue tracker window.  This will keep track of the items that are queued up.
function buildQueueTracker(view) {
    var window = new Atomic.UIWindow();

    window.settings = Atomic.UI_WINDOW_SETTINGS_TITLEBAR;
    window.text = "Action Queue";

    var layout = new Atomic.UILayout();
    layout.axis = Atomic.UI_AXIS_Y;
    window.addChild(layout);

    window.resizeToFitContent();
    view.addChild(window);

    return {
        addText: function (text) {
            var txt = new Atomic.UITextField();
            txt.setText(text);
            layout.addChild(txt);
            window.resizeToFitContent();
            return txt;
        },
        removeText: function (txtObj) {
            layout.removeChild(txtObj, true);
            window.resizeToFitContent();
        }
    };
}

// This is a popup dialog that returns a promise.  When a selection is made, the promise is resolved with
// the selection that was made.
function launchDialog(view) {
    var window = new Atomic.UIWindow();

    window.settings = Atomic.UI.WINDOW_SETTINGS_TITLEBAR;
    window.text = "Actions";

    var layout = new Atomic.UILayout();
    layout.axis = Atomic.UI_AXIS_Y;
    window.addChild(layout);

    var buttonDefs = {
        btnSpinLeft: 'Spin left for 5 seconds.',
        btnSpinRight: 'Spin right for 5 seconds.',
        btnMoveLeft: 'Move left 3 units.',
        btnMoveRight: 'Move right 3 units.'
    };
    var buttons = {};

    for (var btnInfo in buttonDefs) {
        var button = new Atomic.UIButton();
        button.id = btnInfo;
        button.text = buttonDefs[btnInfo];
        buttons[btnInfo] = button;
        layout.addChild(button);
    }

    window.resizeToFitContent();
    view.addChild(window);
    window.center();

    // will return a promise that will resolve with the id of the button that was selected
    return new Promise(function (resolve, reject) {
        function subscribe(button) {
            button.subscribeToEvent(button, 'WidgetEvent', function (eventData) {
                if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                    return;
                }
                if (eventData.target && eventData.target.id === button.id) {
                    window.close();
                    resolve(button.id);
                }
            });
        }
        for (var buttonId in buttons) {
            subscribe(buttons[buttonId]);
        }
    });
}

// Queue up the action to perform
function queueAction(action) {
    switch (action) {
    case 'btnSpinLeft':
        // spin left for 5 seconds
        (function () {
            // wrapping up the whole sequence in a closure so that all pieces have access to an instance 
            // version of the text on the queue
            var queuetxt = uiQueue.addText('Spin Left');
            animationQueue = animationQueue.then(function () {
                    star.speed = 100;
                })
                .then(function () {
                    return delay(5000);
                })
                .then(function () {
                    star.speed = 0;
                    uiQueue.removeText(queuetxt);
                });
        })();
        break;
    case 'btnSpinRight':
        (function () {
            // wrapping up the whole sequence in a closure so that all pieces have access to an instance 
            // version of the text on the queue
            var queuetxt = uiQueue.addText('Spin Right');
            animationQueue = animationQueue.then(function () {
                    star.speed = -100;
                })
                .then(function () {
                    return delay(5000);
                })
                .then(function () {
                    star.speed = 0;
                    uiQueue.removeText(queuetxt);
                });
        })();
        break;
    case 'btnMoveLeft':
        (function () {
            // wrapping up the whole sequence in a closure so that all pieces have access to an instance 
            // version of the text on the queue
            var queuetxt = uiQueue.addText('Move Left');
            animationQueue = animationQueue.then(function () {
                    return new Promise(function (resolve) {
                        var pos = star.node.position2D;
                        var origPos = pos[0];
                        var interval = setInterval(function () {
                            pos[0] -= .1;
                            star.node.position2D = pos;
                            if (Math.abs(origPos - pos[0]) > 3) {
                                clearInterval(interval);
                                resolve();
                            }
                        }, 100);
                    });
                })
                .then(function () {
                    uiQueue.removeText(queuetxt);
                });
        })();
        break;
    case 'btnMoveRight':
        (function () {
            // wrapping up the whole sequence in a closure so that all pieces have access to an instance 
            // version of the text on the queue
            var queuetxt = uiQueue.addText('Move Right');
            animationQueue = animationQueue.then(function () {
                    return new Promise(function (resolve) {
                        var pos = star.node.position2D;
                        var origPos = pos[0];
                        var interval = setInterval(function () {
                            pos[0] += .1;
                            star.node.position2D = pos;
                            if (Math.abs(origPos - pos[0]) > 3) {
                                clearInterval(interval);
                                resolve();
                            }
                        }, 100);
                    });
                })
                .then(function () {
                    uiQueue.removeText(queuetxt);
                });
        })();
        break;
    }
}
// called at the start of play
function start(scene) {
    buildUI(scene);

    // create the star node.
    var starNode = scene.createChild('Star');
    star = starNode.createJSComponent('Components/Star.js');
    starNode.position2D = [0, 0];
}
start(scene);

// called per frame
module.exports.update = function update(timeStep) {}
