declare module 'atomic-blueprintLib' {
    module nodeBuilder {
        export function createChild(parent: Atomic.Node, blueprint: string): Atomic.Node;
        export function createChild(parent: Atomic.Node, blueprint: Object): Atomic.Node;
        export function createChildAtPosition(parent: Atomic.Node, blueprint: string, spawnPosition: any): Atomic.Node;
        export function createChildAtPosition(parent: Atomic.Node, blueprint: Object, spawnPosition: any): Atomic.Node;
        export function getBlueprint(blueprint: string);
        export function generatePrefabs();
        export function setDebug(val: boolean);
    }

    module blueprintCatalog {
        export function find(callback: (blueprint: any) => void): any;
        export function find(callback: (blueprint: any) => boolean): any;
        export function loadBlueprints(tiles: Object, loader: (blueprint) => void);
        export function hydrateAllBlueprints();
    }
}
