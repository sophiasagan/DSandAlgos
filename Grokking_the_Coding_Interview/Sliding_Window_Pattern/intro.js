function find_averages_of_subarrays(K, arr) {
    const result = [];
    for (let i = 0; i < arr.length - K + 1; i++) {
      // find sum of next 'K' elements
      sum = 0.0;
      for (let j = i; j < i + K; j++) {
        sum += arr[j];
      }
      result.push(sum / K); // calculate average
    }
  
    return result;
  }
  
  
  const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
  console.log(`Averages of subarrays of size K: ${result}`);

//   Averages of subarrays of size K: 2.2,2.8,2.4,3.6,2.8

