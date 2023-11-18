function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    // base case:
    if (!curr) {
        return path;
    }

    // recurse steps:
    // 1 pre
    path.push(curr.value);

    // 2 recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // 3 post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
