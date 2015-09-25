export const levelGenerators = {


    baseLevelGenerator: {
        //LevelRenderer2D: {}
        CreatureGenerator: {
            creatureCount: [3,5],
            creatureList: ['fred']
        },
        ItemGenerator: {
            itemCount: [3,5],
            itemList: ['health_potion']
        }
    },

    levelGeneratorDigger: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTDigger: {
            roomWidth: [2, 2] /* room minimum and maximum width */
        }
    },

    levelGeneratorUniform: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTUniform: { }
    },

    levelGeneratorRogue: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTRogue: { }
    },

    // Maze Generators
    levelGeneratorDividedMaze: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTDividedMaze: { }
    },
    levelGeneratorIceyMaze: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTIceyMaze: { }
    },
    levelGeneratorEllerMaze: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTEllerMaze: { }
    },

    // Cellular Automata
    levelGeneratorCellular: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTCellular: { 
            iterations: 4,
            randomization: 0.5,
            connected: false
        }
    },

    levelGeneratorCellularCustom: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTCellular: { 
            iterations: 49,
            randomization: 0.9,
            born: [4,5,6,7,8],
            survive: [2,3,4,5],
            connected: false
        }
    },

    levelGeneratorCellularConnected: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTCellular: { 
            iterations: 2,
            randomization: 0.5,
            connected: true
        }
    },

    customLevelRunner: {
        LevelRenderer2D: {
            debug: true
        },
        LevelRunner: {
            debug: true,
            turnBased: false,
            useFov: true
        }
    }
};