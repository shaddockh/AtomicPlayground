import { levelChannel } from '../Modules/gameChannels';
import CustomUIWindow from './CustomUIWindow';

export default class LevelGenSelector extends CustomUIWindow {

    runButton:Atomic.UIButton = null;

    channelTopics = {
        'hide:levelGen': this.closeWindow
    };

    constructor(uiView) {
        super(uiView, 'Ui/levelgen_selector.ui.tb');
    }

    openWindow(blueprints) {
        super.openWindow();

        let wnd = this.window;
        wnd.setRect([0, 0, 300, Atomic.graphics.height]);

        const selectList = wnd.getWidget<Atomic.UISelectList>('selGenerators');
        const selectSource = new Atomic.UISelectItemSource();
        for (let i = 0; i < blueprints.length; i++) {
            selectSource.addItem(new Atomic.UISelectItem(blueprints[i].name, blueprints[i].name));
        }
        selectList.setSource(selectSource);

        this.runButton = wnd.getWidget<Atomic.UIButton>('btnRun');
        this.runButton.subscribeToEvent(this.runButton, 'WidgetEvent', (eventData) => {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            levelChannel.sendMessage('run:level', selectList.selectedItemID);
            this.runButton.setState(Atomic.UI_WIDGET_STATE_DISABLED, true);
            this.closeWindow();
        });

        let button = wnd.getWidget<Atomic.UIButton>('btnGenerate');
        button.subscribeToEvent(button, 'WidgetEvent', (eventData) => {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            levelChannel.sendMessage('preview:level', selectList.selectedItemID);
            this.runButton.setState(Atomic.UI_WIDGET_STATE_DISABLED, false);
        });
    }
}
