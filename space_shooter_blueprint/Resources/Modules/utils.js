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
