"use strict";
/**
 * Very minimalist message channel.  Will send topic and message to any subscriber
 */
var MessageChannel = (function () {
    function MessageChannel(name) {
        this.debug = false;
        this.lastId = 1;
        this.subscribers = {};
        this.name = name;
    }
    /**
     * subscribe to a message stream
     * @param {function} callback the function to call when a message arrives
     * @return {int} the id of the subscription. Use this to unsubscribe later
     */
    MessageChannel.prototype.subscribe = function (callback) {
        if (this.debug) {
            console.log("subscribing to channel " + this.name);
        }
        var id = this.lastId++;
        this.subscribers[id] = callback;
        return id;
    };
    MessageChannel.prototype.unsubscribe = function (id) {
        if (this.debug) {
            console.log("unsubscribing from channel " + this.name);
        }
        delete this.subscribers[id];
    };
    MessageChannel.prototype.sendMessage = function (topic) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (this.debug) {
            console.log("sending message on channel " + this.name + ": " + topic);
        }
        var handled = false, args;
        for (var id in this.subscribers) {
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
            console.log("message was not handled on channel " + this.name + ": " + topic);
        }
    };
    return MessageChannel;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MessageChannel;
