
// You should implement your task here.

module.exports = function towelSort (matrix) {  
  
  if (matrix == null || matrix.length == 0 || arguments.length === 0) {
    return [];
  } 

  let numArr = matrix.length;
  let newArr = [];
  
  for (let i = 1; i < numArr; i++) {
    if (!(i % 2 === 0)) {
      matrix[i].sort(function(a, b) { return b - a; });
    }
    newArr.push(matrix[i])
  }   
  newArr.unshift(matrix[0]);
  let res = [];
  for (let j = 0; j < newArr.length; j++) {
    for(let g = 0; g < newArr[j].length; g++) {
      res.push(newArr[j][g]);
    }
  }  
  
    return res;
   
}
