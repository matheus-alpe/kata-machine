export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true;
    const queue: number[] = [source]; 

    do {
        const current = queue.shift() as number;
        if (current === needle) break;

        const adjacencies = graph[current];
        for (let i = 0; i < adjacencies.length; ++i) {
            if (adjacencies[i] === 0 || seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = current;
            queue.push(i);
        }
    } while (queue.length);

    if (prev[needle] === -1) {
        return null;
    }

    let current = needle;
    const out: number[] = [];

    while (prev[current] !== -1) {
        out.push(current);
        current = prev[current];
    }

    return [source].concat(out.reverse());
}
