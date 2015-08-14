'atomic component';

module.exports = function (self) {

    var inspectorFields = {
        speed: 100
    };

    var game = Atomic.game;
    var node = self.node;

    self.start = function () {
        console.log(self.speed);
    };

    self.update = function (timeStep) {
        node.roll(timeStep * self.speed);
    };
};
