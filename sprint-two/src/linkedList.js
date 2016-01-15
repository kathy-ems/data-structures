var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // create a variable to hold the previous node value
  // this will be used to find the previous node and add the current value
  var prevNodeValue = null;

  list.addToTail = function(value) {
    list.tail = Node(value);
    list.tail.value = value;

    // set the node.next property of the previous node () to the current value
    // list.tail.value[prevNodeValue] = value;

    // if this is the first item (list.head = null)
    if (list.head === null) {
      // add the current value to list.head
      list.head = value;
    } 

    // holds the current value in order to add it to the previous node as node.next value
    prevNodeValue = value;
  };

  list.removeHead = function() {

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
