import CustomUIWindow from './CustomUIWindow';

export default class Hud extends CustomUIWindow {

    messageWindow: Atomic.UIEditField = null;
    channelTopics = {
        'hide:log': this.closeWindow,
        'log:addmessage': this.addMessage
    };

    constructor(uiView) {
        super(uiView, 'Ui/log.ui.tb');
    }

    openWindow() {
        super.openWindow();

        let wnd = this.window;
        wnd.setRect([0, Atomic.graphics.height - 150, 300, Atomic.graphics.height - 50]);

        this.messageWindow = wnd.getWidget<Atomic.UIEditField>('txtMessages');
        this.messageWindow.setWrapping(true);
    }

    addMessage(message) {
        this.messageWindow.appendText(message + '\n');
        this.messageWindow.scrollTo(0, 0xffffff);
    }
}
