'use strict';
'atomic component';
// Atomic Component

const input = Atomic.input;
class TouchInput extends Atomic.JSComponent {
    start() {
        // input.setTouchEmulation(true);
        var layout = Atomic.cache.getResource("XMLFile", "Data/ScreenJoystick.xml");
        var uiStyle = Atomic.cache.getResource("XMLFile", "UI/DefaultStyle.xml");
        input.addScreenJoystick(layout, uiStyle);
    }
}

module.exports = TouchInput;
