var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create a someinstance object using Object.create method with stackMethods as an argument
  var someInstance = Object.create(stackMethods);
  //declare a storage object within someinstance
  someInstance.storage = {};
  //declare stacksize as zero within someinstance
  someInstance.stacksize = 0;
  //return the someinstance object
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.stacksize;
};

stackMethods.push = function (value) {
  this.storage[this.stacksize] = value;
  this.stacksize++;
};

stackMethods.pop = function () {
  if(this.stacksize >0){
    this.stacksize--;    
  }
  return this.storage[this.stacksize];
};


