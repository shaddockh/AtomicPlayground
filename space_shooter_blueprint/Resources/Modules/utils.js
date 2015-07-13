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

    // Taken from transpiled es6 sources
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
function dump(obj, indentChars) {
    indentChars = indentChars || '';
    if (obj === undefined) {
        print(indentChars + '*undefined*');
        return;
    }

    print(indentChars + '{');
    for (var name in obj) {
        if (typeof (obj[name]) === 'object') {
            print(indentChars + '  ' +  name + ':');
            dump(obj[name], indentChars + '  ');
        } else {
            print(indentChars + '  ' + name + ':' + obj[name]);
        }
    }
    print(indentChars + '}');
}

exports.extend = extend;
exports.dump = dump;
