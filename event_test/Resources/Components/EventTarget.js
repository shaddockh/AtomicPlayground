'atomic component';

module.exports.component = function (self) {

    // Inspector fields will show up in the Atomic Editor scene view to allow editing
    var inspectorFields = {
        debug: false,
    };

    var node = self.node;

    console.log('subscribing to event');
    self.subscribeToEvent('callMe', function (eventData) {
        if (eventData.who === 'DH') {
            console.log('Got a call from Blondie');
        } else {
            console.log('they hung up.');
        }
    });

    self.subscribeToEvent('callBack', function (eventData) {
        console.log('Try to call the callback.');
        eventData.callback('Returning call!');
    });

    self.subscribeToEvent('complexData', function (eventData) {
        console.log('got complex data');
        console.log(eventData.str);
        console.log(eventData.bool);
        console.log(eventData.arr);
        console.log(eventData.obj.name);
    });
    // Start will be called when component is instantiated
    self.start = function () {};

    // Update will be called every cycle
    self.update = function (timeStep) {};
};
