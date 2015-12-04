import atomicUtils = require('../Modules/atomicUtils');

const scene = Atomic.player.loadScene('Scenes/main.scene');

configure2DCamera(scene);

function configure2DCamera(scene : Atomic.Scene) {
    let cameraNode = scene.getChild('Camera');
    let camera = cameraNode.getComponent<Atomic.Camera>('Camera');
    camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;
}
