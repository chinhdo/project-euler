import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Solutions</h1>
      <h2>Problem 5 - Smallest multiple</h2>
      <div>
        <p>2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?</p>
        <p className="answer">{time(p5SmallestMultiple)}</p>
      </div>
      <div>
        <h2>Problem 6 - Sum square difference</h2>
        <p>The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385.</p>
        <p>The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025</p>
        <p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640. Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p>
        <p className="answer">{time(p6SumSquareDiff)}</p>
      </div>
      <div>
        <h2>Problem 7 - 10001st prime</h2>
        <p>By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?</p>
        <p className="answer">{time(p7_10001stPrime)}</p>
      </div>
      <div>
        <h2>Problem 8 - Largest product in a series</h2>
        <p>The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.</p>

        <p>
          73167176531330624919225119674426574742355349194934
          96983520312774506326239578318016984801869478851843
          85861560789112949495459501737958331952853208805511
          12540698747158523863050715693290963295227443043557
          66896648950445244523161731856403098711121722383113
          62229893423380308135336276614282806444486645238749
          30358907296290491560440772390713810515859307960866
          70172427121883998797908792274921901699720888093776
          65727333001053367881220235421809751254540594752243
          52584907711670556013604839586446706324415722155397
          53697817977846174064955149290862569321978468622482
          83972241375657056057490261407972968652414535100474
          82166370484403199890008895243450658541227588666881
          16427171479924442928230863465674813919123162824586
          17866458359124566529476545682848912883142607690042
          24219022671055626321111109370544217506941658960408
          07198403850962455444362981230987879927244284909188
          84580156166097919133875499200524063689912560717606
          05886116467109405077541002256983155200055935729725
          71636269561882670428252483600823257530420752963450
        </p>
        <p>Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?</p>
        <p className="answer">{time(p8_largestProduct)}</p>
      </div>
    </div>
  );
}

function time(f: Function) {
  const t1 = window.performance.now();
  const result = f();
  const t2 = window.performance.now();
  const elapsed = t2 - t1;
  return `${result} (${formatNumber(elapsed)} ms)`;
}

function formatNumber(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

function p5SmallestMultiple(): number {
  let n = 2520;
  while (true) {
    n += 20;
    if (n % 20 === 0 && n % 19 === 0 && n % 18 === 0 && n % 17 === 0 && n % 16 === 0
      && n % 15 === 0 && n % 14 === 0 && n % 13 === 0 && n % 12 === 0 && n % 11 === 0
    ) {
      return n;
    }
  }
}

function p6SumSquareDiff(): number {
  const num = 100;
  let sumSquares = 0;
  let squareSum = 0;
  for (let n = 1; n <= num; n++) {
    sumSquares += Math.pow(n, 2);
    squareSum += n;
  }
  squareSum = Math.pow(squareSum, 2);

  const diff = squareSum - sumSquares;

  return diff;
}

function p7_10001stPrime(): number {
  const numPrimes = 10001;
  let n = 3;
  let primes: number[] = [2];
  while (primes.length < numPrimes) {
    let isPrime = true;
    for (let i = 0; i < primes.length; i++) {
      if (n % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(n);
    }

    n += 2;
  }

  console.log(primes);

  return primes[primes.length - 1];
}

function p8_largestProduct(): number {
  const num = "73167176531330624919225119674426574742355349194934"
    + "96983520312774506326239578318016984801869478851843"
    + "85861560789112949495459501737958331952853208805511"
    + "12540698747158523863050715693290963295227443043557"
    + "66896648950445244523161731856403098711121722383113"
    + "62229893423380308135336276614282806444486645238749"
    + "30358907296290491560440772390713810515859307960866"
    + "70172427121883998797908792274921901699720888093776"
    + "65727333001053367881220235421809751254540594752243"
    + "52584907711670556013604839586446706324415722155397"
    + "53697817977846174064955149290862569321978468622482"
    + "83972241375657056057490261407972968652414535100474"
    + "82166370484403199890008895243450658541227588666881"
    + "16427171479924442928230863465674813919123162824586"
    + "17866458359124566529476545682848912883142607690042"
    + "24219022671055626321111109370544217506941658960408"
    + "07198403850962455444362981230987879927244284909188"
    + "84580156166097919133875499200524063689912560717606"
    + "05886116467109405077541002256983155200055935729725"
    + "71636269561882670428252483600823257530420752963450";

  const digits = 13;
  let max = 0;

  for (let i = 0; i < num.length - 4; i++) {
    let p = 1;
    for (let j = i; j < i + digits; j++) {
      p *= parseInt(num[j]);
    }
    if (p > max) { max = p };
  }

  return max;
}


export default App;
