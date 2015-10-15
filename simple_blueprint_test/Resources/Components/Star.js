'atomic component';

module.exports.component = function (self) {

    // Inspector fields will show up in the Atomic Editor scene view to allow editing
    var inspectorFields = {
        speed: 100,
    };

    var node = self.node;

    // Start will be called when component is instantiated
    self.start = function () {
        console.log(self.speed);
    };

    // Update will be called every cycle
    self.update = function (timeStep) {
        node.roll(timeStep * self.speed);
    };
};
