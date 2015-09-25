import channel from 'channels';

class CustomUIWindow {
    window = null;

    constructor(uiView, layoutFilename) {
        this.layoutFilename = layoutFilename;
        this.uiView = uiView;

    }

    openWindow() {

        const window = this.window = new Atomic.UIWindow();
        window.settings = Atomic.UI.WINDOW_SETTINGS_TITLEBAR;
        window.load(this.layoutFilename);
        window.resizeToFitContent();

        this.uiView.addChild(window);
    }

    closeWindow() {

    }
}

export default class LevelGenSelector extends CustomUIWindow {

    constructor(uiView) {
        super(uiView, 'Ui/levelgen_selector.ui.txt');
    }

    openWindow(blueprints) {
        super.openWindow();
        console.log('b');

        let wnd = this.window;
        wnd.setRect( [0, 0, 300, Atomic.graphics.height] );
        //wnd.setPosition(0,0);
        //wnd.setSize(300, Atomic.graphics.height);
        //wnd.center();

        const selectList = wnd.getWidget('selGenerators');
        const selectSource = new Atomic.UISelectItemSource();
        for (let i = 0; i < blueprints.length; i++) {
            selectSource.addItem(new Atomic.UISelectItem(blueprints[i].name, blueprints[i].name));
        }
        selectList.setSource(selectSource);

        this.runButton = wnd.getWidget('btnRun');
        this.runButton.subscribeToEvent(this.runButton, "WidgetEvent", (eventData) => {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            channel('level').sendMessage('run:level', selectList.selectedItemID);
            this.runButton.setState(Atomic.UI_WIDGET_STATE_DISABLED, true);
        });

        let button = wnd.getWidget('btnGenerate');
        button.subscribeToEvent(button, "WidgetEvent", (eventData) => {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            channel('level').sendMessage('preview:level', selectList.selectedItemID);
            this.runButton.setState(Atomic.UI_WIDGET_STATE_DISABLED, false);
        });
    }
}
