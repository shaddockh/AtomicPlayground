'use strict';
'atomic component';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cache = Atomic.cache;
var sprites = [];

var Explosion = (function (_Atomic$JSComponent) {
    _inherits(Explosion, _Atomic$JSComponent);

    function Explosion() {
        _classCallCheck(this, Explosion);

        _get(Object.getPrototypeOf(Explosion.prototype), 'constructor', this).apply(this, arguments);

        this.inspectorFields = {
            spriteSheet: ''
        };
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
})(Atomic.JSComponent);

exports['default'] = Explosion;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cGxvc2lvbi5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2Isa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDekIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOztJQUVJLFNBQVM7Y0FBVCxTQUFTOzthQUFULFNBQVM7OEJBQVQsU0FBUzs7bUNBQVQsU0FBUzs7YUFFMUIsZUFBZSxHQUFHO0FBQ2QsdUJBQVcsRUFBRSxFQUFFO1NBQ2xCOzs7aUJBSmdCLFNBQVM7Ozs7ZUFPckIsaUJBQUc7QUFDSixnQkFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixnQkFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDbkIsZ0JBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRXRCLG9CQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEUsb0JBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLHFCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pCLDJCQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRDthQUNKOztBQUVELGdCQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTdELGdCQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQ3JHLGdCQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzVELGdCQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ2pELGdCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNwQzs7Ozs7ZUFHSyxnQkFBQyxRQUFRLEVBQUU7QUFDYixnQkFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUM7QUFDM0IsZ0JBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEVBQUU7QUFDdkIsb0JBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLG9CQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixvQkFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNuQiwwQkFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsMkJBQU87aUJBQ1Y7QUFDRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RTtTQUNKOzs7V0F2Q2dCLFNBQVM7R0FBUyxNQUFNLENBQUMsV0FBVzs7cUJBQXBDLFNBQVMiLCJmaWxlIjoiRXhwbG9zaW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuJ2F0b21pYyBjb21wb25lbnQnO1xuXG52YXIgY2FjaGUgPSBBdG9taWMuY2FjaGU7XG52YXIgc3ByaXRlcyA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3Npb24gZXh0ZW5kcyBBdG9taWMuSlNDb21wb25lbnQge1xuXG4gICAgaW5zcGVjdG9yRmllbGRzID0ge1xuICAgICAgICBzcHJpdGVTaGVldDogJydcbiAgICB9O1xuXG4gICAgLy8gdXNpbmcgc3RhcnQgdG8gaW5pdGlhbGl6ZSB0aGUgc2NyaXB0IGNvbXBvbmVudFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSAwO1xuICAgICAgICBpZiAoc3ByaXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IHRpbWUgY2FjaGVcbiAgICAgICAgICAgIGNvbnN0IGV4cFNoZWV0ID0gY2FjaGUuZ2V0UmVzb3VyY2UoXCJTcHJpdGVTaGVldDJEXCIsIHRoaXMuc3ByaXRlU2hlZXQpO1xuICAgICAgICAgICAgY29uc3QgaSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgaisrKSB7XG4gICAgICAgICAgICAgICAgc3ByaXRlcy5wdXNoKGV4cFNoZWV0LmdldFNwcml0ZShpICsgXCJfXCIgKyBqKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KCdTdGF0aWNTcHJpdGUyRCcpLnNwcml0ZSA9IHNwcml0ZXNbMF07XG4gICAgICAgIC8vbm9kZS5wb3NpdGlvbjJEID0gbm9kZS5Qb3NpdGlvbi5zcGF3blBvc2l0aW9uO1xuICAgICAgICBjb25zdCBib29tU291bmQgPSBjYWNoZS5nZXRSZXNvdXJjZShcIlNvdW5kXCIsIFwiU291bmRzL2Jvb21cIiArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oMCwgMSkpICsgXCIud2F2XCIpO1xuICAgICAgICB0aGlzLnNvdW5kU291cmNlID0gdGhpcy5ub2RlLmNyZWF0ZUNvbXBvbmVudChcIlNvdW5kU291cmNlXCIpO1xuICAgICAgICB0aGlzLnNvdW5kU291cmNlLnNvdW5kVHlwZSA9IEF0b21pYy5TT1VORF9FRkZFQ1Q7XG4gICAgICAgIHRoaXMuc291bmRTb3VyY2UucGxheShib29tU291bmQpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiBjYWxsZWQgcGVyIGZyYW1lIHdpdGggZGVsdGEgdGltZVxuICAgIHVwZGF0ZSh0aW1lU3RlcCkge1xuICAgICAgICB0aGlzLmZyYW1lVGltZSArPSB0aW1lU3RlcDtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVUaW1lID4gMC4wNSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVRpbWUgPSAwO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSsrO1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWUgPT09IDE2KSB7XG4gICAgICAgICAgICAgICAgQXRvbWljLmRlc3Ryb3kodGhpcy5ub2RlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KCdTdGF0aWNTcHJpdGUyRCcpLnNwcml0ZSA9IHNwcml0ZXNbdGhpcy5mcmFtZV07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=