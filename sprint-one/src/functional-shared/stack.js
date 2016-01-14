var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //decalre a new object someinstance 
 // declare an object someinstance
  var someInstance = {};
  //create storage obj as a property of someinstance
  someInstance.storage = {};
 // //create stacksise of 0 as a property of someinstance
  someInstance.stacksize = 0;

 //use extend function with someinstance obj as first argument and stackmethas the 2ns argument
 // for size the first arg will be the someInstance, the second arg will be stackMethod
 _.extend(someInstance, Stack.stackMethods);

 return someInstance;
};

Stack.stackMethods = {
  size: function() {
    return this.stacksize;
  },

  push: function(value) {  
    this.storage[this.stacksize] = value;
    this.stacksize++;
  },

  pop: function() {
    if(this.stacksize < 0 ) {
      return 0;
    }
    if(this.stacksize === 0 ){
    }else {
      this.stacksize--;
    }
    return this.storage[this.stacksize];
  }


};

//AssertionError: expected 1 to be at most 0

