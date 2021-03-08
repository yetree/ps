from collections import Counter
def solution(s):

    arr = Counter(list(s.upper()))
    if arr['P'] == arr['Y']:
        return True
    return False