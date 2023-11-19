export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        this.length--;
        const out = this.data[0];

        if (this.length === 0) {
            this.data = [];
            return out;
        }

        this.data[0] = this.data[this.length];
        this.heapifyDown(0);

        return out;
    }

    private heapifyDown(index: number): void {
        if (index >= this.length) {
            return;
        }

        const leftIndex = this.getLeftChildIndex(index);
        const rightIndex = this.getRightChildIndex(index);

        if (leftIndex >= this.length) {
            return;
        }

        const leftValue = this.data[leftIndex];
        const rightValue = this.data[rightIndex];
        const currentValue = this.data[index];

        if (leftValue > rightValue && currentValue > rightValue) {
            this.data[index] = rightValue;
            this.data[rightIndex] = currentValue; 
            this.heapifyDown(rightIndex);
            return;
        }

        if (rightValue > leftValue && currentValue > leftValue) {
            this.data[index] = leftValue;
            this.data[leftIndex] = currentValue; 
            this.heapifyDown(leftIndex);
            return;
        }
    }

    private heapifyUp(index: number): void {
        if (index === 0) {
            return;
        }

        const parentIndex = this.getParentIndex(index);
        const parentValue = this.data[parentIndex];
        const currentValue = this.data[index];

        if (parentValue > currentValue) {
            this.data[index] = parentValue;
            this.data[parentIndex] = currentValue;
            this.heapifyUp(parentIndex);
        }
    }

    private getParentIndex(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    private getLeftChildIndex(index: number): number {
        return index * 2 + 1;
    }

    private getRightChildIndex(index: number): number {
        return index * 2 + 2;
    }
}
