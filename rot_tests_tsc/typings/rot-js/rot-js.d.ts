declare module 'rot-js' {
    module ROT {

        module Path {
            class AStar {
                constructor(x: number, y: number, callback: (checkX: number, checkY: number) => void, options: any);

                compute(x: number, y: number, callback: (x: number, y: number) => void);
            }
        }

        module Scheduler {
            interface IScheduler { }

            class Simple implements IScheduler {

            }
        }
        module FOV {
            class RecursiveShadowcasting {
                constructor(callback: (x: number, y: number) => boolean);
            }
        }

        module Map {
            interface IMap {
                create(callback: (x: number, y: number, value: number) => void);
            }

            class Cellular implements IMap {
                constructor(width: number, height: number, options: any);
                randomize(randomizationSeed: number);
                create(callback: (x: number, y: number, value: number) => void);
            }

            class Digger implements IMap {
                constructor(width: number, height: number, options: any);
                create(callback: (x: number, y: number, value: number) => void);
                getRooms(): Array<Array<number>>;
            }

            class DividedMaze implements IMap {
                constructor(width: number, height: number, options: any);
                create(callback: (x: number, y: number, value: number) => void);
            }

            class EllerMaze implements IMap {
                constructor(width: number, height: number, options: any);
                create(callback: (x: number, y: number, value: number) => void);
            }

            class IceyMaze implements IMap {
                constructor(width: number, height: number, options: any);
                create(callback: (x: number, y: number, value: number) => void);
            }

            class Rogue implements IMap {
                constructor(width: number, height: number, options: any);
                create(callback: (x: number, y: number, value: number) => void);
            }

            class Uniform implements IMap {
                constructor(width: number, height: number, options: any);
                create(callback: (x: number, y: number, value: number) => void);
                getRooms(): Array<Array<number>>;
            }

        }

        class Engine {
            constructor(scheduler: Scheduler.IScheduler);
        }
    }

    export = ROT;
}
