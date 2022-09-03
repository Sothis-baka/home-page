### LeetCode 31 Next Permutation, medium

Runtime, faster than 100.00%

Memory, less than 95.11%

##### [Link to the problem](https://leetcode.com/problems/next-permutation/)

##### Method

Suppose we have an array [1,4,6,5,4,4,3,3]

Read from last digit to first digit

[1,**4**,6,5,4,4,3,3]

Target 4 is the one doesn't fulfill the highest rule.

Find the number just higher than 2, since the part after target is in descendant order, we need to find the first one larger than 4. In this case, candidate is 5.

[1,**4**,6,5,**5**,4,3,3]

Swap them

[1,**5**,6,5,**4**,4,3,3]

The part after candidate 5 is still in descendant order, reverse it to change it to ascendant order.

[1,**5**,3,3,**4**,4,5,6]

Other cases:

* [1,2,3]
  
  [1,**2**,3]
  
  [1,**2**,**3**]
  
  [1,**3**,**2**]

* [1,3,2]
  
  [**1**,3,2]
  
  [**1**,3,**2**]
  
  [**2**,3,**1**]

Special cases (when the array is already in the highest order):

Reverse the array to get the lowest order

* [5,4,3,2,1]
  
  [1,2,3,4,5]

##### Code

```java
public class Main {
    public static void nextPermutation(int[] nums) {
        int length = nums.length;

        /* All operations are done from the last digit to the first digit */

        // Find the first one not in order
        int target = -1;
        for(int i=1; i<length; i++){
            int index = length-i;
            if(nums[index] > nums[index-1]){
                target = index - 1;
                break;
            }
        }

        if(target == -1){
            // The array is in highest order, reverse it.
            reverse(nums, 0, length-1);
        }else {
            // Replace target number with the one higher than it.
            // The array after target is in descendant order, just find the first one higher than it.
            int cur = nums[target];
            for(int i=length-1; i>target; i--){
                if(nums[i] > cur){
                    swap(nums, i, target);
                    break;
                }
            }

            // Sort arrays after that, from highest to lowest
            reverse(nums, target+1, length-1);
        }
    }

    public static void reverse(int[] nums, int i, int j){
        while (i < j){
            swap(nums, i, j);
            i++;
            j--;
        }
    }

    public static void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    // Helper functions to visualize array
    public static void printNums(int[] nums){
        for(int temp: nums){
            System.out.print(temp);
        }
        System.out.println();
    }

    public static void main(String[] args){
        int[] nums = {1};

        printNums(nums);
        nextPermutation(nums);
        printNums(nums);
    }
}
```
