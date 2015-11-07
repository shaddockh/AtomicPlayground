import CustomUIWindow from './CustomUIWindow';

export default class Hud extends CustomUIWindow {

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

        this.messageWindow = wnd.getWidget('txtMessages');
        this.messageWindow.setWrapping(1);
    }

    addMessage(message) {
        this.messageWindow.appendText(message + '\n');
        this.messageWindow.scrollTo(0, 0xffffff);
    }
}
