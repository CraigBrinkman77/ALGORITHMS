

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;


//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0


function diagonalDifference(sqrMatrix) {
    let x = 0; // row
    let y = 0; // column

    let i = 0; //row
    let j = sqrMatrix[0].length - 1 //column

    let leftDiag = 0; //sum of left diag nums
    let rightDiag = 0; // sum of right diag nums
    let dif = 0; // difference of left and right diags

    while (x < sqrMatrix.length) {
        leftDiag += sqrMatrix[x][y];
        x++;
        y++;
    }
    console.log("leftDiag = " + leftDiag)
    while (i < sqrMatrix.length) {
        rightDiag += sqrMatrix[i][j];
        i++;
        j--;
    }
    console.log("rightDiag = " + rightDiag)


    if (leftDiag > rightDiag) {
        dif = leftDiag - rightDiag;
    }
    else {
        dif = rightDiag - leftDiag;
    }
    // console.log("the absolute diffence = "+dif)
    return (dif)

    //given a square matrix (2d array) of integers
    // calculate the absolute difference between the sum of its diagonals

}

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))