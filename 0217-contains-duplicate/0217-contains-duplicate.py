class Solution(object):
    def containsDuplicate(self, nums):
        a1 = len(set(nums))
        if a1 != len(nums):
            return True
        return False
        """
        :type nums: List[int]
        :rtype: bool
        """
        