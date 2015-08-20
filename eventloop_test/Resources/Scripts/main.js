// This script is the main entry point of the game
// Require in the event loop handler
var eventLoop = require('eventloop');

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

// Set up the scene, create the star, and set some scheduled events via setTimeout and setInterval
function main() {
    // create a 2D scene
    var scene = createScene();

    // create the star node
    var starNode = scene.createChild('Star');
    var star = starNode.createJSComponent('Components/Star.js');
    starNode.position2D = [0, 0];

    // reverse direction after 2 seconds
    setTimeout(function () { star.speed = -100; }, 2000);

    // start moving the star after 3 seconds
    setTimeout(function () { 
        var currentX = 0, currentY = 0;
        starNode.position2D = [currentX, currentY]; 

        // every 1/2 second move the star a little bit more in a diagonal
        // NOTE, you are not going to want to do animations this way...this is just an example.  Doing it this way ends up introducing a stutter
        setInterval(function() {
            currentX += 0.05;
            currentY += 0.05;
            starNode.position2D = [currentX, currentY]; 
        }, 50);
    }, 3000);
}
main();

// Export the update routine that exposes that controls the event loop
module.exports = {
    update: function (timeStep) {
        // Process any queued events set via setTimer or setInterval
        eventLoop.processTimers();
    },
    postUpdate: function (timeStep) {

        // note - this doesn't seem to be called...ideally, this is where you would want to handle something like setImmediate
        console.log('y');
    }
}
