/**
 * Very minimalist message channel.  Will send topic and message to any subscriber
 */
export default class MessageChannel {
    debug = false;

    name:string;

    constructor(name) {
        this.name = name;
    }

    lastId = 1;
    subscribers = {};

    /**
     * subscribe to a message stream
     * @param {function} callback the function to call when a message arrives
     * @return {int} the id of the subscription. Use this to unsubscribe later
     */
    subscribe(callback:(topic: string, ...messageArguments) => void):number {
        if (this.debug) {
            console.log(`subscribing to channel ${this.name}`);
        }
        let id = this.lastId++;
        this.subscribers[id] = callback;
        return id;
    }

    unsubscribe(id) {
        if (this.debug) {
            console.log(`unsubscribing from channel ${this.name}`);
        }
        delete this.subscribers[id];
    }

    sendMessage(topic, ...messages) {
        if (this.debug) {
            console.log(`sending message on channel ${this.name}: ${topic}`);
        }
        let handled = false,
            args;
        for (let id in this.subscribers) {
            if (this.subscribers[id]) {
                if (this.debug) {
                    console.log('sending to subscriber');
                }
                args = args || [topic].concat(Array.prototype.slice.call(messages, 0));
                this.subscribers[id].apply(this.subscribers[id], args);
                handled = true;
            }
        }
        if (!handled && this.debug) {
            console.log(`message was not handled on channel ${this.name}: ${topic}`);
        }
    }
}
