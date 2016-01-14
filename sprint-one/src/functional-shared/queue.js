var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // decalre a new empty object aQueue 
  var aQueue = {};
  //create storage obj as a property of aQueue
  aQueue.storage = {};
  //declare aQueuesize property in aQueue with value of 0
  aQueue.aQueuesize = 0;

  aQueue.size = queueMethods.size;
  aQueue.enqueue = queueMethods.enqueue;
  aQueue.dequeue = queueMethods.dequeue;

  return aQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  if(this.aQueuesize < 0 ){
    return 0;
  }
  return this.aQueuesize;
};

queueMethods.enqueue = function (value) {
  this.storage[this.aQueuesize] = value;
  this.aQueuesize++;
};

queueMethods.dequeue = function () {
  if(this.aQueuesize > 0){
    var result = this.storage[0];
    this.aQueuesize--;
    for(var i = 0; i < this.aQueuesize; i++){
      this.storage[i] = this.storage[i+1];
    }
  }

  return result;
};

/* 
storage = {
  0: 'a',
  1: 'b',
  2: 'c'
}
*/

