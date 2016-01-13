var Queue = function() {
  var someInstance = {};
  var stacksize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[stacksize] = value;
    stacksize++;
  };

  someInstance.dequeue = function() {
    stacksize--;
    return someInstance[0];
  };

  someInstance.size = function() {
    if(stacksize<0) {
      return 0;
    }
    return stacksize;
  };

  return someInstance;
};
