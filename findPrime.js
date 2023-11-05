function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function findPrimeNumbersInRange(start, end) {
  if (end === 0) {
    return false;
  }
  let timeArray = [];
  let startTime = performance.now();
  console.time("Timer");
  for (let i = start; i <= end; i++) {
    let flag = isPrime(i);

    if (flag) {
      console.log(i);
      timeArray.push({ no: i, result: "Prime", time });
    } else {
      timeArray.push({ no: i, result: "Normal", time });
    }
  }

  let endTime = performance.now();
  let timeTaken = endTime - startTime;
  console.log(timeTaken);
  console.log(timeArray);
}

findPrimeNumbersInRange(100, 200);

// console.log(isPrime(13));
