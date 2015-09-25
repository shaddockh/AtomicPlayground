import channel from 'channels';
import hud from './hud.ui';
import LevelGenSelector from './levelgen_selector.ui';

// first time subscription

const channelId = channel('ui').subscribe(handleChannelMessages);
let levelgenInst = null;

const baseUi = new Atomic.UIView();

function handleChannelMessages(topic, ...messageParms) {
    switch (topic) {
    case 'display:hud':
        hud.show();
        break;
    case 'hide:hud':
        hud.hide();
        break;

    case 'show:levelgen':
        levelgenInst = new LevelGenSelector(baseUi);
        levelgenInst.openWindow.apply(levelgenInst, messageParms);
        break;
    case 'hide:levelgen':
        levelgenInst.closeWindow.apply(levelgenInst, messageParms);
        break;

    }
}

export function shutdown() {
    channel('ui').unsubscribe(channelId);
}
