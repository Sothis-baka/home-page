### LeetCode 486 Predict the Winner, Medium

(dp, 1ms solution)

##### [Link to the problem](https://leetcode.com/problems/predict-the-winner/)

##### Method

We use a helper function to get the maximum gain in current case. (No matter who is playing)

```java
private int canWin(int[] nums, int start, int end, Integer[][] cache);
```

Start and end indicate available range, and we also use an array cache to save examined cases. 

If player chooses the start one, self gain is nums[start], the gain from opponent would be 

```java
canWin(int[] nums, int start + 1, int end, Integer[][] cache)
```

Vice versa, if the player chooses the end one, self gain is nums[end], the gain from opponent would be

```
canWin(int[] nums, int start, int end - 1, Integer[][] cache)
```

##### Code

```java
public boolean PredictTheWinner(int[] nums) {
    Integer[][] cache = new Integer[nums.length][nums.length];
    int future = canWin(nums, 0, nums.length - 1, cache);
    return future >= 0;
}

private int canWin(int[] nums, int start, int end, Integer[][] cache){
    if(start == end) return nums[start];
    if(cache[start][end] == null) cache[start][end] = Math.max(nums[start] - canWin(nums, start + 1, end, cache), nums[end] - canWin(nums, start, end - 1, cache));
    return cache[start][end];
}
```
