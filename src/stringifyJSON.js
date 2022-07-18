// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// JSON.stringify({});                    // '{}'
// JSON.stringify(true);                  // 'true'
// JSON.stringify('foo');                 // '"foo"'
// JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
// JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
// JSON.stringify({ x: 5 });              // '{"x":5}'

var stringifyJSON = function(obj) {
  // your code goes here
  var stringifyTest = JSON.stringify(obj);
  // console.log('Goal:', stringifyTest);

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
    console.log('object check');
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


  /*

  unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];

  */

  // if it's an object with values
  if (typeof obj === 'object' && Object.keys(obj).length > 0 && !Array.isArray(obj)) {
    var result = [];
    // '{"a":"apple"}'
    for (var key in obj) {
      if (key )
      console.log('key', key, '\tobj:', obj[key]);
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{'.concat(result.toString(), '}');

  }



};
