'atomic component';
import {
    nodeBuilder, blueprintCatalog
}
from 'atomic-blueprintLib';
import * as triggerEvent from 'atomicTriggerEvent';
import channel from 'channels';

const uiChannel = channel('ui');
const levelChannel = channel('level');

export default class LevelGenerationChooser extends Atomic.JSComponent {

    constructor() {
        super();
        this.generatorNode = null;
        this.runNode = null;
        this.runButton = null;
    }

    start() {
        this.channelId = levelChannel.subscribe((topic, ...messages) => {
            switch (topic) {
                case 'preview:level':
                    this.previewLevel.apply(this, messages);
                    break;
                case 'run:level':
                    this.runLevel.apply(this, messages);
                    break;
                case 'show:levelgen':
                    this.showLevelGen.apply(this, messages);
                    break;
            }
        });

        this.showLevelGen();
    }

    showLevelGen() {
        let blueprints = [];
        blueprintCatalog.find(blueprint => {
            if (blueprint.inherits === 'baseLevelGenerator') {
                blueprints.push(blueprint);
            }
        });
        uiChannel.sendMessage('show:levelgen', blueprints);
    }

    previewLevel(builderName) {
        this.clearGeneratedContent();
        this.generatorNode = nodeBuilder.createChild(this.node.scene, builderName);
    }

    runLevel() {
        let mapData = triggerEvent.trigger(this.generatorNode, 'onGetMapData');
        // we are getting an array back, so grab the first element
        mapData = mapData[0];
        this.clearGeneratedContent();
        this.runNode = nodeBuilder.createChild(this.node.scene, 'customLevelRunner');
        triggerEvent.trigger(this.runNode, 'onSetMapData', mapData);
    }

    clearGeneratedContent() {
        if (this.generatorNode) {
            // Tell the generator node to remove all it's children
            // TODO: think of a better way
            triggerEvent.trigger(this.generatorNode, 'onClear');
            Atomic.destroy(this.generatorNode);
            this.generatorNode = null;
        }
        if (this.runNode) {
            // Tell the generator node to remove all it's children
            // TODO: think of a better way
            triggerEvent.trigger(this.runNode, 'onClear');
            Atomic.destroy(this.runNode);
            this.runNode = null;
        }
    }
}
