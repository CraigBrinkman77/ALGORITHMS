class Solution(object):
    def deleteDuplicates(self, head):
        if head == None:
            return head
        

        pointer1 = head
        runner = pointer1.next
        
        while runner:
            if runner.next == None:
                break
        
            elif runner.val == runner.next.val:
                runner = runner.next
                while runner:
                    if runner.val == runner.next.val:
                        runner = runner.next
                    else:
                        if head.val == head.next.val:
                            head = runner.next
                        pointer1.next = runner.next
                        runner = pointer1.next
                        break
            else:
                pointer1 = runner
                runner = pointer1.next
                
        
        return head