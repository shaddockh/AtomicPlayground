export const tiles = {

    tile_base: {
        Sprite: {},
        Position: {
            debug: false
        }
    },

    tile_floor_overview: {
        inherits: 'tile_base',
        Sprite: {
            spriteTexture: 'Sprites/tile_floor_overview.png',
            color: [1, 1, 1, 1]
        }
    },

    // Floor.png
    tile_floor_base: {
        inherits: 'tile_base',
        Sprite: {
            spriteSheet: 'Sprites/floor.xml',
            debug: false

        }
    },

    tile_floor_tl: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_tl'
        }
    },
    tile_floor_tc: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_tc'
        }
    },
    tile_floor_tr: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_tr'
        }
    },
    tile_floor_cl: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_cl'
        }
    },
    tile_floor_c: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_c'
        }
    },
    tile_floor_cr: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_cr'
        }
    },
    tile_floor_bl: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_bl'
        }
    },
    tile_floor_bc: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_bc'
        }
    },
    tile_floor_br: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_br'
        }
    },

    tile_floor_vcorridor_t: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_vcorridor_t'
        }
    },
    tile_floor_vcorridor_c: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_vcorridor_c'
        }
    },
    tile_floor_vcorridor_b: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_vcorridor_b'
        }
    },
    tile_floor_hcorridor_l: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_hcorridor_l'
        }
    },
    tile_floor_hcorridor_c: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_hcorridor_c'
        }
    },
    tile_floor_hcorridor_r: {
        inherits: 'tile_floor_base',
        Sprite: {
            spriteName: 'aqua_hcorridor_r'
        }
    },
    tile_door_overview: {
        inherits: 'tile_base',
        Sprite: {
            spriteTexture: 'Sprites/tile_floor_overview.png',
            color: [0, 1, 0, 1]
        }
    }
};
