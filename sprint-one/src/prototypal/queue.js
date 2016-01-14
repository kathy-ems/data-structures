var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // use Object.create to delegate queueMethods to new aQueue object
  var aQueue =Object.create(queueMethods);
  // add property of storage to aQueue and set equal to empty object
  aQueue.storage = {};
  // add property of queueSize to aQueue and set equal to zero
  aQueue.queueSize = 0;

  return aQueue;

};

var queueMethods = {};

// create size property on queueMethod with a function
queueMethods.size = function() {
  // return  this.queueSize
  return this.queueSize;
};

// create enqueue property on queueMethod with a function with value as an argument
queueMethods.enqueue = function(value) {
  // assign value to this.storage at index of this.queueSize
  this.storage[this.queueSize] = value;
  // increment this.queueSize by one
  this.queueSize++;
};

// create dequeue property on queueMethod with a function 
queueMethods.dequeue = function() {
  // create variable to hold results and assign this.storage[0]
  var result = this.storage[0];
  // if this.queueSize is greater than 0
  if(this.queueSize > 0) {
    // deincrement this.queueSize by one
    this.queueSize--;
    // loop through this.queueSize
    for(var  i=0;i<this.queueSize;i++){
      // assign this.storage of next item in current item
      this.storage[i] = this.storage[i+1];
    }
  } 
  return result; 
};


