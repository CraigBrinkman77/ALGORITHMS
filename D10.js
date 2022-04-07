var numIslands = function(grid) {
    let output = 0;
    let rLength = grid.length
    let cLength = grid[0].length
    for (let row = 0; row < grid.length; row++ ){
        for ( let column = 0; column < grid[0].length; column ++){
            if(grid[row][column] == 1){
                output += 1
                islandTest(grid, row, column)
            }
        }
    }
    return output
};
    
var islandTest = function(grid, row, column){
    if(row < 0 || row > grid.length - 1 || column < 0 || column > grid[0].length -1  || grid[row][column] == 0){
        return
    }
    if(grid[row][column] == 1){
        grid[row][column] = "X"
        islandTest(grid, row + 1, column)
        islandTest(grid, row - 1, column)
        islandTest(grid, row, column + 1)
        islandTest(grid, row, column - 1)
    }
    
}