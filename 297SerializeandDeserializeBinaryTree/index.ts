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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    if (!root) return '';

    const queue: (TreeNode | null)[] = [root];
    const result: string[] = [];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val.toString());
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push('null');
        }
    }

    // Remove trailing 'null's to compact the string
    while (result[result.length - 1] === 'null') {
        result.pop();
    }

    return result.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    if (!data) return null;

    const nodes = data.split(',');
    const root = new TreeNode(parseInt(nodes[0]));
    const queue: TreeNode[] = [root];

    let i = 1;

    while (i < nodes.length) {
        const current = queue.shift();

        if (nodes[i] !== 'null') {
            const leftNode = new TreeNode(parseInt(nodes[i]));
            current!.left = leftNode;
            queue.push(leftNode);
        }
        i++;

        if (i < nodes.length && nodes[i] !== 'null') {
            const rightNode = new TreeNode(parseInt(nodes[i]));
            current!.right = rightNode;
            queue.push(rightNode);
        }
        i++;
    }

    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

