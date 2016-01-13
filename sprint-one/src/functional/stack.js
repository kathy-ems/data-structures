var Stack = function() {
  var someInstance = {};
  var stacksize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[stacksize] = value;
    stacksize++;
  };

  someInstance.pop = function() {
    stacksize--; 
    return someInstance[stacksize];  
     
  };

  someInstance.size = function() {
    if(stacksize<0) {
      return 0;
    }
    return stacksize;
  };

  return someInstance;
};
