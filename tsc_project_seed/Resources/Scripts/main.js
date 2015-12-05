var atomicUtils = require('../Modules/atomicUtils');
// Load up our main scene
var scene = Atomic.player.loadScene('Scenes/main.scene');
// Set the camera ortho size based upon pixel size and player height
atomicUtils.configureSceneCameraOrthoSize(scene);
