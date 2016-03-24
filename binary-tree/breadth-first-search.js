module.exports = function breadthFirstSearch (root, callback) {
  callback = callback || function (node) { console.log(node.data); };

  var queue = [root],
      currentNode;

  while (!!queue.length) {

    currentNode = queue.shift();

    if (!!currentNode.left)
      queue.push(currentNode.left)

    if (!!currentNode.right)
      queue.push(currentNode.right);

    callback(currentNode, queue);
  }
};