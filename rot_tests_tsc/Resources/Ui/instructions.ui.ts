import CustomUIWindow from './CustomUIWindow';

export default class InstructionsUi extends CustomUIWindow {

    channelTopics = {
        'hide:instructions': this.closeWindow
    };

    constructor(uiView) {
        super(uiView, 'Ui/instructions.ui.tb');
    }

    openWindow(/*model*/) {
        super.openWindow();

        let wnd = this.window;
        wnd.setRect([0, 0, 400, 300]);

        wnd.getWidget<Atomic.UIButton>('btnClose').onClick = () => {
            this.closeWindow();
        };

        wnd.center();
    }
}
