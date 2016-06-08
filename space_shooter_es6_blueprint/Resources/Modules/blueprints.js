'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var actor_base = exports.actor_base = {
    isPrefab: true,
    prefabDir: "Prefabs/autogen/actors",
    Health: {
        health: 1
    },
    SpriteSheet: {
        spriteSheet: 'Sprites/spacegame_sheet.xml'
    }
};

var player = exports.player = {
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
};

var capitalShip = exports.capitalShip = {
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
};

var enemy_base = exports.enemy_base = {
    inherits: 'actor_base',
    Enemy: {},
    SpriteSheet: {
        spriteName: 'spaceship_scarab'
    },
    AI: {
        canMove: false,
        allowShoot: true,
        bulletBlueprint: 'enemyBullet'
    }
};

var spaceship_scarab = exports.spaceship_scarab = {
    inherits: 'enemy_base',
    Health: {
        health: 2
    },
    SpriteSheet: {
        spriteName: 'spaceship_scarab'
    }
};

var spaceship_louse = exports.spaceship_louse = {
    inherits: 'enemy_base',
    Health: {
        health: 1
    },
    SpriteSheet: {
        spriteName: 'spaceship_louse'
    }
};

var explosion = exports.explosion = {
    isPrefab: true,
    prefabDir: "Prefabs/autogen/effects",
    scale2D: [1.5, 1.5],
    StaticSprite2D: {
        orderInLayer: 200
    },
    Explosion: {
        spriteSheet: 'Sprites/explosions_sheet.xml'
    }
};

var playerBullet = exports.playerBullet = {
    isPrefab: true,
    prefabDir: "Prefabs/autogen/effects",
    StaticSprite2D: {
        sprite: 'Sprites/blue_beam.png'
    },
    Bullet: {
        isPlayer: true,
        laserSound: 'Sounds/laser01.wav',
        speed: 8
    }
};

var enemyBullet = exports.enemyBullet = {
    isPrefab: true,
    prefabDir: "Prefabs/autogen/effects",
    StaticSprite2D: {
        sprite: 'Sprites/green_beam.png'
    },
    Bullet: {
        isPlayer: false,
        laserSound: 'Sounds/laser02.wav',
        speed: 5
    }
};

var background = exports.background = {
    isPrefab: true,
    prefabDir: "Prefabs/autogen/effects",
    position2D: [0, 12],
    scale2D: [1.5, 1.5],
    StaticSprite2D: {
        sprite: 'Sprites/space_background.png',
        orderInLayer: -200
    },
    Space: {
        speed: 0.75
    }
};

var spaceGame = exports.spaceGame = {
    isPrefab: true,
    SpaceGame: {
        backgroundMusic: 'Music/battle.ogg'
    },
    HUD: {}
};