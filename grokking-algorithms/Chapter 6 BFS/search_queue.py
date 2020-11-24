from collections import deque
search_queue = deque() # creates a new queue
search_queue += graph["you"] # adds all of your neighbors to the search queue

while search_queue: # while the queue isn't empty
    person = search_queue.popleft() # grabs the first person off the queue
    if person_is_seller(person): # checks whether the person is a mango seller
        print(person + " is a mango seller!") # yes they're a mango seller
        return True
    else:
        search_queue += graph[person] # no, they aren't. add all of this person's friends to the search queue.
return False # if you reached here, no one in the queue was a mango seller

def person_is_seller(name):
    return name[-1] == 'm'