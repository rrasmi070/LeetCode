class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        l = len(arr)
        if l == 1:
            arr[0] = -1
            return arr
        right=-1
        for i in range(l-1, -1, -1):
            now = arr[i]
            arr[i] = right
            if now > right:
                right = now
        return arr