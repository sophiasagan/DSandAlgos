"""
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
"""
def longest_substring_with_k_distinct(str1, k):
  window_start = 0
  max_length = 0
  count = {}

  # in the following loop we'll try to extend the range [window_start, window_end]
  for window_end in range(len(str1)):
    next_idx = str1[window_end]
    if next_idx not in count:
      count[next_idx] = 0
    count[next_idx] += 1

    # shrink the sliding window, until we are left with 'k' distinct characters in the count
    while len(count) > k:
      prev_idx = str1[window_start]
      count[prev_idx] -= 1
      if count[prev_idx] == 0:
        del count[prev_idx]
      window_start += 1  # shrink the window
    # remember the maximum length so far
    max_length = max(max_length, window_end-window_start + 1)
  return max_length


def main():
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 2)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("araaci", 1)))
  print("Length of the longest substring: " + str(longest_substring_with_k_distinct("cbbebi", 3)))


main()

"""
Time Complexity #
The above algorithm’s time complexity will be O(N)O(N), where ‘N’ is the number of characters in the input string. The outer for loop runs for all characters, and the inner while loop processes each character only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)O(N).

Space Complexity #
The algorithm’s space complexity is O(K)O(K), as we will be storing a maximum of ‘K+1’ characters in the HashMap.

"""