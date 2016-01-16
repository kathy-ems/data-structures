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
      this.left = treeNode(value);
    } else {
      insert(this.left);
    }
  }
  if(value > oldValue) {
    if(this.right === null) {
      this.right = treeNode(value);
    } else {
      insert(this.right);
    } 
  }
};

treeNodeMethods.contains = function() {

};

treeNodeMethods.depthFirstLog = function() {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
