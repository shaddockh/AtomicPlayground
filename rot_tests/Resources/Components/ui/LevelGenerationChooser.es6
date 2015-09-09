'atomic component';
import { nodeBuilder, blueprintCatalog } from 'atomic-blueprintLib';
import * as triggerEvent from 'atomicTriggerEvent';

export default class LevelGenerationChooser extends Atomic.JSComponent {

    constructor() {
        super();
        this.generatorNode = null;
        this.runNode = null;
        this.runButton = null;
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

    loadScene(builderName) {
        this.clearGeneratedContent();
        this.generatorNode = nodeBuilder.createChild(this.node.scene, builderName);
        this.runButton.setState(1 /*WIDGET_STATE_DISABLED*/, false);
    }

    runLoadedScene() {
        let mapData = triggerEvent.trigger(this.generatorNode, 'onGetMapData');
        // we are getting an array back, so grab the first element
        mapData = mapData[0];
        this.runButton.setState(1 /*WIDGET_STATE_DISABLED*/, true);
        this.clearGeneratedContent();
        this.runNode = nodeBuilder.createChild(this.node.scene, 'customLevelRunner');
        triggerEvent.trigger(this.runNode, 'onSetMapData', mapData);
    }

    start() {
        this.build();
    }

    build() {
        //layout.setSize(game.graphics.width, game.graphics.height);
        const view = new Atomic.UIView();
        const layout = new Atomic.UIWidget();
        layout.rect = [0, 0, 300, Atomic.graphics.height];
        layout.load("Ui/levelgen_selector.ui.txt");
        view.addChild(layout);

        const selectList = layout.getWidget('selGenerators');
        const selectSource = new Atomic.UISelectItemSource();

        blueprintCatalog.find(blueprint => {
            if (blueprint.inherits === 'baseLevelGenerator') {
                selectSource.addItem(new Atomic.UISelectItem(blueprint.name, blueprint.name));
                return true;
            }
        });

        selectList.setSource(selectSource);

        this.runButton = layout.getWidget('btnRun');
        this.runButton.subscribeToEvent(this.runButton, "WidgetEvent", (eventData) => {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            this.runLoadedScene(selectList.selectedItemID);
        });

        let button = layout.getWidget('btnGenerate');
        button.subscribeToEvent(button, "WidgetEvent", (eventData) => {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            this.loadScene(selectList.selectedItemID);
        });
    }
}
