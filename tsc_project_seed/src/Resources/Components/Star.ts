'atomic component';

/**
 * A component that rotates an image of a star
 */
class Star extends Atomic.JSComponent {

    /**
     * Called when this component initially starts up
     */
    start() {
        //create StaticSprite2D component to the current node
        const sprite2D = this.node.createComponent<Atomic.StaticSprite2D>('StaticSprite2D');
        //get star.png sprite from cache
        sprite2D.sprite = Atomic.cache.getResource<Atomic.Sprite2D>('Sprite2D', 'Sprites/star.png');
        //set blend mode to BLEND_ALPHA
        sprite2D.blendMode = Atomic.BLEND_ALPHA;
    }

    /**
     * Called every cycle.  The timestep will be the delta since the last time update was called
     * @param  {number} timeStep the delta time since the last time update was called
     */
    update(timeStep: number) {
        //roll a node
        this.node.roll(timeStep * 100);
    }
}

export = Star;
