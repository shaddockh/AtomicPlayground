'use strict';
"atomic component";
// Atomic Component

module.exports.component = function (self) {
    var node = self.node;
    var input = Atomic.input;

    self.start = function start() {
        // input.setTouchEmulation(true);
        var layout = Atomic.cache.getResource("XMLFile", "Data/ScreenJoystick.xml");
        var uiStyle = Atomic.cache.getResource("XMLFile", "UI/DefaultStyle.xml");
        input.addScreenJoystick(layout, uiStyle);
    };

    self.update = function update(timeStep) {

    };
};
