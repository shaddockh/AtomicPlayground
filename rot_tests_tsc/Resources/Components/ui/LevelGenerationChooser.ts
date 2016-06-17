'atomic component';
import * as blueprintlib from 'atomic-blueprintlib';
import * as triggerEvent from 'atomicTriggerEvent';
import { uiChannel, levelChannel } from '../../Modules/gameChannels';

class LevelGenerationChooser extends Atomic.JSComponent {

    generatorNode: Atomic.Node = null;
    runNode: Atomic.Node = null;
    runButton: Atomic.UIButton = null;

    private channelId: number;

    constructor() {
        super();
        this.generatorNode = null;
        this.runNode = null;
        this.runButton = null;
    }

    start() {
        // NOTE: the fat arrow function doesn't work quite in the same way as babel, so need to capture 'this'
        const that = this;
        this.channelId = levelChannel.subscribe((topic, ...messages) => {
            switch (topic) {
                case 'preview:level':
                    that.previewLevel.apply(that, messages);
                    break;
                case 'run:level':
                    that.runLevel.apply(that, messages);
                    break;
                case 'show:levelgen':
                    that.showLevelGen.apply(that, messages);
                    break;
            }
        });

        this.showLevelGen();
    }

    showLevelGen() {
        let blueprints = blueprintlib.catalog.find(blueprint => blueprint.inherits === 'baseLevelGenerator');
        uiChannel.sendMessage('show:levelgen', blueprints);
        triggerEvent.trigger(this.node, 'onChoose');
    }

    previewLevel(builderName) {
        this.clearGeneratedContent();
        this.generatorNode = blueprintlib.createChild(this.node.scene, builderName);
    }

    runLevel() {
        let mapData = triggerEvent.trigger(this.generatorNode, 'onGetMapData');
        // we are getting an array back, so grab the first element
        mapData = mapData[0];
        this.clearGeneratedContent();
        this.runNode = blueprintlib.createChild(this.node.scene, 'customLevelRunner');
        triggerEvent.trigger(this.runNode, 'onSetMapData', mapData);
        triggerEvent.trigger(this.node, 'onRun');
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
export = LevelGenerationChooser;
