// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var nodeList = [];
  var node = document.body;


  var innerFunction = function(element) {

    // check if the class name matches our target className
    if (val === className) {
      nodeList.push(val);
    }

    if (element.classList === className) {
      nodeList.push(element);
    }
    if (element.childNodes.length > 0) {
      element.childNodes.forEach(val => {
        innerFunction(val);
      });
    }

    // then check if it has children

    // if so, run recursion


  };

  innerFunction(node);

  console.log(nodeList);
  return nodeList;

};
