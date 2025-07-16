/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
    let maxSum = -Infinity;

    function maxGain(node: TreeNode | null): number {
        if (node === null) return 0;

        // Ignore paths with negative sums
        const leftGain = Math.max(0, maxGain(node.left));
        const rightGain = Math.max(0, maxGain(node.right));

        // Price of the new path through this node
        const priceNewPath = node.val + leftGain + rightGain;

        // Update global max if new path is better
        maxSum = Math.max(maxSum, priceNewPath);

        // Return the max gain the current node contributes to its parent
        return node.val + Math.max(leftGain, rightGain);
    }

    maxGain(root);
    return maxSum;
};