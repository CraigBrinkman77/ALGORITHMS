class Solution(object):
    def shortestPathBinaryMatrix(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        if(grid[0][0] != 0):
            return -1
        if(grid[0][0] == 0):
            output = self.isPath(0, 0, grid, 0)
            
        if(output == 7777):
            return -1
        else: return output
        
    def isPath(self, row, column, grid, output):
        if(row > len(grid)-1 or column > len(grid)-1 or row < 0 or column < 0 or grid[row][column] != 0):
            return 7777
            
        if(grid[row][column] == 0):
            output += 1
            grid[row][column] = "x"
            if(row == len(grid) -1  and column == len(grid) -1):
                return output
            return min(self.isPath(row +1, column +1, grid, output), self.isPath(row +1, column, grid, output), self.isPath(row, column +1, grid, output), self.isPath(row -1, column -1, grid, output), self.isPath(row +1, column - 1, grid, output), self.isPath(row -1, column, grid, output), self.isPath(row -1, column +1, grid, output), self.isPath(row, column -1, grid, output))