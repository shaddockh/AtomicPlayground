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
            color: [1,1,1,1]
        }
    },
    tile_door_overview: {
        inherits: 'tile_base',
        Sprite: {
            spriteTexture: 'Sprites/tile_floor_overview.png',
            color: [0,1,0,1]
        }
    },


};
