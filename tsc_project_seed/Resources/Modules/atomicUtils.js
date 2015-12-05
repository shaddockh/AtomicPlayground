/* Catch all for some common helpers.  Collecting in here until I can organize them better */
/**
 * Sets the 2d camera ortho size to the correct size based upon the Atomic.PIXEL_SIZE and the graphics height
 * @param {Atomic.Scene} scene [description]
 */
function configureSceneCameraOrthoSize(scene) {
    var cameraNode = scene.getChild('Camera');
    var camera = cameraNode.getComponent('Camera');
    camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;
}
exports.configureSceneCameraOrthoSize = configureSceneCameraOrthoSize;
/**
 *	Creates a 2D scene and returns the scene.  A camera will be attached
 *	with the name "Camera" and a zone will be created with the name "Zone"
 * @return {Atomic.Scene} The generated scene
 */
function create2dScene() {
    // create a 2D scene
    var scene = new Atomic.Scene();
    scene.createComponent('Octree');
    var cameraNode = scene.createChild('Camera');
    cameraNode.position = [0.0, 0.0, -10.0];
    var camera = cameraNode.createComponent('Camera');
    camera.orthographic = true;
    camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;
    var viewport = new Atomic.Viewport(scene, camera);
    Atomic.renderer.setViewport(0, viewport);
    Atomic.renderer.textureFilterMode = Atomic.FILTER_NEAREST;
    // set up lighting zone
    var zone = scene.createComponent('Zone');
    zone.ambientColor = [.1, .1, .1, 0];
    // Put some limits on the renderer
    Atomic.engine.setMaxFps(30);
    // TODO:vSync not available in the d.ts
    //Atomic.engine.vSync = true;
    return scene;
}
exports.create2dScene = create2dScene;
/**
 * Sets up a default physics world for the provided scene
 * @param  {Atomic.Scene}          scene the scene to attach the physics world to
 * @return {Atomic.PhysicsWorld2D}       instance of the physics world
 */
function initPhysics2D(scene) {
    // set up physics
    scene.createComponent('DebugRenderer');
    //scene.createComponent('Renderer2D');
    var physicsWorld = scene.createComponent('PhysicsWorld2D');
    physicsWorld.drawShape = true;
    physicsWorld.allowSleeping = true;
    physicsWorld.warmStarting = true;
    physicsWorld.autoClearForces = true;
    physicsWorld.gravity = [0, 0];
    return physicsWorld;
}
exports.initPhysics2D = initPhysics2D;
