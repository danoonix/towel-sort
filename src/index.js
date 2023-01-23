
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  let reverse = [];
  if(Array.isArray(matrix)) {
    for(let i = 0; i < matrix.length; i++) {
      if(i % 2 !== 0) {
        reverse = matrix[i].reverse();
      }
      if(Array.isArray(matrix[i])) {
          for(let j = 0; j < matrix[i].length; j++) {
            if(i % 2 === 0) {
              res.push(matrix[i][j]);
            } else {
              res.push(reverse[j]);
            }
        }
      }
    }
  }
  return res;
}
