

// ------------------------
// Instantiate a new graph
var Graph = function() {
  // graph tracks who is connected to who
  this.nodes = {};

  /* nodes = {
    1: [2,3],
    2: [1,3],
    3: [2,1,4],
    4: [3]
  }
  */
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] ? true : false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var temp = this.nodes[fromNode]; // this is an array
  // loop through temp array to check for toNode
  if(temp.length===0) {
    return false;
  }
  for(var i=0;i<temp.length;i++) {
    //debugger;
    if(temp[i] === toNode){
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[toNode].push(fromNode);
  this.nodes[fromNode].push(toNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromnodearr = this.nodes[fromNode];
  var i = _.indexOf(fromnodearr,toNode,false);
  fromnodearr.splice(i,1);
  var tonodearr = this.nodes[toNode];
  var j = _.indexOf(tonodearr,fromNode,false);
  tonodearr.splice(j,1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // debugger;
  for(var k in this.nodes) {
    cb(k);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


