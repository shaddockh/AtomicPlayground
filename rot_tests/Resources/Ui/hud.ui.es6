import CustomUIWindow from './CustomUIWindow';
import channel from 'channels';

export default class Hud extends CustomUIWindow {

    channelTopics = {
        'hide:hud': this.closeWindow,
        'bind:hud': this.bindModel
    };

    constructor(uiView) {
        super(uiView, 'Ui/hud.ui.tb');
    }

    openWindow() {
        super.openWindow();

        let wnd = this.window;
        wnd.setRect([0, Atomic.graphics.height - 50, Atomic.graphics.width, Atomic.graphics.height]);

        this.health = wnd.getWidget('txtHealth');
        this.enemies = wnd.getWidget('txtRemaining');
        this.turnCount = wnd.getWidget('txtTurnCount');

        channel('ui').sendMessage('show:log');
        channel('ui').sendMessage('show:instructions');

    }

    bindModel(model) {
        this.health.setText(model.health);
        this.enemies.setText(model.enemiesRemaining);
        this.turnCount.setText(model.turnCount);
    }

    closeWindow() {
        super.closeWindow();
        channel('ui').sendMessage('hide:log');
    }
}
