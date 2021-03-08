from collections import Counter
def solution(nums):
    answer = 0
    pocket = Counter(nums)
    if len(pocket) > len(nums)//2:
        return len(nums)//2
    else:
        return len(pocket)
    return answer
    