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
  var result = false;
  var checkcontains = function(node) {
    if(node.value === target) {
      result = true;
      //return result;
    } else {
      if(node.children) {
        for(var i=0;i<node.children.length;i++) {
            checkcontains(node.children[i]);   
        }
      }
    }
    return result;
  };
  return checkcontains(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
