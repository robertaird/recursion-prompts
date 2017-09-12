// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    // check if n - 1 = 0 before running any more.
    if (n < 0) {
        return null
    }
    if (n === 0) {
        return 1;
    } 
    // Should multiply the base number by the base number - 1, and continue to do so until it reaches zero.
    else {
        return n * factorial(n - 1);
    }
    
};

/* 

the above, but one line..

var factorial = (num) => num === 0 ? 1 : num * factorial(--num);
}

The above, but with a default parameter.. This is easier to read.

var factorial = function(num, result = 1){
    if(num === 0) {
        return result;
    }
    return factorial(num - 1, result * num)
}
*/

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    // If the array length is equal to 0, return 0. If not, array at 0 + the return of sum ran on the array.slice(1)..
    return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array, inner = []) {
    if (Array.isArray(array[0])) {
        //let innerResult = arraySum(array[0]);
        return arraySum(array[0]) + arraySum(array.slice(1));
    } else {
    return array.length === 0 ? 0 : array[0] + arraySum(array.slice(1));
    }
};

// 4. Check if a number is even.
var isEven = function(n) {
    if (n < 0) {
        n = Math.abs(n)
    }
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    }
    return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    // need to flip it for negative integers.
    if (n < 0) {
        return n === 0 ? 0: n + 1 + sumBelow(++n);
    }
    // This one is going to start at the number below the input, and work down to zero, adding each one. So with 7, 6+5(11)+4(15)+3(18)+2(20)+1 = 21.
    return n === 0 ? 0: n - 1 + sumBelow(--n);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //console.log(y);
    if (x + 1 === y || x - 1 === y || x === y) {
        return [];
    } else if (x > y) {
        var arr = Array.from(range(x, ++y));
        arr.push(y);
        return arr;
    } else if (x < y) {
        var arr = Array.from(range(x, --y));
        arr.push(y);
        return arr;
        
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    // exp can act as a count down. If it is equal to 1, run once more and stop.
    if (exp === 0) {
        return 1;
    } else if (exp < 0) {
        // I guess negative exponents mean to divide, but I'm not sure why this can't be expressed as base / exponent(base, ++exp).. but this works.
        return exponent(base, ++exp) / base;
    } else {
        return base * exponent(base, --exp);
    }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    // Should divide n by 2 until it equals 2. If it is equal to a fraction, it should return false.
    if (n === 1) {
        return true;
    } else if (n < 2) {
        return false;
    } else 
        return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    // I was WAY over thinking this. That it said "can't mutate the input string" lead me to believe I needed to keep the initial parameter of string the same every time. Oops. 
    return (string === '') ? '' : reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    // So for this one, I need to initially compare the charAt(0) to the charAt(string.length - 1), then the charAt(1) to the charAt(string.length - 2)... I should use toLowerCase() on the string, and also remove spaces. I believe a regular expression can achieve this.
    
    // so, I'm setting i to string length..
    let i = string.length;
    
    // removing any Capital letters, and replacing spaces with nothing using a regular expression /\s + /g, \s being a space, g meaning global, so any instance of the replaced character..
    string = string.toLowerCase().replace(/\s+/g, '')
    
    // this should end when i = 0 or 1, depending on whether the string.length is odd or even, though it doesn't appear the SpecRunner is testing any even palindromes. 
    if (i === 1 || i === 0) {
        return true;
    } 
    
    // If the first character is the same as the last character, return palindrome running on a string with the first and last characters removed with slice.
    if (string.charAt(0) === string.charAt(string.length - 1)) {
        return palindrome(string.slice(1, string.length - 1));
    }
    
    // return false if these tests fail.
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    var isPositive = x > 0;
    if (x < 0) {
        x = -x;
    }
    if (y < 0) {
        y = -y
    }
    if (x >= y) {
        return isPositive ? modulo(x-y, y) : modulo(-x - -y, y);
    }
    return isPositive ? x : -x;
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    } 
    else if (y < 0) {
        return -x + multiply(x, ++y);
    }
    else {
        return x + multiply(x, --y);
    }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
    if (y === 0) {
        return NaN;
    }
    var neg = false;
    if (x < 0 || y < 0) {
        neg = true;
    } 
    if (x - y === 0) {
        return neg? -1 : 1;
    }
    if (x < 0) {
        x = -x;
    }
    if (y < 0) {
        y = -y;
    }
    if (x < y) {
        return 0;
    } 
    else {
        return neg? -divide(x - y, y) + 1 : divide(x - y, y) + 1;
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x === y)
        return x;
    if (x < 0 || y < 0) {
        return null;
    }
    if (x > y) {
        return gcd(x - y, y); 
    }
    if (y > x) {
        return gcd(x, y - x);
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }
    else if (str1.charAt(0) === str2.charAt(0)) {
        return compareStr(str1.slice(1), str2.slice(1));
    }
    else {
        return false;
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
// This will also work with [].concat(str[0], createArray(str.slice(1)))...
    return str === '' ? [] : [str[0]].concat(createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    return array.length === 0 ? [] : [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    return length === 0 ? [] : [value].concat(buildList(value, --length));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if (array.length === 0) {
        return 0;
    }
    return (array[0] === value ? 1 : 0) + countOccurrence(array.slice(1), value);  
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    return array.length === 0 ? [] : [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
// var countKeysInObj = function(obj, key, count) {
//     if (count === undefined) {
//         count = [];
//     }
//     for (var i in obj) {
      
//         if (i === key) {
//             count.push(1);
//         }
//         if (typeof obj[i] === 'object') {
//             countKeysInObj(obj[i], key, count);
//         }

//     }
//     return count.length;
// };

// Sort of like above, but no added count parameter. 

var countKeysInObj = function(obj, key) {
  var exists = 0;
  var recurse = [];
    for (var i in obj) {
        if (i === key) {
            exists = 1;
        }
        if (typeof obj[i] === 'object') {
            recurse.push(obj[i])
        }

    }
  for (var i = 0; i < recurse.length; i++) {
    exists += countKeysInObj(recurse[i], key)
  }
  return exists;
};


// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var exists = 0;
    for (let key in obj) {
        if (obj[key] === value) {
            exists += 1;
        }
        if (typeof obj[key] === 'object') {
            exists += countValuesInObj(obj[key], value);
        }
    }
    return exists;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
    for (let i in obj) {
        if (i === key) {
            Object.defineProperty(obj, newKey, Object.getOwnPropertyDescriptor(obj, key));
            delete obj[i];
        }
        if (typeof obj[i] === 'object') {
            replaceKeysInObj(obj[i], key, newKey);
        }
    }
    return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
    if (n <=0) {
        return null;
    }
    if (n === 1) {
        return [0, 1];
    } else {
        var result = fibonacci(n - 1);
        return result.concat(result[result.length - 1]+ result[result.length - 2]);
    }
};


// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) {
        return null;
    }
    if (n === 0 ) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    else return nthFibo(n-1) + nthFibo(n-2);

};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    return input.length === 0 ? [] : [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    return array.length === 0 ? [] : [array[0].charAt(0).toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    let total = 0;
    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            total += obj[key];
        }
        if (typeof obj[key] === 'object') {
            total += nestedEvenSum(obj[key]);
        }    
    }
    return total;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {

    // if (Array.isArray(arrays[0])) {
    //     return flatten(arrays[0]);
    // } else
    // return arrays.length === 0 ? [] : [arrays[0]].concat(flatten(arrays.slice(1)));
    
    // Here's a solution using reduce. Basically, , the concat inside if checking if the next value is an array, and if not, it's adding the next value to the seed. If it is, it runs another instance of flatten. 
    return arrays.reduce(function(seed, nextVal) {
        return seed.concat(
            Array.isArray(nextVal) ? flatten(nextVal) : nextVal)
    }, []);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
    // create a key in the object that is the letter in the string, and add to that letter.
    if (obj === undefined) {
        obj = {};
    }
    obj[str[0]] = (obj[str[0]] + 1 || 1);
    return str.length === 1 ? obj : Object.assign(obj, letterTally(str.slice(1), obj));
    // if (str.length === 0) {
    //     return {};
    // } else {
    //     return letterTally(str.slice(1), obj[str[0]] +=1);
    // }
    
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    // If New Array at list[0] are === then don't add it.
    return list.length === 0 ? [] : [].concat(list[0] === list[1] ? [] : [list[0]], compress(list.slice(1)));
    // I didn't really know if this would work! For my own reference, on each recursive call of compress I'm slicing off the first value of list, and ending when list.length === 0. Then, I'm concating to a new array the value of list[0] as long as it is not equal to list[1], otherwise it's just concating an empty array. Whew!
};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    return array.length === 0 ? [] : [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    // This is sort of like compress, but it only compresses zeroes. So.. I can probably run the same as above, but, only with an additional step of seeing if array[0] and array[1] are both equal to zero.
    
    // if (array[0] === 0 && array[1] === 0) {
    //     return array.length === 0 ? [] : [].concat(minimizeZeroes(array.slice(1)))
    // } else {
    //     return array.length === 0 ? [] : [array[0]].concat(minimizeZeroes(array.slice(1)));
    // }
    
    // Curious if these can be returned inside of a ternary operator??
    
    return array[0] === 0 && array[1] === 0 ? (array.length === 0 ? [] : [].concat(minimizeZeroes(array.slice(1)))) : (array.length === 0 ? [] : [array[0]].concat(minimizeZeroes(array.slice(1))));
    
    // Yes, but this is hella confusing to look at.
    
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length % 2 === 0) {
        return array.length === 0 ? [] : [Math.abs(array[0])].concat(alternateSign(array.slice(1)));
    } else {
        return array.length === 0 ? [] : [-Math.abs(array[0])].concat(alternateSign(array.slice(1)));
    }
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    // so... if str[0] is not a number, don't do anything, but if IS a number, return it as a character written out as fiv, six, seven, etc.. This seems like it'll be a lot of typing. OR I could just use an array, they are 0 indexed, duh.
    var numDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    if (isNaN(str[0]) || str[0] === ' ') {
        return str.length === 0 ? '' : str[0] + numToText(str.slice(1));
    } 
    
    return str.length === 0 ? '' : numDigits[str[0]] + numToText(str.slice(1));
    
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
    // console.log(tag);
    // console.log(node);
    var count = 0;
    if (node === undefined) {
        node = document;
    }
    var nodes = node.childNodes;
    for (var i = 0; i < nodes.length; i++) {
        // console.log(nodes[i].tagName, tag);
        if (nodes[i].tagName) {
            var currentTag = nodes[i].tagName.toLowerCase();
        }
        if (currentTag === tag.toLowerCase()) {
            count++;
        }
        if (nodes[i].childNodes.length > 0) {
            count += tagCount(tag, nodes[i]);
        }
    }
    return count;
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
    var halfway = Math.floor(array.length / 2);
    if (min === undefined) {
        min = 0;
    }
    if (max === undefined) {
        max = array.length - 1;
    }
    var firstHalf = array.slice(0, halfway);
    var secondHalf = array.slice(halfway);
    if (firstHalf.length === 1 && firstHalf[0] === target) {
        return min;
    }
    if (secondHalf.length === 1 &&secondHalf[0] === target) {
        return max;
    }
    if (firstHalf[firstHalf.length - 1] >= target && firstHalf.length > 1) {
        return binarySearch(firstHalf, target, min, min + halfway - 1);
    } 
    else if (secondHalf[0] <= target && secondHalf.length > 1) {
        return binarySearch(secondHalf, target, min + halfway, max);
    }
    return null;
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
    var merge = function(first, second) {
        var sortArr = [];
        while (first.length > 0 && second.length > 0) {
            sortArr.push(first[0] < second[0]? first.shift() : second.shift())
        }
        return sortArr.concat(first.length ? first : second);
    }
    var len = array.length;
    if (len < 2) {
        return array;
    }
    var halfway = Math.floor(array.length / 2);
    var firstHalf = mergeSort(array.slice(0, halfway));
    var secondHalf = mergeSort(array.slice(halfway));

    return merge(firstHalf, secondHalf);
};

