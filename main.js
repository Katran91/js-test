export function getInitialArray(size) {
    let col = [size];
    for(var i = 0; i<size; i++){
        let row = [size];
        for(var j = 0; j<size; j++){
            row[j] = Math.floor(Math.random() * Math.floor(size/2));
        }
        col[i] = row;
    }
    return col;
}

export function getAllNeighbors(matrix, index){
    let value = matrix[index.x][index.y];
    let initIndices = [index];

    return getNeighborsIndexesForArray(initIndices,matrix,value);
}

function getNeighborsIndexesForArray(indices, matrix, value){
    let res = indices.slice();

    indices.forEach((element)=>{
        let neighbors = getNeighborsIndexesForIndex(matrix, value, element);
        neighbors.forEach((neighbor)=>{
            if(!isIndexInArray(neighbor,res)){
                res.push(neighbor);
            }
        });
    });

    if(res.length === indices.length){
        return res;
    } else {
        return getNeighborsIndexesForArray(res,matrix,value);
    }
}

function getNeighborsIndexesForIndex(matrix, value, index) {
    let indices = [
        {x: index.x - 1, y: index.y},
        {x: index.x + 1, y: index.y},
        {x: index.x, y: index.y + 1},
        {x: index.x, y: index.y - 1}
    ];

    return indices.filter((elem)=> {
        return elem.x >= 0 && elem.x < matrix.length
            && elem.y >= 0 && elem.y < matrix.length
            && matrix[elem.x][elem.y] === value
    });
}

function isIndexInArray(index,arr){
    var i = arr.length;
    while (i--) {
        if ((arr[i].x === index.x) && (arr[i].y === index.y)) {
            return true;
        }
    }
    return false;
}

