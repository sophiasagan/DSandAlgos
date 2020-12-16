def binary_search(list, item):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high) / 2 # check middle element
        guess = list[mid]
        if guess == item: # found item
            return mid
        if guess > item: # too high
            high = mid - 1
        else: # too low
            low = mid + 1
        return None # item doesn't exist

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3)) # => 1
print(binary_search(my_list, -1)) # => None