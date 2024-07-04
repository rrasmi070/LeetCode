class Solution:
    def numberOfSteps(self, num: int) -> int:
        return self.helper(num)

    def helper(self, num, count=0):
        if num==0:
            return count
        rem = num%2
        if rem == 0:
            return self.helper((num//2), count+1)
        else:
            return self.helper(num-1, count+1)