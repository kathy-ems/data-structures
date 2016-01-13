var Queue = function() {
  var someInstance = {};
  var stacksize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  /*
  storage  = {
    0: 'a', // replace 'a' with 'b'
    1: 'b', // replace 'b' with 'c'
  }
  */

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[stacksize] = value;
    stacksize++;
  };

  someInstance.dequeue = function() {
    stacksize--;
    var result = storage[0];
    for(var i = 0; i < stacksize; i++) {
      storage[i] = storage[i+1];
    }
    return result;
  };

  someInstance.size = function() {
    if(stacksize<0) {
      return 0;
    }
    return stacksize;
  };

  return someInstance;
};
