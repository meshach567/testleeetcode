type Board = string[][];

class TrieNode {
  children: Record<string, TrieNode> = {};
  word: string | null = null;
}

function findWords(board: Board, words: string[]): string[] {
  const m = board.length;
  const n = board[0].length;
  const result: string[] = [];
  const root = new TrieNode();

  // Build Trie from words
  function insert(word: string): void {
    let node = root;
    for (const c of word) {
      if (!node.children[c]) {
        node.children[c] = new TrieNode();
      }
      node = node.children[c];
    }
    node.word = word;
  }

  for (const word of words) {
    insert(word);
  }

  // DFS Search
  function dfs(i: number, j: number, node: TrieNode): void {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    const c = board[i][j];
    if (c === '*' || !(c in node.children)) return;

    const nextNode = node.children[c];
    if (nextNode.word) {
      result.push(nextNode.word);
      nextNode.word = null; // avoid duplicate entries
    }

    board[i][j] = '*'; // mark visited
    dfs(i + 1, j, nextNode);
    dfs(i - 1, j, nextNode);
    dfs(i, j + 1, nextNode);
    dfs(i, j - 1, nextNode);
    board[i][j] = c; // restore character
  }

  // Start DFS from each cell
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, root);
    }
  }

  return result;
}

// Run with your input
const board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"]
];

const words = ["oath", "pea", "eat", "rain"];

const output = findWords(board, words);
console.log(output); // ➜ [ 'oath', 'eat' ]
