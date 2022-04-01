import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
    public List<Integer> findAnagrams(String s, String p) {
    int slength = s.length();
    int plength = p.length();
    List<Integer> output = new ArrayList<>();
    
    int[] pArray = new int[26];
    for(int i = 0; i < plength; i++){
        char c = p.charAt(i);
        pArray[(int) c - 'a'] ++;
    }
    
    int[] sArray = new int[26];
    for (int i = 0; i < slength ; i++){
        //add 1 in sArray for char at i
        char c = s.charAt(i);
        sArray[(int) c - 'a'] ++;
        
        if(i >= plength){
            char c2 = s.charAt(i-plength);
            sArray[(int) c2 - 'a'] --; 
        }
        //check if arrays are equal
        if(Arrays.equals(pArray, sArray)){
                output.add(i - plength + 1);
            }
}
    return output;
    
}};