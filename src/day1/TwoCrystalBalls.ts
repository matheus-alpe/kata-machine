// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    // walk square root of N and find where it breaks
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) {
            break;
        }
    }

    // we jump back a square root of N
    i -= jumpAmount;

    // then we linearly walk forward at most, a square root of N until we find a break
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            // index which it breaks
            return i;
        }
    }

    // or we return -1
    return -1;
}
