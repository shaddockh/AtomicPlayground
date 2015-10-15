// all blueprints should be defined here
export default {
    // This is the base star blueprint that defines the texture, etc.
    star: {
        Star: {},
        StaticSprite2D: {
            sprite: 'Sprites/star.png',
            blendMode: Atomic.BLEND_ALPHA
        }
    },
    // this descends from the base star and overrides the spawn position and speed
    star1: {
        inherits: 'star',
        isPrefab: true,
        position2D: [-3,0],
        Star: {
            speed: -50
        }
    },
    // this descends from the base star and overrides the spawn position and speed
    star2: {
        inherits: 'star',
        isPrefab: true,
        position2D: [3,0],
        Star: {
            speed: 100
        }
    },

};
