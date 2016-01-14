var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //decalre this.storage object
  this.storage = {};
  //declare this.stacksize variable and assgn it to zero
  this.stacksize = 0;

};

//declare Stack.prototype.size function
Stack.prototype.size = function () {
  if(this.stacksize < 0) {
    return 0;
  }
  //return this.stacksize
  return this.stacksize;
};

//declare Stack.protoype.push function with a vlue argument
Stack.prototype.push = function (value) {
  //assign this.storage[this.stacksize] to the value
  this.storage[this.stacksize] = value;
  //increment this.stacksize by one
  this.stacksize++;
};

//declare Stack.prototype.pop function
Stack.prototype.pop = function () {
  //if this.stacksize is less than zero
  if(this.stacksize < 0){
    //return
    return;
  }
  // decrement this.stacksize by one
  this.stacksize--;
  // return this.storage[this.stacksize]
  return this.storage[this.stacksize];
};