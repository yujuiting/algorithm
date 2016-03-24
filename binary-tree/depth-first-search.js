module.exports = function depthFirstSearch (root, callback) {
  callback = callback || function (node) { console.log(node.data); };

  var stack = [root],
      currentNode;

  while (!!stack.length) {

    currentNode = stack.pop();

    if (!!currentNode.right)
      stack.push(currentNode.right);

    if (!!currentNode.left)
      stack.push(currentNode.left);

    callback(currentNode, stack);
  }
};