import CustomUIWindow from './CustomUIWindow';
import { uiChannel } from '../Modules/gameChannels';

export default class Hud extends CustomUIWindow {

    health:Atomic.UITextField;
    enemies:Atomic.UITextField;
    turnCount:Atomic.UITextField;

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

        this.health = wnd.getWidget<Atomic.UITextField>('txtHealth');
        this.enemies = wnd.getWidget<Atomic.UITextField>('txtRemaining');
        this.turnCount = wnd.getWidget<Atomic.UITextField>('txtTurnCount');

        uiChannel.sendMessage('show:log');
        uiChannel.sendMessage('show:instructions');

    }

    bindModel(model) {
        this.health.setText(model.health);
        this.enemies.setText(model.enemiesRemaining);
        this.turnCount.setText(model.turnCount);
    }

    closeWindow() {
        super.closeWindow();
        uiChannel.sendMessage('hide:log');
    }
}
