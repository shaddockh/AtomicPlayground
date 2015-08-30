'atomic component';
import { nodeBuilder, blueprintCatalog } from 'atomic-blueprintLib';
import * as triggerEvent from 'atomicTriggerEvent';

export default class LevelGenerationChooser extends Atomic.JSComponent {

    constructor() {
        super();
        this.dialog = null;
        this.generatorNode = null;
        this.buttonDef = null;
    }

    loadScene(builderName) {
        if (this.generatorNode) {

            triggerEvent.trigger(this.generatorNode, 'onClear');

            Atomic.destroy(this.generatorNode);
            this.generatorNode = null;
        }
        this.generatorNode = nodeBuilder.createChild(this.node.scene, builderName);
    }

    start() {
        this.build();
    }

    build() {
        //layout.setSize(game.graphics.width, game.graphics.height);
        var view = new Atomic.UIView();
        var layout = new Atomic.UIWidget();
        layout.rect = [0, 0, 300, Atomic.graphics.height];
        layout.load("Ui/levelgen_selector.ui.txt");
        view.addChild(layout);

        var selectList = layout.getWidget('selGenerators');
        var selectSource = new Atomic.UISelectItemSource();

        blueprintCatalog.find(blueprint => {
            if (blueprint.inherits === 'baseLevelGenerator') {
                selectSource.addItem(new Atomic.UISelectItem(blueprint.name, blueprint.name));
                return true;
            }
        });

        selectList.setSource(selectSource);

        let button = layout.getWidget('btnGenerate');
        button.subscribeToEvent(button, "WidgetEvent", (eventData) => {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            if (eventData.target && eventData.target.id === 'btnGenerate') {
                this.loadScene(selectList.selectedItemID);
            }
        });
    }
}
