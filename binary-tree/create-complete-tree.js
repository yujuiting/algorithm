var BinaryTree = require('./binary-tree');

module.exports = function createCompleteTree (size) {
  var i, child_index, nodes = [];

  for (i = 0; i < size; i++)
    nodes[i] = new BinaryTree(i);

  for (i = 0; i < size; i++) {
    child_index = i * 2 + 1;
    if (child_index >= size) break;
    nodes[i].left = nodes[child_index];

    child_index++;
    if (child_index >= size) break;
    nodes[i].right = nodes[child_index];
  }

  return nodes;
};