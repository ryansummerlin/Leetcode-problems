// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }


// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.


// The syntax on this problem threw me off a bit but the format is fairly straightforward. Basically, it's just a dfs where at each
// iteration, you check to see if the node has already been visited, and if not, add it to the visited map. Then, you push another
// iteration of the dfs to the neighbors adjacency list. Time complexity O(n + e) where e is the number of edges. Space complexity
// O(n).


var cloneGraph = function(node) {
    let visited = {};
    const dfs = function(node) {
        if (!node) return node;
        if (visited[node.val]) return visited[node.val];

        let root = new Node(node.val);
        visited[node.val] = root;
        for (let i = 0; i < node.neighbors.length; i++) {
            let neighbor = node.neighbors[i];
            root.neighbors.push(dfs(neighbor));
        }

        return root;
    }

    return dfs(node);
};
