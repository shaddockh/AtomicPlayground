export const entities = {

    entity_base: {
    },

    actor: {
        inherits: 'entity_base',
        RigidBody2D: {
            bodyType:Atomic.BT_STATIC,
            castShadows: false
        },
        CollisionBox2D: {
            size: [7 * Atomic.PIXEL_SIZE, 7 * Atomic.PIXEL_SIZE]
        }
    },


    hero: {
        inherits: 'actor',
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
        CollisionBox2D: {
            friction: 15.0,
            density: 19.0,
            restitution: 0.1
        },
        RigidBody2D: {
            linearVelocity: [0,0],
            allowSleep: true,
            bodyType: Atomic.BT_DYNAMIC,
            mass: 50,
            bullet: false,
            fixedRotation: true
        },
        LightFlicker: {
            baseRange: 2,
            speed: 0.2
        },
        Mover: {}
    }

};
