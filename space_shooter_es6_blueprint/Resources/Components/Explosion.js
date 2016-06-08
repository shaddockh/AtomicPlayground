'use strict';
'atomic component';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cache = Atomic.cache;
var sprites = [];

var Explosion = function (_Atomic$JSComponent) {
    _inherits(Explosion, _Atomic$JSComponent);

    function Explosion() {
        _classCallCheck(this, Explosion);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Explosion).apply(this, arguments));
    }

    _createClass(Explosion, [{
        key: 'start',


        // using start to initialize the script component
        value: function start() {
            this.frame = 0;
            this.frameTime = 0;
            if (sprites.length === 0) {
                // first time cache
                var expSheet = cache.getResource("SpriteSheet2D", this.spriteSheet);
                var i = Math.round(Math.random() * 7);
                for (var j = 0; j < 16; j++) {
                    sprites.push(expSheet.getSprite(i + "_" + j));
                }
            }

            this.node.getComponent('StaticSprite2D').sprite = sprites[0];
            //node.position2D = node.Position.spawnPosition;
            var boomSound = cache.getResource("Sound", "Sounds/boom" + Math.round(Math.random(0, 1)) + ".wav");
            this.soundSource = this.node.createComponent("SoundSource");
            this.soundSource.soundType = Atomic.SOUND_EFFECT;
            this.soundSource.play(boomSound);
        }

        // update function called per frame with delta time

    }, {
        key: 'update',
        value: function update(timeStep) {
            this.frameTime += timeStep;
            if (this.frameTime > 0.05) {
                this.frameTime = 0;
                this.frame++;
                if (this.frame === 16) {
                    Atomic.destroy(this.node);
                    return;
                }
                this.node.getComponent('StaticSprite2D').sprite = sprites[this.frame];
            }
        }
    }]);

    return Explosion;
}(Atomic.JSComponent);

Explosion.inspectorFields = {
    spriteSheet: ''
};


module.exports = Explosion;