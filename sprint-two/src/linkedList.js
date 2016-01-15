var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; //4

  // create a variable to hold the previous node value
  // this will be used to find the previous node and add the current value
  list.prevNode = null;

  list.addToTail = function(value) {

    if(list.tail === null ){
      list.tail = Node(value);
    } else {
      list.tail.next = value;
      list.tail = Node(value);
    }

    // if this is the first item (list.head = null)
    if (list.head === null) {
      // add the current value to list.head for quick lookups
      list.head = value;
    } 
  };

  list.removeHead = function() {
    // 
    return list.head;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
