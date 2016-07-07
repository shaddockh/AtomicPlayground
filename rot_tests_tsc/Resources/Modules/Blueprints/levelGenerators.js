"use strict";
exports.levelGenerators = {
    baseLevelGenerator: {
        prefabDir: 'Prefabs/autogen/designer',
        isPrefab: true,
        //LevelRenderer2D: {}
        CreatureGenerator: {
            creatureCount: [3, 5],
            creatureList: 'fred'
        },
        ItemGenerator: {
            itemCount: [3, 5],
            itemList: 'health_potion'
        }
    },
    levelGeneratorUniform: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTUniform: {}
    },
    levelGeneratorDigger: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTDigger: {
            roomWidth: [2, 2] /* room minimum and maximum width */
        }
    },
    levelGeneratorRogue: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTRogue: {}
    },
    // Maze Generators
    levelGeneratorDividedMaze: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTDividedMaze: {}
    },
    levelGeneratorIceyMaze: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTIceyMaze: {}
    },
    levelGeneratorEllerMaze: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTEllerMaze: {}
    },
    // Cellular Automata
    levelGeneratorCellular: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTCellular: {
            iterations: 4,
            randomization: 0.5,
            connected: false
        }
    },
    levelGeneratorCellularCustom: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTCellular: {
            iterations: 49,
            randomization: 0.9,
            born: [4, 5, 6, 7, 8],
            survive: [2, 3, 4, 5],
            connected: false
        }
    },
    levelGeneratorCellularConnected: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: {},
        ROTCellular: {
            iterations: 2,
            randomization: 0.5,
            connected: true
        }
    },
    customLevelRunner: {
        MessageDispatcher: {},
        TargetCameraController: {},
        LevelRenderer2D: {
            debug: false
        },
        LevelRunner: {
            debug: false,
            turnBased: false,
            useFov: true
        }
    }
};
