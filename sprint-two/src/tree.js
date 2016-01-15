var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // check if current node.value = target. 
  // if(this.value === target) {
  //   return true;
  // }

  var checkcontains = function(element) {
    // base case: if el.length equals 0 return false
    if(element.length === 0) {
      return false;
    }
    if(element[0].value === target) {
      return true;
    } else {
      // to find nested children
      if(element.children !== undefined) {
        var temp = element.children;
        for(var i = 0;i<temp.length;i++) {
         return checkcontains(temp[i]);
        }
      }
      // returnn checkcontains with everything else in element besides first (use slice)
      return checkcontains(element.slice(1));
    }
  };
  // call checkcotnains on this.children
  return checkcontains(this.children);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
