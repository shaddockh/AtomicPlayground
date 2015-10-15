import channel from 'channels';

/**
 * wrapper to be used for ui windows.  Will handle loading up the layout and
 * setting some properties.
 */
export default class CustomUIWindow {
    window = null;

    channelTopics = {};

    constructor(uiView, layoutFilename) {
        this.layoutFilename = layoutFilename;
        this.uiView = uiView;
        this.channelId = channel('ui').subscribe((topic, ...messageParms) => {
            if (topic in this.channelTopics) {
                this.channelTopics[topic].apply(this, messageParms);
            }
        });
    }

    openWindow() {

        const window = this.window = new Atomic.UIWindow();
        window.settings = Atomic.UI.WINDOW_SETTINGS_TITLEBAR;
        window.load(this.layoutFilename);
        window.resizeToFitContent();

        this.uiView.addChild(window);
    }

    closeWindow() {
        if (this.window) {
            this.window.die();
            this.window = null;
        }
        channel('ui').unsubscribe(this.channelId);
    }
}
