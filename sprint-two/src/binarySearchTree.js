var BinarySearchTree = function(value) {
  
  var treeNode = Object.create(treeNodeMethods);

  treeNode.value = value;
  treeNode.right = null;
  treeNode.left = null;

  return treeNode;

};

var treeNodeMethods = {};

// methods
treeNodeMethods.insert = function(value) {
  var oldValue = this.value;

  if(value < oldValue) {
    if(this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
  if(value > oldValue) {
    if(this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    } 
  }
};

treeNodeMethods.contains = function(value) {
  var oldValue = this.value;
  if(oldValue === value) {
    return true;
  } else {
    if(value < oldValue && this.left!== null) {
      return this.left.contains(value);
    } else if(value > oldValue && this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;      
    }
  }
};

treeNodeMethods.depthFirstLog = function(cb) {
  var inner = function(node) {
     cb(node.value);
    if(node.left !== null){
      inner(node.left);
    }
    if(node.right !== null) {
      inner(node.right);
    } 
  };
 return inner(this);
 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
