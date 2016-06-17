export const entities = {

    entity_base: {
        prefabDir: 'Prefabs/autogen/entities',
        isPrefab: true,
        Entity: {},
        MessageDispatcher: {}
    },

    /** ACTORS */
    actor: {
        inherits: 'entity_base',
        prefabDir: 'Prefabs/autogen/actors',
        Entity: {
            blocksPath: true,
            blocksLight: false,
            bumpable: true,
            attackable: true
        }
    },


    hero: {
        inherits: 'actor',
        Entity: {
            screenName: 'Hero'
        },
        StaticSprite2D: {
            sprite: 'Sprites/hero_0.png',
            orderInLayer: 12
        },
        PlayerInputHandler: {
            debug: false
        },
        PointLight2D: {
            castShadows: true,
            radius: 2,
            numRays: 64,
            color: [0.9, 0.7, 0.5, 0.7],
            backtrace: true
        },
        /*
         *LightFlicker: {
         *    baseRange: 2,
         *    speed: 0.2
         *},
         */
        GridMover: {
            debug: false,
            speed: 0.25,
            constantMotion: true
        },
        // Make sure our actions are reported to the log
        ActionLogger: {},
        EventSound: {
            eventMap: {
                onMoveStart: 'Sounds/footstep02.ogg',
                onAttack: 'Sounds/knifeSlice.ogg'
            }
        },
        HeroAi: {
            debug: false
        },
        Health: {
            life: 10
        }
    },

    // doesn't work -- here for future research
    physicsHero: {
        inherits: 'hero',
        CollisionBox2D: {
            density: 19.0,
            friction: 15.0,
            restitution: 0.1,
            size: [7 * Atomic.PIXEL_SIZE, 7 * Atomic.PIXEL_SIZE]
        },
        RigidBody2D: {
            allowSleep: true,
            bodyType: Atomic.BT_STATIC,
            bullet: false,
            castShadows: false,
            fixedRotation: true,
            linearVelocity: [0, 0],
            mass: 50
        }
    },

    fred: {
        inherits: 'actor',
        /* TriggerDebug:{}, */
        Entity: {
            screenName: 'a rat'
        },
        GridMover: {
            speed: 0.25
        },
        StaticSprite2D: {
            sprite: 'Sprites/rodent0_10.png',
            orderInLayer: 12
        },
        MonsterAi: {
            debug: false
        },
        Health: {
            life: 5
        },
        EventSound: {
            eventMap: {
                onAttack: 'Sounds/bite-small2.ogg'
            }
        }
    },

    /* ITEMS */

    health_potion: {
        prefabDir: 'Prefabs/autogen/entities',
        isPrefab: true,
        Entity: {
            blocksPath: false,
            blocksLight: false,
            bumpable: true,
            fovRemember: false
        },
        StaticSprite2D: {
            sprite: 'Sprites/Potion_00.png',
            orderInLayer: 10
        },
        Potion: {
            debug: false,
            addHealth: 5,
            drinkSound: 'Sounds/bottle.ogg'
        }
    },

    /* INTERACTIVE OBJECT */
    door: {
        prefabDir: 'Prefabs/autogen/entities',
        isPrefab: true,
        Entity: {
            blocksPath: true,
            blocksLight: true,
            bumpable: true,
            fovRemember: true
        },
        ShadowTile: {
            platformDisable: ['Web', 'HTML5']
        },
        StaticSprite2D: {
            sprite: 'Sprites/door_ns_c.png',
            orderInLayer: 10
        },
        RigidBody2D: {
            bodyType: Atomic.BT_STATIC,
            castShadows: true
        },
        CollisionBox2D: {
            size: [16 * Atomic.PIXEL_SIZE, 16 * Atomic.PIXEL_SIZE]
        },
        Door: {
            debug: false,
            openSound: 'Sounds/doorOpen_1.ogg'
        }
        // works, but it's too dynamic :p ... not good for editing in the editor
        //EventSound: {
        //    eventMap: {
        //        'onOpen': 'Sounds/doorOpen_1.ogg'
        //    }
        //}
    },
    door_ns: {
        inherits: 'door',
        Door: {
            open: false,
            openSprite: 'Sprites/door_ns_o.png',
            closedSprite: 'Sprites/door_ns_c.png'
        }
    },
    door_ew: {
        inherits: 'door',
        Door: {
            open: false,
            openSprite: 'Sprites/door_ew_o.png',
            closedSprite: 'Sprites/door_ew_c.png'
        }
    },
    door_unkown: {
        inherits: 'door',
        Door: {
            open: false,
            openSprite: 'Sprites/door_ew_o.png',
            closedSprite: 'Sprites/door_ew_o.png'
        }
    },


    /* EFFECTS */
    death_effect: {
        prefabDir: 'Prefabs/autogen/effects',
        isPrefab: true,
        StaticSprite2D: {
            sprite: 'Sprites/decor0_092_skull.png',
            orderInLayer: 100
        },
        GraphicEffect: {
            debug: false,
            duration: 3,
            useZoom: true,
            zoomTo: 10,
            fadeOut: true
        }
    }



};
