// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.


// I found this online but I'm still a bit confused as to how it works. Basically, the idea is to check if there is a cycle
// anywhere in the graph, and you DFS at each neighbor with the idea that if you catch and edge that is still "being explored"
// during the DFS you've found a cycle and return false. Need to practice more with the graph problems. These are probably your
// weakest area.


const buildAdjList = (n, edges) => {
    const adjList = Array.from({length: n}, () => []);

    for (let edge of edges) {
        let [src, dest] = edge;
        adjList[src].push(dest);
    }

    return adjList;
}

const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
    arrive[node]++;
    visited[node] = true;

    for (let neighbor of adjList[node]) {
        if (!visited[neighbor]) {
            visited[neighbor] = true;

            if (hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true;
        } else {
            if (depart[neighbor] === 0) return true;
        }
    }

    depart[node]++;
    return false;
}


var canFinish = function(numCourses, prerequisites) {
    const adjList = buildAdjList(numCourses, prerequisites);
    const visited = {};
    const arrive = Array.from({length: numCourses}, () => 0);
    const depart = Array.from({length: numCourses}, () => 0);

    for (let vertex = 0; vertex < adjList.length; vertex++) {
        if (!visited[vertex]) {
            if(hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false;
        }
    }

    return true;
};
