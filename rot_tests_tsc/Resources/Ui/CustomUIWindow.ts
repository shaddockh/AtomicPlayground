import { uiChannel } from '../Modules/gameChannels';

/**
 * wrapper to be used for ui windows.  Will handle loading up the layout and
 * setting some properties.
 */
export default class CustomUIWindow {
    window: Atomic.UIWindow = null;

    channelTopics = {};

    layoutFilename: string = null;
    uiView: Atomic.UIView = null;
    private channelId: number;

    constructor(uiView, layoutFilename) {
        this.layoutFilename = layoutFilename;
        this.uiView = uiView;
        this.channelId = uiChannel.subscribe((topic, ...messageParms) => {
            if (topic in this.channelTopics) {
                this.channelTopics[topic].apply(this, messageParms);
            }
        });
    }

    openWindow(options = {
        windowSettings: Atomic.UI_WINDOW_SETTINGS.UI_WINDOW_SETTINGS_TITLEBAR
    }) {

        const window = this.window = new Atomic.UIWindow();
        window.settings = options.windowSettings;
        window.load(this.layoutFilename);
        window.resizeToFitContent();

        this.uiView.addChild(window);
    }

    closeWindow() {
        if (this.window) {
            this.window.die();
            this.window = null;
        }
        uiChannel.unsubscribe(this.channelId);
    }
}
