const { Node, BinarySearchTree } = require("./binary-search-tree");

// Create a binary search tree:
//       10
//      /  \
//     5    15
//    /
//   2

bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);

console.log(bst.lookup(10).value);
