// all blueprints should be defined here
exports.blueprints = {

    // This is the base star blueprint that defines the texture, etc.
    star: {
        Star: {},
        Aspect: {
            debug: true,
            spriteTexture: 'Sprites/star.png',
            blendMode: Atomic.BLEND_ALPHA,
        }
    },

    // this descends from the base star and overrides the spawn position and speed
    star1: {
        inherits: 'star',
        Star: {
            speed: -50
        },
        Position: {
            spawnPosition: [-3, 0]
        }
    },

    // this descends from the base star and overrides the spawn position and speed
    star2: {
        inherits: 'star',
        Star: {
            speed: 100
        },
        Position: {
            spawnPosition: [3, 0]
        }
    },

};
