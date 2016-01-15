var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; //4

  // create a variable to hold the previous node value
  // this will be used to find the previous node and add the current value
  list.prevNode = null;

  list.addToTail = function(value) {
    var currNode = Node(value);
    if(list.tail === null ){
      list.tail = currNode;
    } else {
      list.tail.next = currNode;
      list.tail = currNode;
    }

    // if this is the first item (list.head = null)
    if (list.head === null) {
      // add the current value to list.head for quick lookups
      list.head = currNode;
    } 
  };

  list.removeHead = function() {
    var formerHead = list.head.value;
    // copy list.head.next
    // and put list.head.next into new head node.next
    list.head = list.head.next;

    return formerHead;
  };

  list.contains = function(target) {

    var checkContains = function (node) {
      if(node.next === null && node.value !== target){
        return false;
      }
      
      if(node.value === target) {
        return true;
      } else {
        return checkContains(node.next);
      }
    };

  return checkContains(list.head);
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
