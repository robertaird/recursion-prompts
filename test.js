var count = 0;
var countKeysInObj = function(obj, key) {
    for (var i in obj) {
        if (i === key) {
            count++;
        }
        if (typeof obj[i] === 'object') {
            countKeysInObj(obj[i], key);
        }
    }
    return count;
};

var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
console.log(countKeysInObj(testobj, 'e'));