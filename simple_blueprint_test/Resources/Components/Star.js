'atomic component';

module.exports.component = function (self) {

    var inspectorFields = {
        speed: 100
    };

    var node = self.node;

    self.start = function () {
        console.log(self.speed);
    };

    self.update = function (timeStep) {
        node.roll(timeStep * self.speed);
    };
};
