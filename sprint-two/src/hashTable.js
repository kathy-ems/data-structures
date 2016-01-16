

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tuplearr = this._storage.get(index) || [];
  for(var i =0;i<tuplearr.length;i++) {
    var tuple = tuplearr[i];
    if(tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }
  tuplearr.push([k,v]);
  this._storage.set(index,tuplearr);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuplearr = this._storage.get(index);
  for(var i = 0; i < tuplearr.length; i++){
    var tuple = tuplearr[i];
    if(tuple[0] === k){
      return tuple[1];
    }
  }
  return;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuplearr = this._storage.get(index);
  for(var i = 0; i < tuplearr.length; i++){
    var tuple = tuplearr[i];
    if(tuple[0] === k) {
      tuple.splice(i,1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


