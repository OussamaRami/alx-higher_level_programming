#!/usr/bin/python3

def find_peak(list_of_integers):
    if not list_of_integers:
        return None

    low = 0
    high = len(list_of_integers) - 1

    while low < high:
        mid = (low + high) // 2
        if list_of_integers[mid] < list_of_integers[mid + 1]:
            low = mid + 1
        else:
            high = mid

    return list_of_integers[low]

# Test cases
if __name__ == "__main__":
    print(find_peak([1, 2, 4, 6, 3]))      # 6
    print(find_peak([4, 2, 1, 2, 3, 1]))   # 4 or 3
    print(find_peak([2, 2, 2]))            # 2 (any peak)
    print(find_peak([]))                  # None
    print(find_peak([-2, -4, 2, 1]))      # 2 or 1
    print(find_peak([4, 2, 1, 2, 2, 2, 3, 1]))  # 4

