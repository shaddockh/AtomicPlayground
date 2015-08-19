function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

// This script is the main entry point of the game

var _blueprintLib = require('blueprintLib');

var blueprintLib = _interopRequireWildcard(_blueprintLib);

// Set up a globals ojbect that we can reference since
// I'm not entirely sure how the module system works
Globals = {};
require("AtomicGame");

Atomic.game.init(start, update);

// called at the start of play
function start() {

    var game = Atomic.game;

    // create a 2D scene
    game.createScene2D();

    // create the game component
    var comp = blueprintLib.createChild(game.scene, 'spaceGame');
}

// called per frame
function update(timeStep) {}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7NEJBTThCLGNBQWM7O0lBQWhDLFlBQVk7Ozs7QUFIeEIsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUliLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzs7QUFHaEMsU0FBUyxLQUFLLEdBQUc7O0FBRWIsUUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzs7O0FBR3ZCLFFBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7O0FBR3JCLFFBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztDQUNoRTs7O0FBR0QsU0FBUyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gU2V0IHVwIGEgZ2xvYmFscyBvamJlY3QgdGhhdCB3ZSBjYW4gcmVmZXJlbmNlIHNpbmNlXG4vLyBJJ20gbm90IGVudGlyZWx5IHN1cmUgaG93IHRoZSBtb2R1bGUgc3lzdGVtIHdvcmtzXG5HbG9iYWxzID0ge307XG4vLyBUaGlzIHNjcmlwdCBpcyB0aGUgbWFpbiBlbnRyeSBwb2ludCBvZiB0aGUgZ2FtZVxuXG5pbXBvcnQgKiBhcyBibHVlcHJpbnRMaWIgZnJvbSAnYmx1ZXByaW50TGliJztcbnJlcXVpcmUoXCJBdG9taWNHYW1lXCIpO1xuXG5BdG9taWMuZ2FtZS5pbml0KHN0YXJ0LCB1cGRhdGUpO1xuXG4vLyBjYWxsZWQgYXQgdGhlIHN0YXJ0IG9mIHBsYXlcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuXG4gICAgdmFyIGdhbWUgPSBBdG9taWMuZ2FtZTtcblxuICAgIC8vIGNyZWF0ZSBhIDJEIHNjZW5lXG4gICAgZ2FtZS5jcmVhdGVTY2VuZTJEKCk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGdhbWUgY29tcG9uZW50XG4gICAgdmFyIGNvbXAgPSBibHVlcHJpbnRMaWIuY3JlYXRlQ2hpbGQoZ2FtZS5zY2VuZSwgJ3NwYWNlR2FtZScpO1xufVxuXG4vLyBjYWxsZWQgcGVyIGZyYW1lXG5mdW5jdGlvbiB1cGRhdGUodGltZVN0ZXApIHt9XG4iXX0=