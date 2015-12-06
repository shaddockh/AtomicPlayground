// vendor needs to be imported once in the main script file, then all bundled Modules
// will be able to be imported
import 'vendor';
import * as atomicUtils from 'atomic-utils';

// Load up our main scene
const scene = Atomic.player.loadScene('Scenes/main.scene');

// Set the camera ortho size based upon pixel size and player height
atomicUtils.configureSceneCameraOrthoSize(scene);
