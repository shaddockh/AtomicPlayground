export const entities = {

    entity_base: {
    },


    hero: {
        inherits: 'entity_base',
        StaticSprite2D: {
            sprite: 'Sprites/hero_0.png',
            orderInLayer: 10
        },
        PlayerInputHandler: {
            debug: true
        },
        PointLight2D: {
            castShadows: true,
            radius: 2,
            numRays: 16,
            color: [0.7, 0.9, 0.9, 0.7]
        },
        LightFlicker: {
            baseRange: 2,
            speed: 0.2
        }
    }

};
