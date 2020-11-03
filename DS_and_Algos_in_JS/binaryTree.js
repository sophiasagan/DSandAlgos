// Binary Trees and Tree Traversal

// Binary trees are trees whose nodes can only have up to two children

function createBinaryNode(key) {
  return {
    key,
    left: null,
    right: null,
    addLeft(leftKey) {
      const newLeft = createBinaryNode(leftKey);
      this.left = newLeft;
      return newLeft;
    },
    addRight(rightKey) {
      const newRight = createBinaryNode(rightKey);
      this.right = newRight;
      return newRight;
    },
  };
}

const TRAVERSALS = {
  IN_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.IN_ORDER(node.left, visitFn);
      visitFn(node);
      TRAVERSALS.IN_ORDER(node.right, visitFn);
    }
  },
  // Starting from the root node, it traverses down the left side of the tree until it finds a leaf node and calls the visit function. Then it will visit that node's parent and call the visit function. Then it will traverse from that node's right and try to traverse the left side until it reaches a leaf node and call the visit function, and so on.
  PRE_ORDER: (node, visitFn) => {
    if (node !== null) {
      visitFn(node);
      TRAVERSALS.PRE_ORDER(node.left, visitFn);
      TRAVERSALS.PRE_ORDER(node.right, visitFn);
    }
  }, // Starting from the root node, it calls the visit function, then traverses the left side of the tree calling the visit function on each node. Once it reaches a leaf node it will move up to the parent and traverse to the right node, call the visit function and continue traversing the left most branch, until it reaches a leaf node.
  POST_ORDER: (node, visitFn) => {
    if (node !== null) {
      TRAVERSALS.POST_ORDER(node.left, visitFn);
      TRAVERSALS.POST_ORDER(node.right, visitFn);
      visitFn(node);
    }
  }, // Starting from the root node, it traverses down the left side of the tree until it finds a leaf node, calls the visit function, jumps to it's sibling, calls the visit function, moves to their parent, calls the visit function, and so on. The last node it calls the visit function on is the root.
};

function createBinaryTree(rootKey) {
  const root = createBinaryNode(rootKey);

  return {
    root,
    print(traversalType = "IN_ORDER") {
      let result = "";

      const visit = (node) => {
        result += result.length === 0 ? node.key : ` => ${node.key}`;
      };

      TRAVERSALS[traversalType](this.root, visit);

      return result;
    },
  };
}

const tree = createBinaryTree("a");
const b = tree.root.addLeft("b");
const c = tree.root.addRight("c");
const d = b.addLeft("d");
const e = b.addRight("e");
const f = c.addLeft("f");
const g = c.addRight("g");
const h = d.addLeft("h");
const i = d.addRight("i");

console.log("IN_ORDER: ", tree.print());

console.log("PRE_ORDER: ", tree.print("PRE_ORDER"));

console.log("POST_ORDER: ", tree.print("POST_ORDER"));

exports.createBinaryNode = createBinaryNode;
exports.createBinaryTree = createBinaryTree;
