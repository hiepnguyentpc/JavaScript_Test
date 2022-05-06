function findShortest(vectors) {
    let min = Infinity
    let res = []
    for (let i = 0; i < vectors.length; i++){
        let length_vector = 0;
        for (let j = 0; j < 3; j++){
            let squared = vectors[i][j] * vectors[i][j];
            length_vector += squared;
        }
        if (length_vector < min){
            min = length_vector;
            res = vectors[i];
        }
    }
    return res 
}
  
var vectors = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];
var shortest = findShortest(vectors);
console.log(shortest);
