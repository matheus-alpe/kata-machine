// breadth first search
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: Array<BinaryNode<number> | null> = [head];

    while (queue.length) {
        // get first element of queue
        const current = queue.shift() as BinaryNode<number> | undefined | null;
        if (!current) {
            continue;
        }

        // search
        if (current.value === needle) {
            return true;
        }

        // enqueue left/right
        queue.push(current.left)
        queue.push(current.right)
    }

    return false;
}
