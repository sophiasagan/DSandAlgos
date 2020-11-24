def max(list):
    if len(list) == 2:
        return list[0] if list[0] > list[1] else list[1] 
    sub_max = max(list[1:])
    return list[0] if list[0] > sub_max else sub_max

list = (1, 25, 4, 5, 19)

print(max(list))