Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _atomicTriggerEvent = require('atomicTriggerEvent');

var triggerEvent = _interopRequireWildcard(_atomicTriggerEvent);

'use strict';
'atomic component';

var SpaceGame = Globals.SpaceGame;

var Bullet = (function (_Atomic$JSComponent) {
    _inherits(Bullet, _Atomic$JSComponent);

    function Bullet() {
        _classCallCheck(this, Bullet);

        _get(Object.getPrototypeOf(Bullet.prototype), 'constructor', this).apply(this, arguments);

        this.inspectorFields = {
            isPlayer: false,
            laserSound: '',
            speed: 5
        };
    }

    _createClass(Bullet, [{
        key: 'start',
        value: function start() {
            this.laserSound = Atomic.cache.getResource("Sound", this.laserSound);
            this.soundSource = this.node.createComponent("SoundSource");
            this.soundSource.soundType = Atomic.SOUND_EFFECT;
            this.soundSource.gain = 0.75;
            if (!this.isPlayer) {
                this.node.roll(180);
            }
            this.soundSource.play(this.laserSound);
        }
    }, {
        key: 'updateEnemyBullet',
        value: function updateEnemyBullet() {

            var bpos = this.node.position2D;

            // off the bottom of the screen
            if (bpos[1] < -SpaceGame.halfHeight) {
                return true;
            }

            if (SpaceGame.player) {

                var epos = SpaceGame.player.node.worldPosition2D;

                if (Math.abs(epos[0] - bpos[0]) < 0.25 && Math.abs(epos[1] - bpos[1]) < 0.25) {

                    // Need to come back to the event system later..not working as expected.
                    //SpaceGame.player.node.sendEvent('onPlayerHit', { x: bpos[0], y: bpos[1] });
                    triggerEvent.trigger(SpaceGame.player.node, 'onHit', bpos);

                    return true;
                }
            }
        }
    }, {
        key: 'updatePlayerBullet',
        value: function updatePlayerBullet() {

            var bpos = this.node.position2D;

            // off the top of the screen
            if (bpos[1] > SpaceGame.halfHeight) {
                return true;
            }

            // Manually checking for collisions
            for (var i = 0; i < SpaceGame.enemies.length; i++) {

                var enemy = SpaceGame.enemies[i];
                var epos = enemy.node.worldPosition2D;

                if (Math.abs(epos[0] - bpos[0]) < 0.25 && Math.abs(epos[1] - bpos[1]) < 0.25) {

                    // Need to come back to the event system later..not working as expected.
                    //enemy.node.sendEvent('onEnemyHit', bpos);
                    triggerEvent.trigger(enemy.node, 'onHit', bpos);
                    return true;
                }
            }

            if (SpaceGame.capitalShipNode) {
                var epos2 = SpaceGame.capitalShipNode.worldPosition2D;

                if (Math.abs(epos2[0] - bpos[0]) < 0.75 && Math.abs(epos2[1] - bpos[1]) < 0.75) {

                    // Need to come back to the event system later..not working as expected.
                    //SpaceGame.capitalShipNode.sendEvent('onHit', bpos);
                    triggerEvent.trigger(SpaceGame.capitalShipNode, 'onHit', bpos);
                    return true;
                }
            }
        }
    }, {
        key: 'update',
        value: function update(timeStep) {

            var speed = this.speed * timeStep;
            this.node.translate2D([0, speed]);

            if (this.isPlayer) {
                if (this.updatePlayerBullet()) {
                    Atomic.destroy(this.node);
                }
            } else {
                if (this.updateEnemyBullet()) {
                    Atomic.destroy(this.node);
                }
            }
        }
    }]);

    return Bullet;
})(Atomic.JSComponent);

exports['default'] = Bullet;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1bGxldC5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0NBRzhCLG9CQUFvQjs7SUFBdEMsWUFBWTs7QUFIeEIsWUFBWSxDQUFDO0FBQ2Isa0JBQWtCLENBQUM7O0FBSW5CLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7O0lBRWYsTUFBTTtjQUFOLE1BQU07O2FBQU4sTUFBTTs4QkFBTixNQUFNOzttQ0FBTixNQUFNOzthQUV2QixlQUFlLEdBQUc7QUFDZCxvQkFBUSxFQUFFLEtBQUs7QUFDZixzQkFBVSxFQUFFLEVBQUU7QUFDZCxpQkFBSyxFQUFFLENBQUM7U0FDWDs7O2lCQU5nQixNQUFNOztlQVFsQixpQkFBRztBQUNKLGdCQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckUsZ0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDNUQsZ0JBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDakQsZ0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUM3QixnQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDaEIsb0JBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO0FBQ0QsZ0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMxQzs7O2VBRWdCLDZCQUFHOztBQUVoQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7OztBQUdoQyxnQkFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO0FBQ2pDLHVCQUFPLElBQUksQ0FBQzthQUNmOztBQUVELGdCQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUU7O0FBRWxCLG9CQUFJLElBQUksR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7O0FBRWpELG9CQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFOzs7O0FBSXBDLGdDQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFM0QsMkJBQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjs7O2VBRWlCLDhCQUFHOztBQUVqQixnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7OztBQUdoQyxnQkFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLFVBQVUsRUFBRTtBQUNoQyx1QkFBTyxJQUFJLENBQUM7YUFDZjs7O0FBR0QsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7QUFFL0Msb0JBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakMsb0JBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDOztBQUV0QyxvQkFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQ2xDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTs7OztBQUlwQyxnQ0FBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCwyQkFBTyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjs7QUFFRCxnQkFBSSxTQUFTLENBQUMsZUFBZSxFQUFFO0FBQzNCLG9CQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQzs7QUFFdEQsb0JBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUU7Ozs7QUFJckMsZ0NBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0QsMkJBQU8sSUFBSSxDQUFDO2lCQUNmO2FBQ0o7U0FDSjs7O2VBRUssZ0JBQUMsUUFBUSxFQUFFOztBQUViLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUNsQyxnQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzs7QUFFbEMsZ0JBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNmLG9CQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFO0FBQzNCLDBCQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDN0I7YUFDSixNQUFNO0FBQ0gsb0JBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUU7QUFDMUIsMEJBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjthQUNKO1NBQ0o7OztXQWpHZ0IsTUFBTTtHQUFTLE1BQU0sQ0FBQyxXQUFXOztxQkFBakMsTUFBTSIsImZpbGUiOiJCdWxsZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG4nYXRvbWljIGNvbXBvbmVudCc7XG5cbmltcG9ydCAqIGFzIHRyaWdnZXJFdmVudCBmcm9tICdhdG9taWNUcmlnZ2VyRXZlbnQnO1xuXG5jb25zdCBTcGFjZUdhbWUgPSBHbG9iYWxzLlNwYWNlR2FtZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgQXRvbWljLkpTQ29tcG9uZW50IHtcblxuICAgIGluc3BlY3RvckZpZWxkcyA9IHtcbiAgICAgICAgaXNQbGF5ZXI6IGZhbHNlLFxuICAgICAgICBsYXNlclNvdW5kOiAnJyxcbiAgICAgICAgc3BlZWQ6IDVcbiAgICB9O1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubGFzZXJTb3VuZCA9IEF0b21pYy5jYWNoZS5nZXRSZXNvdXJjZShcIlNvdW5kXCIsIHRoaXMubGFzZXJTb3VuZCk7XG4gICAgICAgIHRoaXMuc291bmRTb3VyY2UgPSB0aGlzLm5vZGUuY3JlYXRlQ29tcG9uZW50KFwiU291bmRTb3VyY2VcIik7XG4gICAgICAgIHRoaXMuc291bmRTb3VyY2Uuc291bmRUeXBlID0gQXRvbWljLlNPVU5EX0VGRkVDVDtcbiAgICAgICAgdGhpcy5zb3VuZFNvdXJjZS5nYWluID0gMC43NTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucm9sbCgxODApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc291bmRTb3VyY2UucGxheSh0aGlzLmxhc2VyU291bmQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVuZW15QnVsbGV0KCkge1xuXG4gICAgICAgIHZhciBicG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uMkQ7XG5cbiAgICAgICAgLy8gb2ZmIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlblxuICAgICAgICBpZiAoYnBvc1sxXSA8IC1TcGFjZUdhbWUuaGFsZkhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU3BhY2VHYW1lLnBsYXllcikge1xuXG4gICAgICAgICAgICB2YXIgZXBvcyA9IFNwYWNlR2FtZS5wbGF5ZXIubm9kZS53b3JsZFBvc2l0aW9uMkQ7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlcG9zWzBdIC0gYnBvc1swXSkgPCAwLjI1ICYmXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZXBvc1sxXSAtIGJwb3NbMV0pIDwgMC4yNSkge1xuXG4gICAgICAgICAgICAgICAgLy8gTmVlZCB0byBjb21lIGJhY2sgdG8gdGhlIGV2ZW50IHN5c3RlbSBsYXRlci4ubm90IHdvcmtpbmcgYXMgZXhwZWN0ZWQuXG4gICAgICAgICAgICAgICAgLy9TcGFjZUdhbWUucGxheWVyLm5vZGUuc2VuZEV2ZW50KCdvblBsYXllckhpdCcsIHsgeDogYnBvc1swXSwgeTogYnBvc1sxXSB9KTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQudHJpZ2dlcihTcGFjZUdhbWUucGxheWVyLm5vZGUsICdvbkhpdCcsIGJwb3MpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQbGF5ZXJCdWxsZXQoKSB7XG5cbiAgICAgICAgdmFyIGJwb3MgPSB0aGlzLm5vZGUucG9zaXRpb24yRDtcblxuICAgICAgICAvLyBvZmYgdGhlIHRvcCBvZiB0aGUgc2NyZWVuXG4gICAgICAgIGlmIChicG9zWzFdID4gU3BhY2VHYW1lLmhhbGZIZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFudWFsbHkgY2hlY2tpbmcgZm9yIGNvbGxpc2lvbnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBTcGFjZUdhbWUuZW5lbWllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICB2YXIgZW5lbXkgPSBTcGFjZUdhbWUuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIHZhciBlcG9zID0gZW5lbXkubm9kZS53b3JsZFBvc2l0aW9uMkQ7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhlcG9zWzBdIC0gYnBvc1swXSkgPCAwLjI1ICYmXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZXBvc1sxXSAtIGJwb3NbMV0pIDwgMC4yNSkge1xuXG4gICAgICAgICAgICAgICAgLy8gTmVlZCB0byBjb21lIGJhY2sgdG8gdGhlIGV2ZW50IHN5c3RlbSBsYXRlci4ubm90IHdvcmtpbmcgYXMgZXhwZWN0ZWQuXG4gICAgICAgICAgICAgICAgLy9lbmVteS5ub2RlLnNlbmRFdmVudCgnb25FbmVteUhpdCcsIGJwb3MpO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFdmVudC50cmlnZ2VyKGVuZW15Lm5vZGUsICdvbkhpdCcsIGJwb3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFNwYWNlR2FtZS5jYXBpdGFsU2hpcE5vZGUpIHtcbiAgICAgICAgICAgIHZhciBlcG9zMiA9IFNwYWNlR2FtZS5jYXBpdGFsU2hpcE5vZGUud29ybGRQb3NpdGlvbjJEO1xuXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZXBvczJbMF0gLSBicG9zWzBdKSA8IDAuNzUgJiZcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhlcG9zMlsxXSAtIGJwb3NbMV0pIDwgMC43NSkge1xuXG4gICAgICAgICAgICAgICAgLy8gTmVlZCB0byBjb21lIGJhY2sgdG8gdGhlIGV2ZW50IHN5c3RlbSBsYXRlci4ubm90IHdvcmtpbmcgYXMgZXhwZWN0ZWQuXG4gICAgICAgICAgICAgICAgLy9TcGFjZUdhbWUuY2FwaXRhbFNoaXBOb2RlLnNlbmRFdmVudCgnb25IaXQnLCBicG9zKTtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQudHJpZ2dlcihTcGFjZUdhbWUuY2FwaXRhbFNoaXBOb2RlLCAnb25IaXQnLCBicG9zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lU3RlcCkge1xuXG4gICAgICAgIHZhciBzcGVlZCA9IHRoaXMuc3BlZWQgKiB0aW1lU3RlcDtcbiAgICAgICAgdGhpcy5ub2RlLnRyYW5zbGF0ZTJEKFswLCBzcGVlZF0pO1xuXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVQbGF5ZXJCdWxsZXQoKSkge1xuICAgICAgICAgICAgICAgIEF0b21pYy5kZXN0cm95KHRoaXMubm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVFbmVteUJ1bGxldCgpKSB7XG4gICAgICAgICAgICAgICAgQXRvbWljLmRlc3Ryb3kodGhpcy5ub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==