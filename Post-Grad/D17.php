class Solution {

/**
 * @param Integer[] $nums
 * @return Integer[][]
 */
function subsetsWithDup($nums) {
    sort($nums);
    
    $all = [[]];
    
    $this->subsets([], 0, $nums, $all);

    return $all;
}

function subsets($pre, $begin, $nums, &$all) {
    $last = null;
    
    for ($i = $begin; $i < count($nums); $i++) {
        if ($i != $begin && $nums[$i] == $last) {
            continue;
        } else {
            $last = $nums[$i];
        }
        
        $last = $nums[$i];
        
        $all[] = array_merge($pre, [$nums[$i]]);
        
        $this->subsets(
            array_merge($pre, [$nums[$i]]),
            $i + 1,
            $nums,
            $all
        );
    }
}
}