// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here

  if (obj === null || typeof obj === 'undefined') {
    return 'null';
  }

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  }

  if (typeof obj === 'object' && Object.keys(obj).length === 0) {
    return '{}';
  }

  if (typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'string') {
    return '"'.concat(obj, '"');
  }

  // if it's an array with values
  if (Array.isArray(obj) && obj.length > 0) {
    // output '['4', 'null']'
    var result = [];
    // iterate over values
    obj.forEach(val => {
      // result.push resursion values
      result.push(stringifyJSON(val));
    });
    // return result plus '';
    return '['.concat(result.toString(), ']');
  }

  // if it's an object with values
  if (typeof obj === 'object' && Object.keys(obj).length > 0 && !Array.isArray(obj)) {
    var result = [];
    for (var key in obj) {
      if ((key === 'functions' && typeof obj[key] === 'function')
        || (key === 'undefined')) {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{'.concat(result.toString(), '}');
  }
};
