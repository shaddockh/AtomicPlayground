'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A component that rotates an image of a star
 */
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        _super.apply(this, arguments);
    }
    /**
     * Called when this component initially starts up
     */
    Star.prototype.start = function () {
        //create StaticSprite2D component to the current node
        var sprite2D = this.node.createComponent('StaticSprite2D');
        //get star.png sprite from cache
        sprite2D.sprite = Atomic.cache.getResource('Sprite2D', 'Sprites/star.png');
        //set blend mode to BLEND_ALPHA
        sprite2D.blendMode = Atomic.BLEND_ALPHA;
    };
    /**
     * Called every cycle.  The timestep will be the delta since the last time update was called
     * @param  {number} timeStep the delta time since the last time update was called
     */
    Star.prototype.update = function (timeStep) {
        //roll a node
        this.node.roll(timeStep * 100);
    };
    return Star;
})(Atomic.JSComponent);
module.exports = Star;
