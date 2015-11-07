import CustomUIWindow from './CustomUIWindow';
import {uiChannel, levelChannel, gameChannel} from 'gameChannels';

export default class EndGameUi extends CustomUIWindow {

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
        this.txtEndGameReason = wnd.getWidget('txtEndGameReason');

        wnd.getWidget('btnGenerate').onClick = () => {
            this.closeWindow();
            uiChannel.sendMessage('hide:hud');
            levelChannel.sendMessage('show:levelgen');
        };

        wnd.getWidget('btnExit').onClick = () => {
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
