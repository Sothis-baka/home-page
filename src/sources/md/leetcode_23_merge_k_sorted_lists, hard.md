### Leetcode 23 Merge k Sorted Lists, Hard

##### [Link to the problem](https://leetcode.com/problems/merge-k-sorted-lists/)

##### Method

Using PriorityQueue to save the lists. Sort them by comparing the first elements. (Empty list shouldn't be added in)

Each time we poll out the first list, save the first element to result. If the list is not empty, add it back to the queue. (In this way we can garantee the order of lists)

##### Code

```java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        Queue<ListNode> queue = new PriorityQueue<>((a, b) -> a.val - b.val);
        for(ListNode list: lists){
            if(list != null) queue.offer(list);
        }

        ListNode head = new ListNode(), pt = head;
        while(!queue.isEmpty()){
            ListNode list = queue.poll();
            pt.next = list;
            pt = pt.next;
            if(list.next != null) queue.offer(list.next);
        }

        return head.next;
    }
}
```
