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

        if(currentPos[0] === target[0] && currentPos[1] === target[1]){
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(pos));
            return path;
        }
    }

    for(const move of moves){
        const newPosition = [currentPos[0] + move[0], currentPos[1] + move[1]];

        if(isWithinBoard(newPosition) && !visited.has(newPosition.toString())){
            visited.add(newPosition.toString());
            queue.push([newPosition, path.concat([newPosition])]);
        }
    }
}