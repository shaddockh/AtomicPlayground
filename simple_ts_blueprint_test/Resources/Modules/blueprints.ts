// all blueprints should be defined here
// This is the base star blueprint that defines the texture, etc.
export const star = {
    Star: {},
    // generate the prefabs into Resources/Prefabs/autogen/stars/..
    // Note that this value is inherited by all child blueprints and it's possible
    // to have different directories for differetn types of blueprints
    prefabDir: "Prefabs/autogen/stars",
    isPrefab: true,
    StaticSprite2D: {
        sprite: "Sprites/star.png",
        blendMode: Atomic.BLEND_ALPHA
    }
};

// this descends from the base star and overrides the spawn position and speed
export const star1 = {
    inherits: "star",
    position2D: [-3, 0],
    Star: {
        speed: -50
    }
};

// this descends from the base star and overrides the spawn position and speed
export const star2 = {
    inherits: "star",
    position2D: [3, 0],
    Star: {
        speed: 100
    }
};
