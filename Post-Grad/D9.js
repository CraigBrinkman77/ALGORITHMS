var numIslands = function(grid) {
    let output = 0;
    for (let i = 0; i < grid.length; i++ ){
        for ( j = 0; j < grid[0].length; j ++){
            if (grid[i][j] == 1){
                // topLeftCorner
                if(j == 0 && i == 0 && grid[i+1][j] == 0 && grid[i+1][j +1] == 0 && grid[i][j+1] == 0){
                    output += 1;
                }
                // bottomLeftCorner
                else if (i == grid.length && j == 0 && grid[i-1][j] == 0 && grid[i-1][j+1] == 0 && grid[i][j+1] == 0){
                    output += 1;
                }
                // topRightCorner
                else if(i == 0 && j == grid[0].length && grid[i][j-1] == 0 && grid[i+1][j-1] == 0 && grid[i+1][j] == 0 ){
                    output += 1; 
                }
                // bottomRightCorner
                else if(i == grid.length && j == grid[0].length && grid[i][j-1] == 0 && grid[i-1][j-1] == 0 && grid[i-1][j] == 0){
                    output += 1;
                }
                // topRow not corner
                else if (i == 0 && grid[i][j-1] == 0 && grid[i][j+1] == 0 && grid[i+1][j +1] == 0 && grid[i+1][j-1] == 0 && grid[i+1][j] == 0){
                    output += 1;
                }
                // bottomRow not corner
                else if(i == grid.length && grid[i][j-1] == 0 && grid[i][j+1] == 0 && grid[i-1][j-1] == 0 && grid[i-1][j] == 0 && grid[i-1][j+1] == 0){
                    output += 1;
                }
                //leftColumn not corner
                else if(j == 0 && grid[i-1][j] == 0 && grid[i-1][j+1] == 0 && grid[i][j+1] == 0 && grid[i+1][j] == 0 && grid[i+1][j +1] == 0){
                    output += 1;
                }
                // rightColumn not corner
                else if(j == grid[0].length && grid[i-1][j] == 0 && grid[i-1][j-1] == 0 && grid[i][j-1] == 0 && grid[i+1][j-1] == 0 && grid[i+1][j] == 0){
                    output += 1;
                }
                // everything else
                else if(grid[i][j-1] == 0 && grid[i+1][j-1] == 0 && grid[i+1][j] == 0 && grid[i-1][j] == 0 && grid[i-1][j+1] == 0 && grid[i][j+1] == 0 && grid[i-1][j-1] == 0 && grid[i+1][j-1] == 0){
                    output += 1;
                }
            } 
            
        }
    }
};