var createCompleteTree = require('./create-complete-tree');
var depthFirstSearch = require('./depth-first-search');

var nodes = createCompleteTree(10);
/*
  0--1--3--7
   |  |  |-8
   |  | 
   |  |-4--9
   |  
   |-2--5
      |
      |-6
*/

var expectSearchOrder = [0, 1, 3, 7, 8, 4, 9, 2, 5, 6], expect;

depthFirstSearch(nodes[0], function (n, s) {
  expect = expectSearchOrder.shift();
  if (n.data !== expect)
    console.log('expect ' + expect + ' but got ' + n.data);
  else
    console.log(n.data);
});