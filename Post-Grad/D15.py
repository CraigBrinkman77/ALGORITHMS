class Solution(object):

    def allPathsSourceTarget(self, graph):
        """
        :type graph: List[List[int]]
        :rtype: List[List[int]]
        """
        output = []
        for i in graph[0]:
            for j in len(graph[i]):
                self.whatPath(graph, i, output, [0])
        
        return output
    
    def whatPath(self, graph, direction, output, path):
    
        path.append(direction)
        print path
        if (direction == len(graph) - 1):
            return output.append(path)
        else:
            for i in graph[direction]:
                self.whatPath(graph, i, output, path)