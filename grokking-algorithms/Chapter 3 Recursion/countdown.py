def countdown(i):
    print(i)
    if i <= 0:
        return # base case
    else:
        countdown(i - 1) # recursive case