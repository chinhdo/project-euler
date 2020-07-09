import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Solutions</h1>
      <p>For source code see <a href="https://github.com/chinhdo/project-euler/blob/master/src/App.tsx">GitHub</a></p>
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
        <p className="answer">{time(p7)}</p>
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
      <div>
        <h2>Problem 9 - Special Pythagorean triplet</h2>
        <p>A Pythagorean triplet is a set of three natural numbers, <var>a</var> &lt; <var>b</var> &lt; <var>c</var>, for which,</p>
        <div> <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></div>
        <p>For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.</p>
        <p>There exists exactly one Pythagorean triplet for which <var>a</var> + <var>b</var> + <var>c</var> = 1000.<br />Find the product <var>abc</var>.</p>
        <p className="answer">{time(p9)}</p>
      </div>
      <div>
        <h2>Problem 10 - Summation of primes</h2>
        <p>The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.</p>
        <p className="answer">{time(p10)}</p>
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

// 10001st prime
function p7(): number {
  const numPrimes = 10001;
  const atkins = sieveOfAtkin(100000);

  let n = 3;
  let primes: number[] = [2];
  while (primes.length < numPrimes) {
    let isPrime = true;
    if (n < atkins.length) {
      isPrime = atkins[n];
    }
    else {
      for (let i = 0; i < primes.length; i++) {
        if (n % primes[i] === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      primes.push(n);
    }

    n += 2;
  }

  return primes[numPrimes - 1];
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

// Special Pythagorean triplet
function p9(): number {
  const n = 1000;
  for (let n1 = 1; n1 < n; n1++) {
    for (let n2 = n1 + 1; n2 < (n - n1); n2++) {
      for (let n3 = n2 + 1; n3 < (n - n2); n3++) {
        if (
          (n1 + n2 + n3 === n) &&
          ((Math.pow(n1, 2) + Math.pow(n2, 2) === Math.pow(n3, 2)))
        ) {
          return n1 * n2 * n3;
        }
      }
    }
  }

  return -1;
}

// Answer is 142913828922
function p10(): number {
  const max = 2000000;

  const atkins = sieveOfAtkin(2000000);

  let n = 3;
  let primes: number[] = [2];
  let sum = 2;

  while (true) {
    let isPrime = true;

    if (n < atkins.length) {
      isPrime = atkins[n];
    }
    else {
      const sr = Math.sqrt(n);
      for (let i = 0; i < primes.length; i++) {
        const p = primes[i];
        if (p <= sr && n % p === 0) {
          isPrime = false;
          break;
        }
      }
    }

    if (isPrime) {
      primes.push(n);
      sum += n;
    }

    n += 2;

    if (n >= max) {
      return sum;
    }
  }
}

function sieveOfAtkin(limit: number): boolean[] {
  var limitSqrt = Math.sqrt(limit);
  var sieve = [];
  var n;

  //prime start from 2, and 3
  sieve[2] = true;
  sieve[3] = true;

  for (var x = 1; x <= limitSqrt; x++) {
    var xx = x * x;
    for (var y = 1; y <= limitSqrt; y++) {
      var yy = y * y;
      if (xx + yy >= limit) {
        break;
      }
      // first quadratic using m = 12 and r in R1 = {r : 1, 5}
      n = (4 * xx) + (yy);
      if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
        sieve[n] = !sieve[n];
      }
      // second quadratic using m = 12 and r in R2 = {r : 7}
      n = (3 * xx) + (yy);
      if (n <= limit && (n % 12 === 7)) {
        sieve[n] = !sieve[n];
      }
      // third quadratic using m = 12 and r in R3 = {r : 11}
      n = (3 * xx) - (yy);
      if (x > y && n <= limit && (n % 12 === 11)) {
        sieve[n] = !sieve[n];
      }
    }
  }

  // false each primes multiples
  for (n = 5; n <= limitSqrt; n++) {
    if (sieve[n]) {
      x = n * n;
      for (let i = x; i <= limit; i += x) {
        sieve[i] = false;
      }
    }
  }

  //primes values are the one which sieve[x] = true
  return sieve;
}

export default App;