/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            let nextNode = curr.next; // 1. Save the rest of the list
            curr.next = prev;         // 2. Reverse the pointer
            prev = curr;              // 3. Move 'prev' one step forward
            curr = nextNode;          // 4. Move 'curr' one step forward
        }

        // 'prev' will be pointing to the new head at the end
        return prev;

        //head.next = null
        //head.next.next = head
    }
}
