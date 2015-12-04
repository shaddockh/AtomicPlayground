var scene = Atomic.player.loadScene('Scenes/main.scene');
configure2DCamera(scene);
function configure2DCamera(scene) {
    var cameraNode = scene.getChild('Camera');
    var camera = cameraNode.getComponent('Camera');
    camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;
}
