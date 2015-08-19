Object.defineProperty(exports, '__esModule', {
    value: true
});
// all blueprints should be defined here
exports['default'] = {
    // This is the base star blueprint that defines the texture, etc.
    star: {
        Star: {},
        StaticSprite2D: {
            sprite: 'Sprites/star.png',
            blendMode: Atomic.BLEND_ALPHA
        }
    },
    // this descends from the base star and overrides the spawn position and speed
    star1: {
        inherits: 'star',
        isPrefab: true,
        position2D: [-3, 0],
        Star: {
            speed: -50
        }
    },
    // this descends from the base star and overrides the spawn position and speed
    star2: {
        inherits: 'star',
        isPrefab: true,
        position2D: [3, 0],
        Star: {
            speed: 100
        }
    }

};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdWVwcmludHMuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQ2U7O0FBRVgsUUFBSSxFQUFFO0FBQ0YsWUFBSSxFQUFFLEVBQUU7QUFDUixzQkFBYyxFQUFFO0FBQ1osa0JBQU0sRUFBRSxrQkFBa0I7QUFDMUIscUJBQVMsRUFBRSxNQUFNLENBQUMsV0FBVztTQUNoQztLQUNKOztBQUVELFNBQUssRUFBRTtBQUNILGdCQUFRLEVBQUUsTUFBTTtBQUNoQixnQkFBUSxFQUFFLElBQUk7QUFDZCxrQkFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQ2xCLFlBQUksRUFBRTtBQUNGLGlCQUFLLEVBQUUsQ0FBQyxFQUFFO1NBQ2I7S0FDSjs7QUFFRCxTQUFLLEVBQUU7QUFDSCxnQkFBUSxFQUFFLE1BQU07QUFDaEIsZ0JBQVEsRUFBRSxJQUFJO0FBQ2Qsa0JBQVUsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDakIsWUFBSSxFQUFFO0FBQ0YsaUJBQUssRUFBRSxHQUFHO1NBQ2I7S0FDSjs7Q0FFSiIsImZpbGUiOiJibHVlcHJpbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWxsIGJsdWVwcmludHMgc2hvdWxkIGJlIGRlZmluZWQgaGVyZVxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIFRoaXMgaXMgdGhlIGJhc2Ugc3RhciBibHVlcHJpbnQgdGhhdCBkZWZpbmVzIHRoZSB0ZXh0dXJlLCBldGMuXG4gICAgc3Rhcjoge1xuICAgICAgICBTdGFyOiB7fSxcbiAgICAgICAgU3RhdGljU3ByaXRlMkQ6IHtcbiAgICAgICAgICAgIHNwcml0ZTogJ1Nwcml0ZXMvc3Rhci5wbmcnLFxuICAgICAgICAgICAgYmxlbmRNb2RlOiBBdG9taWMuQkxFTkRfQUxQSEFcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gdGhpcyBkZXNjZW5kcyBmcm9tIHRoZSBiYXNlIHN0YXIgYW5kIG92ZXJyaWRlcyB0aGUgc3Bhd24gcG9zaXRpb24gYW5kIHNwZWVkXG4gICAgc3RhcjE6IHtcbiAgICAgICAgaW5oZXJpdHM6ICdzdGFyJyxcbiAgICAgICAgaXNQcmVmYWI6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uMkQ6IFstMywwXSxcbiAgICAgICAgU3Rhcjoge1xuICAgICAgICAgICAgc3BlZWQ6IC01MFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyB0aGlzIGRlc2NlbmRzIGZyb20gdGhlIGJhc2Ugc3RhciBhbmQgb3ZlcnJpZGVzIHRoZSBzcGF3biBwb3NpdGlvbiBhbmQgc3BlZWRcbiAgICBzdGFyMjoge1xuICAgICAgICBpbmhlcml0czogJ3N0YXInLFxuICAgICAgICBpc1ByZWZhYjogdHJ1ZSxcbiAgICAgICAgcG9zaXRpb24yRDogWzMsMF0sXG4gICAgICAgIFN0YXI6IHtcbiAgICAgICAgICAgIHNwZWVkOiAxMDBcbiAgICAgICAgfVxuICAgIH0sXG5cbn07XG4iXX0=