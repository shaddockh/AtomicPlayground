export const levelGenerators = {


    baseLevelGenerator: {
    
        //LevelRenderer2D: {}
    },

    // TODO: create separate components for each class of generator Maze, Dungeon, Cellular, Custom
    // Dungeon Based Generators
    levelGeneratorDigger: {
        inherits: 'baseLevelGenerator',
        LevelRenderer2D: { },
        ROTDigger: {
            roomWidth: [2, 2], /* room minimum and maximum width */
        }
    },
    baseLevelGenerator2: {
        LevelGenerator: {
            width: 80,
            height: 25,
            strategy: 'Digger',
            iterations: 1,
            strategyOptions: {

            }
        }
    },
    levelGeneratorUniform: {
        inherits: 'baseLevelGenerator',
        LevelGenerator: {
            strategy: 'Uniform'
        }
    },
    levelGeneratorRogue: {
        inherits: 'baseLevelGenerator',
        LevelGenerator: {
            strategy: 'Rogue'
        }
    },


    // Maze Generators
    levelGeneratorDividedMaze: {
        inherits: 'baseLevelGenerator',
        LevelGenerator: {
            strategy: 'DividedMaze'
        }
    },
    levelGeneratorIceyMaze: {
        inherits: 'baseLevelGenerator',
        LevelGenerator: {
            strategy: 'IceyMaze'
        }
    },
    levelGeneratorEllerMaze: {
        inherits: 'baseLevelGenerator',
        LevelGenerator: {
            strategy: 'EllerMaze'
        }
    },

    // Cellular Automata
    levelGeneratorCellular: {
        inherits: 'baseLevelGenerator',
        LevelGenerator: {
            strategy: 'Cellular',
            iterations: 4,
            strategyOptions: {
                randomization: 0.5
            }
        }
    },

    levelGeneratorCellularCustom: {
        inherits: 'baseLevelGenerator',
        LevelGenerator: {
            strategy: 'Cellular',
            iterations: 49,
            strategyOptions: {
                randomization: 0.9,
                born: [4,5,6,7,8],
                survive: [2, 3, 4, 5]
            }
        }
    }
};
