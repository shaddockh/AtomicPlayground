/**
 * Sets the 2d camera ortho size to the correct size based upon the Atomic.PIXEL_SIZE and the graphics height
 * @param {Atomic.Scene} scene [description]
 */
export declare function configureSceneCameraOrthoSize(scene: Atomic.Scene): void;
/**
 *	Creates a 2D scene and returns the scene.  A camera will be attached
 *	with the name "Camera" and a zone will be created with the name "Zone"
 * @return {Atomic.Scene} The generated scene
 */
export declare function create2dScene(): Atomic.Scene;
/**
 * Sets up a default physics world for the provided scene
 * @param  {Atomic.Scene}          scene the scene to attach the physics world to
 * @return {Atomic.PhysicsWorld2D}       instance of the physics world
 */
export declare function initPhysics2D(scene: Atomic.Scene): Atomic.PhysicsWorld2D;
