var createCompleteTree = require('./create-complete-tree');
var breadthFirstSearch = require('./breadth-first-search');

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

var expectSearchOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], expect;

breadthFirstSearch(nodes[0], function (n, s) {
  expect = expectSearchOrder.shift();
  if (n.data !== expect)
    console.log('expect ' + expect + ' but got ' + n.data);
  else
    console.log(n.data);
});