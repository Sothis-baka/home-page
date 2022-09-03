### Leetcode 56 Merge Interval, Medium

##### [Link to the problem](https://leetcode.com/problems/merge-intervals)

##### Method

First, we need to sort intervals by the start value.

Use LinkedList cur to save current interval.

If the list is empty, we insert the interval directly.

Otherwise we need to compare current last interval [a, b] with the interval need to be add in [c, d].

There are 3 conditions.

* c > b, which means the two intervals do not intersect, we can add [c, d] to the end of list.

* a <= c <= b, and d<=b. In this case, [c, d] is already included in current intervals, nothing need to be done.

* a <= c <= b, and d > b. In this case, we need to extend [a, b] to cover the new range. So we change the pair [a, b] to [a, d].

##### Optimize

In addition to sort intervals by start1 < start2, if they start at the same position, we need to put end1 before end2 if end1 > end2, in this case we decrease time of operations. (Later one is covered)

##### Code

```java
public int[][] merge(int[][] intervals) {
    // Sort the array
    Arrays.sort(intervals, (a, b) -> a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);

    LinkedList<int[]> result = new LinkedList<>();
    for(int[] interval: intervals){
        if(result.isEmpty() || interval[0] > result.peekLast()[1]){
            result.addLast(new int[]{interval[0], interval[1]});
        }else if(interval[1] > result.peekLast()[1]){
            result.peekLast()[1] = interval[1];
        }
    }

    // Save to the stucture required by the question.
    int[][] answer = new int[result.size()][];
    int i=0;
    while(!result.isEmpty()){
        answer[i++] = result.removeFirst();
    }
    
    return answer;
}
```
