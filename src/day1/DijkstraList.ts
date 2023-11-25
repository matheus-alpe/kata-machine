function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    let has = false;

    for (let i = 0; i < seen.length; ++i) {
        if (!seen[i] && dists[i] < Infinity) {
            has = true;
            break;
        }
    }

    return has;
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
    let idx = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; ++i) {
        if (seen[i]) continue;

        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i];
            idx = i;
        }
    }

    return idx;
}

export default function dijkstra_list(source: number, sink: number, graph: WeightedAdjacencyList): number[] {
    const seen = new Array(graph.length).fill(false);
    const previous = new Array(graph.length).fill(-1);
    const dists = new Array(graph.length).fill(Infinity);

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const current = getLowestUnvisited(seen, dists);
        seen[current] = true;

        const adjs = graph[current];
        for (let i = 0; i < adjs.length; ++i) {
            const edge = adjs[i];
            if (seen[edge.to]) continue;

            const dist = dists[current] + edge.weight;
            if (dist < dists[edge.to]) {
                dists[edge.to] = dist;
                previous[edge.to] = current;
            }
        }
    }

    const out: number[] = [];
    let current = sink;

    while(previous[current] !== -1) {
        out.push(current);
        current = previous[current];
    }

    out.push(source)
    return out.reverse()
}
