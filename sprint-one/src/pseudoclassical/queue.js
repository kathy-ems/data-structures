var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // add property of this.queueSize and set it to zero
  this.queueSize = 0;

  // add property of this.storage and set it to empty object
  this.storage = {};
};

// add a property of Queue.prototype.size and give it a value of a function
Queue.prototype.size = function() {
  // if this.queueSize is less than 0
  if(this.queueSize<0) {
    // return zero
    return 0;
  }
  // return this.queueSize
  return this.queueSize;
};

// add a proprety of Queue.prototype.enqueue and give it a value of a function
Queue.prototype.enqueue = function(value) {
  // assign value to this.storage[this.queueSize]
  this.storage[this.queueSize] = value;
  // increment this.queueSize by one 
  this.queueSize++;
 
};

// add a property of Queue.prototype.dequeue and give it a value of a function
Queue.prototype.dequeue = function() {
  var result = this.storage[0];
  // deincrement this.queueSize by one
  this.queueSize--;
  // create a for loop and assign the next item to the current location
  for(var i=0;i<this.queueSize;i++) {
    this.storage[i] = this.storage[i+1];
  }
  return result;
};


