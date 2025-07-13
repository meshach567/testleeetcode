// Problem:
// Given the root of a binary tree, return the inorder traversal of its nodes’ values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]

function inorderTraversal(root) {
    const result = [];
    function traverse(node) {
        if (node) {
            traverse(node.left);
            result.push(node.val);
            traverse(node.right);
        }
    }
    traverse(root);
    return result;
}

console.log(inorderTraversal([1, null, 2, 3])); // Output: [1, 3, 2]