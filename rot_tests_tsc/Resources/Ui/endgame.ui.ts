import CustomUIWindow from './CustomUIWindow';
import {uiChannel, levelChannel, gameChannel} from '../Modules/gameChannels';

export default class EndGameUi extends CustomUIWindow {

    txtEndGameReason:Atomic.UITextField;

    channelTopics = {
        'hide:endgame': this.closeWindow,
        'bind:endgame': this.bindModel
    };

    constructor(uiView) {
        super(uiView, 'Ui/endgame.ui.tb');
    }

    openWindow(model) {
        super.openWindow();

        let wnd = this.window;
        wnd.text = 'Game Over';
        this.txtEndGameReason = wnd.getWidget<Atomic.UITextField>('txtEndGameReason');

        wnd.getWidget<Atomic.UIButton>('btnGenerate').onClick = () => {
            this.closeWindow();
            uiChannel.sendMessage('hide:hud');
            levelChannel.sendMessage('show:levelgen');
        };

        wnd.getWidget<Atomic.UIButton>('btnExit').onClick = () => {
            this.closeWindow();
            gameChannel.sendMessage('shutdown:game');
        };

        if (model) {
            this.bindModel(model);
        }

        wnd.center();
    }

    bindModel(model) {
        this.txtEndGameReason.setText(model.endGameReason);
    }
}
