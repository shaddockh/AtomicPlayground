// This script is the main entry point of the game
//
//  This script demonstrates trying to use the sendEvent/subscribeToEvent for passing data

var scene = createScene();

var star;

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

// called at the start of play
function start(scene) {

    // create the star node.
    var targetNode = scene.createChild('target');
    eventTarget = targetNode.createJSComponent('Components/EventTarget.js');

}
start(scene);
var eventTarget;
var sent = false;
// called per frame
module.exports.update = function update(timeStep) {

    if (!sent) {
        sent = true;
        console.log('Sending Event');
        eventTarget.sendEvent('callMe', {
            who: 'DH'
        });

        eventTarget.sendEvent('complexData', {
            str: 'string',
            bool: true,
            arr: [1,2,3,4,5],
            obj: {
                name: 'obj'
            }
        });

        eventTarget.sendEvent('callBack', {
            callback: function(msg) {
                console.log('Callback called: ' + msg);
            }
        });
    }
}
