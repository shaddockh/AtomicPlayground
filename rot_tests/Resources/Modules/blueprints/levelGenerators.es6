export const levelGenerators = {


    baseLevelGenerator: {
        LevelGenerator: {
            width: 80,
            height: 25,
            strategy: 'Digger',
            iterations: 1,
            strategyOptions: {

            }
        }
    },

    // TODO: create separate components for each class of generator Maze, Dungeon, Cellular, Custom
    // Dungeon Based Generators
    levelGeneratorDigger: {
        inherits: 'baseLevelGenerator',
        LevelGenerator: {
            strategy: 'Digger'
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
