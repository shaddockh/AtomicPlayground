import channel from 'channels';
import Hud from './hud.ui';
import LevelGenSelector from './levelgen_selector.ui';
import EndGameUi from './endgame.ui';
import LogUi from './log.ui';
import Instructions from './instructions.ui';

const baseUi = new Atomic.UIView();
const windowRefs = {};
const channelId = channel('ui').subscribe(handleChannelMessages);

channel('game').subscribe((topic) => {
    if (topic === 'shutdown:game') {
        channel('ui').unsubscribe(channelId);
    }
});

function launchWindow(name, windowInstance, messageParms) {
        windowRefs[name] = windowInstance;
        windowInstance.openWindow.apply(windowInstance, messageParms);
}

function handleChannelMessages(topic, ...messageParms) {
    switch (topic) {
    case 'show:hud':
        launchWindow('hud', new Hud(baseUi), messageParms);
        break;

    case 'show:levelgen':
        launchWindow('levelgen', new LevelGenSelector(baseUi), messageParms);
        break;

    case 'show:endgame':
        launchWindow('endgame', new EndGameUi(baseUi), messageParms);
        break;

    case 'show:instructions':
        launchWindow('instructions', new Instructions(baseUi), messageParms);
        break;

    case 'show:log':
        launchWindow('log', new LogUi(baseUi), messageParms);
        break;
    }
}

