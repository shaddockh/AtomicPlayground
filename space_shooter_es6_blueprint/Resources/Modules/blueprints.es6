export const blueprints = {
    actor_base: {
        Position: {},
        Health: {
            health: 1
        },
        Aspect: {
            spriteName: '',
            spriteSheet: 'Sprites/spacegame_sheet.xml',
        }
    },

    player: {
        inherits: 'actor_base',
        Health: {
            health: 10
        },
        Aspect: {
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
        Aspect: {
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
        Aspect: {
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
        Aspect: {
            spriteName: 'spaceship_scarab'
        }
    },

    spaceship_louse: {
        inherits: 'enemy_base',
        Health: {
            health: 1
        },
        Aspect: {
            spriteName: 'spaceship_louse',
        }
    },

    explosion: {
        Position: {},
        Aspect: {
            spriteSheet: 'Sprites/explosions_sheet.xml',
            orderInLayer: 200
        },
        Explosion: {}
    },

    playerBullet: {
        Position: {},
        Aspect: {
            spriteTexture: 'Sprites/blue_beam.png'
        },
        Bullet: {
            isPlayer: true,
            laserSound: 'Sounds/laser01.wav',
            speed: 8
        }
    },

    enemyBullet: {
        Position: {},
        Aspect: {
            spriteTexture: 'Sprites/green_beam.png'
        },
        Bullet: {
            isPlayer: false,
            laserSound: 'Sounds/laser02.wav',
            speed: 5
        }
    },

    background: {
        Position: {
            spawnPosition: [0, 12]
        },
        Aspect: {
            spriteTexture: 'Sprites/space_background.png',
            orderInLayer: -200,
            scale: [1.5, 1.5]
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
