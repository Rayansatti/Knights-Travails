function knightMoves(start, target){
    const moves = [
        [2, 1], [1, 2], [-1, -2], [-2, -1],
        [-1, 2], [-2, 1], [1, -2], [2, -1]
    ];

    const queue = [[start, [start]]];
    const visited = new set();
    visited.add(start.toString());

    function isWithinBoard(position){
        return position[0] >= 0 && position[0] < 8 && position[1] >= 0 && position[1] < 8;
    }

    while(queue.length > 0){
        const [currentPos, path] = queue.shift();
    }
}