Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.extend = extend;
exports.dump = dump;
/**
 * Will extend either a blueprint of a sub component of a blueprint.
 *
 * @method extend
 * @param {Object} orig the original object to extend
 * @param extendwith
 * @return {Object|Array} Returns a brand new object that contains the merged values.  This differs from
 *                  most implementations that actually manipulate the orig object.
 */

function extend(orig) {
    var result = {};
    var i;

    for (i in orig) {
        if (orig.hasOwnProperty(i)) {
            result[i] = orig[i];
        }
    }

    for (var _len = arguments.length, objectsToExtendWith = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        objectsToExtendWith[_key - 1] = arguments[_key];
    }

    for (var x = 0; x < objectsToExtendWith.length; x++) {
        var extendwith = objectsToExtendWith[x];
        for (i in extendwith) {
            if (extendwith.hasOwnProperty(i)) {
                if (typeof extendwith[i] === 'object') {
                    if (extendwith[i] === null) {
                        result[i] = null;
                    } else if (extendwith[i].length) {
                        //handle array types
                        result[i] = extendwith[i];
                    } else {
                        result[i] = extend(result[i], extendwith[i]);
                    }
                } else {
                    result[i] = extendwith[i];
                }
            }
        }
    }
    return result;
}

/**
 * Will dump out an object to the console, iterating over the top level
 * @method
 * @param {Object} obj The object to dump
 * @param {string} [indentChars] characters to indent
 */

function dump(obj) {
    var indentChars = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    if (obj === undefined) {
        print(indentChars + '*undefined*');
        return;
    }

    print(indentChars + '{');
    for (var name in obj) {
        if (typeof obj[name] === 'object') {
            print(indentChars + '  ' + name + ':');
            dump(obj[name], indentChars + '  ');
        } else {
            print(indentChars + '  ' + name + ':' + obj[name]);
        }
    }
    print(indentChars + '}');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFTTyxTQUFTLE1BQU0sQ0FBQyxJQUFJLEVBQTBCO0FBQ2pELFFBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNoQixRQUFJLENBQUMsQ0FBQzs7QUFFTixTQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDWixZQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDeEIsa0JBQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkI7S0FDSjs7c0NBUjJCLG1CQUFtQjtBQUFuQiwyQkFBbUI7OztBQVUvQyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pELFlBQUksVUFBVSxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLGFBQUssQ0FBQyxJQUFJLFVBQVUsRUFBRTtBQUNsQixnQkFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQzlCLG9CQUFJLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtBQUNuQyx3QkFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO0FBQ3hCLDhCQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO3FCQUNwQixNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTs7QUFFN0IsOEJBQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzdCLE1BQU07QUFDSCw4QkFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2hEO2lCQUNKLE1BQU07QUFDSCwwQkFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtTQUNKO0tBQ0o7QUFDRCxXQUFPLE1BQU0sQ0FBQztDQUNqQjs7Ozs7Ozs7O0FBUU0sU0FBUyxJQUFJLENBQUMsR0FBRyxFQUFvQjtRQUFsQixXQUFXLHlEQUFHLEVBQUU7O0FBQ3RDLFFBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtBQUNuQixhQUFLLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxDQUFDO0FBQ25DLGVBQU87S0FDVjs7QUFFRCxTQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLFNBQUssSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFO0FBQ2xCLFlBQUksT0FBUSxHQUFHLENBQUMsSUFBSSxDQUFDLEFBQUMsS0FBSyxRQUFRLEVBQUU7QUFDakMsaUJBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN4QyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkMsTUFBTTtBQUNILGlCQUFLLENBQUMsV0FBVyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3REO0tBQ0o7QUFDRCxTQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQzVCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBXaWxsIGV4dGVuZCBlaXRoZXIgYSBibHVlcHJpbnQgb2YgYSBzdWIgY29tcG9uZW50IG9mIGEgYmx1ZXByaW50LlxuICpcbiAqIEBtZXRob2QgZXh0ZW5kXG4gKiBAcGFyYW0ge09iamVjdH0gb3JpZyB0aGUgb3JpZ2luYWwgb2JqZWN0IHRvIGV4dGVuZFxuICogQHBhcmFtIGV4dGVuZHdpdGhcbiAqIEByZXR1cm4ge09iamVjdHxBcnJheX0gUmV0dXJucyBhIGJyYW5kIG5ldyBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgbWVyZ2VkIHZhbHVlcy4gIFRoaXMgZGlmZmVycyBmcm9tXG4gKiAgICAgICAgICAgICAgICAgIG1vc3QgaW1wbGVtZW50YXRpb25zIHRoYXQgYWN0dWFsbHkgbWFuaXB1bGF0ZSB0aGUgb3JpZyBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQob3JpZywgLi4ub2JqZWN0c1RvRXh0ZW5kV2l0aCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSBpbiBvcmlnKSB7XG4gICAgICAgIGlmIChvcmlnLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICByZXN1bHRbaV0gPSBvcmlnW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCBvYmplY3RzVG9FeHRlbmRXaXRoLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIHZhciBleHRlbmR3aXRoID0gb2JqZWN0c1RvRXh0ZW5kV2l0aFt4XTtcbiAgICAgICAgZm9yIChpIGluIGV4dGVuZHdpdGgpIHtcbiAgICAgICAgICAgIGlmIChleHRlbmR3aXRoLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBleHRlbmR3aXRoW2ldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZW5kd2l0aFtpXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChleHRlbmR3aXRoW2ldLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9oYW5kbGUgYXJyYXkgdHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGV4dGVuZHdpdGhbaV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSBleHRlbmQocmVzdWx0W2ldLCBleHRlbmR3aXRoW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpXSA9IGV4dGVuZHdpdGhbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogV2lsbCBkdW1wIG91dCBhbiBvYmplY3QgdG8gdGhlIGNvbnNvbGUsIGl0ZXJhdGluZyBvdmVyIHRoZSB0b3AgbGV2ZWxcbiAqIEBtZXRob2RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBkdW1wXG4gKiBAcGFyYW0ge3N0cmluZ30gW2luZGVudENoYXJzXSBjaGFyYWN0ZXJzIHRvIGluZGVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gZHVtcChvYmosIGluZGVudENoYXJzID0gJycpIHtcbiAgICBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJpbnQoaW5kZW50Q2hhcnMgKyAnKnVuZGVmaW5lZConKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHByaW50KGluZGVudENoYXJzICsgJ3snKTtcbiAgICBmb3IgKHZhciBuYW1lIGluIG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIChvYmpbbmFtZV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcHJpbnQoaW5kZW50Q2hhcnMgKyAnICAnICsgIG5hbWUgKyAnOicpO1xuICAgICAgICAgICAgZHVtcChvYmpbbmFtZV0sIGluZGVudENoYXJzICsgJyAgJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcmludChpbmRlbnRDaGFycyArICcgICcgKyBuYW1lICsgJzonICsgb2JqW25hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcmludChpbmRlbnRDaGFycyArICd9Jyk7XG59XG5cbiJdfQ==