module.exports = {
    actor_base: {
        Health: {
            health: 1
        },
        SpriteSheet: {
            spriteSheet: 'Sprites/spacegame_sheet.xml'
        }
    },

    player: {
        inherits: 'actor_base',
        Health: {
            health: 10
        },
        SpriteSheet: {
            spriteName: 'spaceship_mantis'
        },
        Player: {
            allowMove: true,
            allowShoot: true,
            bulletBlueprint: 'playerBullet'
        }
    },

    capitalShip: {
        inherits: 'actor_base',
        CapitalShip: {},
        Health: {
            health: 40
        },
        SpriteSheet: {
            spriteName: 'spaceship_locust'
        },
        AI: {
            canMove: true,
            allowShoot: true,
            bulletBlueprint: 'enemyBullet'
        }
    },

    enemy_base: {
        inherits: 'actor_base',
        Enemy: {},
        SpriteSheet: {
            spriteName: 'spaceship_scarab',
        },
        AI: {
            canMove: false,
            allowShoot: true,
            bulletBlueprint: 'enemyBullet'
        }
    },

    spaceship_scarab: {
        inherits: 'enemy_base',
        Health: {
            health: 2
        },
        SpriteSheet: {
            spriteName: 'spaceship_scarab'
        }
    },

    spaceship_louse: {
        inherits: 'enemy_base',
        Health: {
            health: 1
        },
        SpriteSheet: {
            spriteName: 'spaceship_louse',
        }
    },

    explosion: {
        scale2D: [1.5,1.5],
        StaticSprite2D: {
            orderInLayer: 200
        },
        Explosion: {
            spriteSheet: 'Sprites/explosions_sheet.xml'
        }
    },

    playerBullet: {
        StaticSprite2D: {
            sprite: 'Sprites/blue_beam.png'
        },
        Bullet: {
            isPlayer: true,
            laserSound: 'Sounds/laser01.wav',
            speed: 8
        }
    },

    enemyBullet: {
        StaticSprite2D: {
            sprite: 'Sprites/green_beam.png'
        },
        Bullet: {
            isPlayer: false,
            laserSound: 'Sounds/laser02.wav',
            speed: 5
        }
    },

    background: {
        position2D: [0,12],
        scale2D: [1.5, 1.5],
        StaticSprite2D: {
            sprite: 'Sprites/space_background.png',
            orderInLayer: -200
        },
        Space: {
            speed: 0.75
        }
    },

    spaceGame: {
        SpaceGame: {
            backgroundMusic: 'Music/battle.ogg'
        },
        HUD: {}
    }
};
