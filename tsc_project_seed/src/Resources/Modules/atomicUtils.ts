 /**
  *	Creates a 2D scene and returns the scene.  A camera will be attached
  *	with the name "Camera" and a zone will be created with the name "Zone"
  * @return {Atomic.Scene} The generated scene
  */
export function create2dScene(): Atomic.Scene {
    // create a 2D scene
    let scene = new Atomic.Scene();
    scene.createComponent('Octree');

    let cameraNode = scene.createChild('Camera');
    cameraNode.position = [0.0, 0.0, -10.0];

    let camera = cameraNode.createComponent<Atomic.Camera>('Camera');
    camera.orthographic = true;
    camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;

    let viewport = new Atomic.Viewport(scene, camera);
    Atomic.renderer.setViewport(0, viewport);

    Atomic.renderer.textureFilterMode = Atomic.FILTER_NEAREST;

    // set up lighting zone
    let zone = scene.createComponent<Atomic.Zone>('Zone');
    zone.ambientColor = [.1, .1, .1, 0];

    // Put some limits on the renderer
    Atomic.engine.setMaxFps(30);
    // TODO:vSync not available in the d.ts
    //Atomic.engine.vSync = true;

    return scene;
}

/**
 * Sets up a default physics world for the provided scene
 * @param  {Atomic.Scene}          scene the scene to attach the physics world to
 * @return {Atomic.PhysicsWorld2D}       instance of the physics world
 */
export function initPhysics2D(scene: Atomic.Scene): Atomic.PhysicsWorld2D {
    // set up physics
    scene.createComponent('DebugRenderer');
    //scene.createComponent('Renderer2D');
    let physicsWorld = scene.createComponent<Atomic.PhysicsWorld2D>('PhysicsWorld2D');
    physicsWorld.drawShape = true;
    physicsWorld.allowSleeping = true;
    physicsWorld.warmStarting = true;
    physicsWorld.autoClearForces = true;
    physicsWorld.gravity = [0, 0];
    return physicsWorld;
}
