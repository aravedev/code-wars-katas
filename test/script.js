/*
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

const paperwork = (n, m) => {
  // n = classmates , m = paperwork to copy

  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
};

let copypages = paperwork(0, 10);
console.log(copypages);

/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

//``

*/

const findeNeedle = (arr) => {
  return arr;
};

isNeedle = findeNeedle([
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
  "plastic",
]);

arr2 = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
  "plastic",
];
/*
function findNeedle(arr) {
  if (arr.includes("needle")) {
    return `found the needle at position ${arr.indexOf("needle")}`;
  } else {
    return `there isnt needle in the junk`;
  }
}
*/
/*
const findNeedle = (arr) => {
  let num = arr.indexOf("needle");
  if (num != 0) {
    return `found the needle at position ${num}`;
  } else {
    return `There isnt needle`;
  }
};
*/
//let result = findNeed(arr2);
//console.log(result);
/*
if (e == "needle") {
      return `found the needle at position ${index}`;
    } else {
      return "There is not needle in the array";
    }
*/

//
/*
let dna = "GCATCATTAAAAT";

//let result = dna.replaceAll("T", "U");

//console.log(result);

function DNAtoRNA(dna) {
  if (dna != "") {
    let separation = dna.split("");

    for (let i = 0; i < separation.length; i++) {
      if (separation[i] == "T") {
        separation[i] = "U";
      }
    }

    return separation.join("");
  } else {
    return "There isnt input";
  }
}

let result2 = DNAtoRNA(dna);
console.log(result2);

/*
const DNAtoRNA = (dna) => {
  if (dna != "") {
    return dna.replaceAll("T", "U");
  } else {
    return "there is not input";
  }
};

let final = DNAtoRNA("");
console.log(final);
*/
/*
const arr = [];

function sumArray(array) {
  let arr = [...array];

  if (arr == null) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  let tempArr = [];

  arr.filter((number) => {
    if (number != max && number != min) {
      tempArr.push(number);
    } else {
      tempArr.push(0);
    }
  });

  let total = tempArr.reduce((acc, sum) => acc + sum, 0);

  return total;
}

*/
///console.log(sumArray([-6, -20, -1, -10, -12]), -28);
/*
let test = [[1, 2], [3, 4, 5], 6, null, undefined];
let emptyArr = [];
let c = test.map((e) => {
  if (Array.isArray(e)) {
    console.log(e);
    let emptyArr1 = [...e];

    emptyArr1.forEach((e) => emptyArr.push(e));
  } else {
    emptyArr.push(e);
  }
});
console.log(c);
console.log(emptyArr);
console.log(test);

/////
/*
function sumArray(arr) {
  if (arr == null || arr == undefined) {
    return 0;
  } else {
    let emptyArr = [];
    arr.forEach((e) => {
      if (Array.isArray(e)) {
        let isArray = [...e];
        isArray.forEach((i) => emptyArr.push(i));
      } else if (e == null) {
        emptyArr.push(0);
      } else {
        emptyArr.push(e);
      }
    });

    const max = Math.max(...emptyArr);
    const min = Math.min(...emptyArr);
    console.log(max);
    console.log(min);

    // Now excluding the max and min values

    let tempArr = [];

    emptyArr.filter((number) => {
      if (number != max && number != min) {
        tempArr.push(number);
      } else {
        tempArr.push(0);
      }
    });

    let total = tempArr.reduce((acc, sum) => acc + sum, 0);
    return total;
  }
}

console.log(sumArray([10, 1, 6, 10, 10]));
*/
//

/*

let test3 = [10, 1, 6, 10, 10];

function sumArray(arr) {
  if (arr == null) {
    return 0;
  } else {
    let sortedArray = arr.sort((a, b) => a - b);
    if (arr == null || sortedArray.length == 1 || sortedArray.length == 2) {
      return 0;
    } else {
      let myArr = [];

      for (let i = 1; i < arr.length - 1; i++) {
        myArr.push(arr[i]);
      }

      let total = myArr.reduce((acc, sum) => acc + sum, 0);
      return total;
    }
  }
}

*/
//console.log(sumArray1([null]));

//let spreadArray = [...sortedArray]

//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.
/*
function find_average(array) {
  if (array == null || array.length == 0) {
    return 0;
  } else {
    let avg = array.reduce((acc, sum) => acc + sum, 0) / array.length;
    return avg;
  }
}

console.log(find_average([]));
*/ /*

function find_average(array) {
  let avg = 0;
  array == null || array.length == 0
    ? 0
    : (avg = array.reduce((acc, sum) => acc + sum, 0) / array.length);
  return avg;
}
*/

//console.log(find_average([]));

//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//let arr12 = [-3, -2, -1, 1];

/*
function sum(numbers) {
  if (numbers != null) {
    let result = numbers.reduce((acc, sum) => acc + sum, 0);
    return result;
  } else {
    return 0;
  }
}
*/

//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//348597 => [7,9,5,8,4,3]

//Note: split only works with strings, if you are handling numbers, you have to convert them first to string.

//Here you apply toString() , Number , map, reverse
/*
const num = 12345;

function digitize(n) {
  let result = n.toString().split("").reverse();
  result = result.map((e) => Number(e));
  return result;
}

/*
const result = digitize(0);

const digitize = (n) => n.toString().split("").reverse();
*/
/*
console.log(digitize(num));

const reverseNumber = (number) => {
  return number
    .toString()
    .split("")
    .reverse()
    .map((e) => Number(e));
};

console.log(reverseNumber(6789));

*/

//Very simple, given an integer or a floating-point number, find its opposite.
//1: -1 / 14: -14 / -34: 34

//const opposite = (number) => -number;
//console.log(opposite(-1));

/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"


function repeatStr(n, s) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str = str + s;
  }
  return str;
}

const repeatS = (n, s) => s.repeat(n);

console.log(repeatS(2, "hi"));

*/

/*
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
/*
function murmur(n) {
  let str = [];
  for (let i = 1; i <= n; i++) {
    let mur = i + " sheep...";

    str.push(mur);
  }

  let mur = str.toString();
  return mur;
}

console.log(murmur(4));
*/
/*
function murmur(n) {
  let temp = "";
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = i + " sheep...";
    temp = temp + str;
  }

  return temp;
}

console.log(murmur(2));
*/

/*
// Create a function that returns "hello world1!" be creative

function greet() {
  const binary = [
    1101000, 1100101, 1101100, 1101100, 1101111, 100000, 1110111, 1101111,
    1110010, 1101100, 1100100, 100001,
  ];

  str = "";

  binary.forEach((e) => {
    str += String.fromCharCode(parseInt(e, 2));
  });

  return str;
}

console.log(greet());
*/

input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"];

/*
function openOrSenior(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const age = data[i][0];
    const handicap = data[i][1];

    if (age >= 55 && handicap > 7) {
      result.push("senior");
    } else {
      result.push("open");
    }
  }

  return result;
}

let r = openOrSenior(input);
console.log(r);


let result = [];
let position = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(input[i][j]);

    let firstPosition = input[i][j];
    let secondPosition = input[i][j + 1];

    if (firstPosition >= 55 && secondPosition > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  }
}

console.log(result);

*/
///
/*

Parameters: 




*/

///

/*
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

const input1 = [28, 87, 7, 15, 45];

function sumTwoSmallestNumbers(numbers) {
  let sortedList = [];
  sortedList = numbers.sort((a, b) => a - b);

  let result = sortedList[0] + sortedList[1];
  return result;
}

console.log(sumTwoSmallestNumbers(input1));

*/

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.
//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false

/*
function validatePin(pin) {
  if (Number(pin)) {
    if (pin.length == 4 || pin.length == 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
*/

// Validate pin

/*

const pin = "123\n";

function validatePin(pin) {
  const text = pin;
  const match = /\r|\n/.exec(text);

  if (pin.includes(match)) {
    return false;
  }

  let result = [];

  const n = pin.split("");

  console.log(n.length);

  if (n.includes(".") || n.includes("-")) {
    return false;
  } else {
    n.forEach((e) => {
      if (e == " " || e == "\n") {
        return false;
      } else {
        if (Number(e) >= 0) {
          result.push(e);
        } else {
          return false;
        }
      }
    });
  }

  // Now checking that result has lenght ==4 or ==6

  if (n.length === result.length) {
    if (result.length == 4 || result.length == 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(validatePin(pin));
/*
    if (Number(pin) && Number(pin) % 1 === 0) {
      let split = pin.split("");

      split.forEach((e) => {
        if (e >= 0) {
          result.push(e);
        }
      });

      if (result.length == 4 || result.length == 6) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }

    */

/*

const text = pin; //"abc\n123";
const match = /\r|\n/.exec(text);
console.log(match);

if (pin.includes(match)) {
  console.log("hmmm");
}

*/

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
STRINGSFUNDAMENTALS

function split(str) {
  if (str == "") {
    return true;
  } else {
    const s = str.toLowerCase();
    const separate = s.split("");
    let tempArr = [];
    let checker = true;

    if (checker == true) {
      for (let i = 0; i < separate.length; i++) {
        let tempArr = separate.filter((e) => e == separate[i]);
        console.log(tempArr);
        if (tempArr.length > 1) {
          checker = false;
          break;
        }
      }
    }

    return checker;
  }
}

// Solution by other user in codewars

function isIsogram(str){
  let value = true;
  str.toLowerCase().split('').sort().map((letter, index, array) => {
    if (letter === array[index + 1]) value = false;
  });
  return value;
}

const test3 = isIsogram("aba");
console.log(test3);

*/

/*


*/

/*

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
*/
/*
function printerError(s) {
  let acc = 0;
  let sLenght = s.length;
  const sampleErrors = [
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sample = s.split("");
  
  sample.forEach((e) => {
    //let numberErrors = sampleErrors.filter((element) => element.includes(e));
    sampleErrors.forEach((element) => {
      if (element == e) {
        acc = acc + 1;
      }
    });
  });

  let result = acc + "/" + sLenght;
  return result;
}

// Refactoring the previous solution

/*
const label = "aaaxbbbbyyhwawiwjjjwwm";

function filterStr(str) {
  let sampleError = str.split("").filter((e) => e > "m");
  const numError = sampleError.length + "/" + str.length;
  return numError;
}

filterStr(label);
*/

/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
  const prop1 = a + b > c;
  const prop2 = b + c > a;
  const prop3 = c + a > b;

  if (prop1 && prop2 && prop3) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangle(2, 2, 2));


*/

/*Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real" */
/*

// This function is correct, but isnt in the format requested by the kata
function toJadenCase(str) {
  const split = str.split(" ");
  let phrase = "";

  for (let i = 0; i < split.length; i++) {
    let firstLetter = split[i].substring(0, 1).toUpperCase();
    let restLetters = split[i].substring(1, split[i].length);
    phrase = phrase + firstLetter + restLetters + " ";
  }

  return phrase;
}


// Correct Answer using prototype
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

console.log(str.toJadenCase());

//
String.prototype.toJadenCase = function() {
  return this
    .split(" ")
    .map(i => i.replace(i[0], i[0].toUpperCase()))
    .join(" ");
};
*/

/*

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a, b) {
  let result = a + b;
  return result.toString(2);
}

console.log(addBinary(10, 40));

// this time, they give us an array with 0s and 1s to convert from binary to decimal

const result = 10;
let x = "101010";

console.log(parseInt(x, 2));

let arr = [0, 0, 0, 1];
arr = arr.join("");

const binaryArrayToNumber = (arr) => {
  const result = arr.join("");
  return parseInt(result, 2);
};

console.log(binaryArrayToNumber([0, 0, 0, 1]));

*/

/*

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  if (array) {
    let inverted = array.map((e) => e * -1);
    return inverted;
  } else {
    return;
  }
}

console.log(invert([-1, 2, -3, 4, -5]));

*/

/*

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let arr = [];

  while (n > 0) {
    if (n != 0) {
      arr.push(n);
    }
    n--;
  }

  return arr;
};

const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};

console.log(reverseSeq(4));

*/

/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

let str = "pear tree";

function vowels(str) {
  let arr = str
    .split("")
    .filter((e) => e == "a" || e == "e" || e == "i" || e == "o" || e == "u");

  return arr;
}

console.log(vowels(str));

*/

/*

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

//Solution
let str = "1 2 3 4 5";

function highAndLow(numbers) {
  let arr = numbers.split(" ").sort((a, b) => a - b);

  return arr[arr.length - 1] + " " + arr[0];
}

console.log(highAndLow(str));

*/

/*

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

// Solution
function XO(str) {
  let arr = str.toLowerCase().split("");

  let countX = arr.filter((e) => e == "x");
  let countO = arr.filter((e) => e == "o");
  const lenghtX = countX.length;
  const lengthO = countO.length;

  if (lenghtX === lengthO) {
    return true;
  } else {
    return false;
  }
}

const str = "zzoo";

console.log(XO(str));


*/

/* 
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Solution
function boolToWord(bool) {
  return bool === true ? "Yes" : "No";
}

console.log(boolToWord(false));

*/

/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

My solution:

function lovefunc(flower1, flower2) {
  const result = flower1 % 2 == 0 ? true : false;
  const result2 = flower2 % 2 == 0 ? true : false;

  return (result && result2) || (!result && !result2) ? false : true;
}

Clever solution:
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
*/

/*

There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop

var number = function (busStops) {
  return busStops.map((f) => f[0] - f[1]).reduce((acc, sum) => acc + sum, 0);
};

console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

*/

/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

My solution: Proud of myself :D

function positiveSum(arr) {
  return arr.filter((e) => e > 0).reduce((acc, sum) => acc + sum, 0);
}

console.log(positiveSum([-1, -5, 0]));

*/

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

My solution
function makeNegative(num) {
  return num <= 0 ? num : -num;
}

console.log(makeNegative(2));

*/

/*

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// my answer

function nbYear(p0, percent, aug, p) {
  let pf = 0;
  let pinit = p0;
  let i = 0;

  if (pf > p) {
    return i;
  } else {
    do {
      pf = pinit + pinit * (percent / 100) + aug;
      pinit = Math.floor(pf);
      console.log(pf);

      i++;
    } while (pf < p);
  }

  console.log(p0, percent, aug, p);
  return i;
}

console.log(nbYear(1500000, 0, 10000, 2000000));
//1500000 0 10000 2000000 result 50 - ok
//1000 1070 2 50 1214 result 4 - ok

// Answer in the forum

function nbYear(p0, percent, aug, p) {
    
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}
*/

/*

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum (s) {
  return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
}

function accum(s) {
  let str1 = s.split("");
  let arr = [];

  for (let i = 0; i < str1.length; i++) {
    let upper = str1[i].toUpperCase();
    let newStr = "";
    for (let j = 0; j < i; j++) {
      newStr = newStr + str1[i].toLowerCase();
    }

    let concatenation = upper + newStr;

    arr.push(concatenation);
  }

  arr = arr.join("-");

  return arr;
}

console.log(accum("RqaEzty"));


//forum answer
let str = "RqaEzty";

let arr = str
  .split("")
  .map((e, index) => e.toUpperCase() + e.toLowerCase().repeat(index));

console.log(arr);
*/

/*
Write a function which converts the input string to uppercase.

My answer:
function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(makeUpperCase("hello, hello"));

/*
Checking the test:
describe("Basic Tests", function(){
  it("should pass the basic tests", function(){
    Test.assertEquals(makeUpperCase("hello"), "HELLO");
  });
});

*/

/*

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

My answer:
function check(a, x) {
  return a.includes(x);
}

let arr = [101, 45, 75, 105, 99, 107];
const x = 107;

console.log(check(arr, x));

// Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
  })
})

*/

/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// my solution:

const squareSum = (numbers)=>numbers.map((e) => e ** 2).reduce((acc, sum) => acc + sum, 0);

//test:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(squareSum([1,2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});

*/

/*
function comp(a, b) {
  const arrToCompare = a.map((e) => e ** 2);
  console.log(b);
  console.log(arrToCompare);
  for (let i = 0; i < arrToCompare.length; i++) {
    console.log(b.includes(arrToCompare[i]));
  }
}

console.log(comp(a, b));

*/

/*

Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.


// Solution from forum
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}


// My solution with google help :(

function comp(array1, array2) {
  if (array1 && array2) {
    const squareArr = array1.map((e) => e ** 2);
    const uniqueValues = new Set([...squareArr, ...array2]);

    // Now using a for loop to iterate inside uniqueValues which contain unique values

    for (const i of uniqueValues) {
      const compareSquareArr = squareArr.filter((e) => e === i).length;
      const compareB = array2.filter((e) => e === i).length;

      if (compareSquareArr != compareB) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
const a = [1, 2, 3];
const b = [1, 4, 9];

console.log(comp(a, b));

//Note

The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array

*/

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

My solution:

const str = "country";
const  removeChar = str => str.substring(1,str.length-1)

function removeChar(str) {
  return str.substring(1, str.length - 1);
}

console.log(removeChar(str));

//test:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});

*/

/*

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

My solution:

const abbrevName = name => name.split(" ").map(e => e[0]).join(".").toUpperCase();

test:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});

*/

/**
 * Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

// My solution:
function vowels(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  let arr = str.split("");

  vowels.forEach((v) => {
    if (arr.includes(v)) {
      arr = arr.filter((e) => e !== v);
    }
  });

  return arr.join("");
}

const str = "This website is for losers LOL!";
console.log(vowels(str));

// other users:

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
 * 
 */

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


function isValidWalk(walk) {
  let steps = walk.length;

  let check = [];
  let directions = ["n", "e", "w", "s"];
  let checkDirections = [];
  if (steps == 10) {
    directions.forEach((e) => {
      let letters = walk.filter((gps) => gps == e);
      if (letters.length > 0) {
        checkDirections.push(e);
        if (e == "w" || e == "s") {
          check.push(-letters.length);
        } else {
          check.push(letters.length);
        }
      }
    });
  } else {
    return false;
  }

  console.log("checkDirections: " + checkDirections);

  if (checkDirections.length === 2) {
    if (checkDirections.includes("w") && checkDirections.includes("s")) {
      console.log(checkDirections);
      return false;
    } else if (checkDirections.includes("n") && checkDirections.includes("e")) {
      console.log(checkDirections);
      return false;
    } else if (checkDirections.includes("n") && checkDirections.includes("w")) {
      console.log(checkDirections);
      return false;
    } else if (checkDirections.includes("s") && checkDirections.includes("e")) {
      console.log(checkDirections);
      return false;
    }
  }

  console.log(walk);
  console.log(check);
  let result = check.reduce((acc, sum) => acc + sum, 0);
  console.log("result: " + result);

  if (result === 0) {
    return true;
  } else {
    return false;
  }
}

let arr = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];

console.log(isValidWalk(arr));


*/

/*

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

My solution:

const phrase = "is2 Thi1s T4est 3a";

function yourOrder(str) {
  let position = 0;
  let arrLength = str.split(" ").length;

  // Creating an empty array with size "length" and filling it with 0
  let arrSorted = Array(arrLength).fill(0);

  
  let tempArr = [];

  // Separating each word with blank space and sending them to arr 
  let arr = str.split(" ");

  // looping through arr
  arr.forEach((index) => {

    // Separating each letter and sending each char to tempArr
    tempArr = index.split("");
    console.log(tempArr);

    // Looping through tempArr which stored individual chars
    tempArr.forEach((n) => {

      // Checking if each char (n) is number
      if (!isNaN(n)) {

        //if n is a number then converte it from string to a number and substract 1, sending the final result to position.
        position = +n - 1;
        console.log("position is " + position);

        // arrSorted will receive position and will assign its respective value.
        arrSorted[position] = index;
        console.log("arrSorted is: " + arrSorted);
      }
    });
  });

  return arrSorted.join(" ");
}

console.log(yourOrder(phrase));

// My final answer but refactorized
function yourOrder2(words) {
  if (words.length > 0) {
    let position = 0;
    let arrSorted = Array(words.split(" ").length).fill(0);
    let tempArr = words.split(" ").map((index) => {
      index.split("").forEach((n) => {
        if (!isNaN(n)) {
          position = +n - 1;
          arrSorted[position] = index;
          console.log("arrSorteded is :" + arrSorted);
        }
      });
    });

    return arrSorted.join(" ");
  } else {
    return "";
  }
}

console.log("Thi1s is2 3a T4est");
const phrase2 = "is2 Thi1s T4est 3a";
console.log(yourOrder2(phrase2));

// testing:
const {assert} = require('chai');

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
    assert.strictEqual(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
    assert.strictEqual(order(""), "", "empty input should return empty string" )
  });
});


*/

/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

const booleanToString = (b) => (b ? "true" : "false");

console.log(booleanToString(true));

//test:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
Test.assertEquals(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
  });
});

function SeriesSum(n) {
  let serie = [];
  //console.log("n :" + n);
  if (n > 1) {
    for (let i = 0; i < n - 1; i++) {
      serie.push(1 / (4 + 3 * i));
      //console.log(serie);
    }

    let result = (
      serie.map((e) => +e).reduce((acc, sum) => acc + sum) + 1
    ).toFixed(2);
    return result;
  } else if (n == 1) {
    return "1.00";
  } else {
    return "0.00";
  }
}

console.log(SeriesSum(15));

*/

/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1 

// My solution:
function findNb(m) {
  let blocks = 0;
  let thereIsBlocks = true;

  increseNumber(m);

  function increseNumber(newM) {
    if (newM < 0) {
      console.log("m is less than zero, the value of m is: " + newM);
      thereIsBlocks = false;
    } else {
      let nextNumber = newM - (blocks + 1) ** 3;
      blocks++;
      console.log("next number is: " + nextNumber);
      console.log("blocks is: " + blocks);

      if (nextNumber === 0) {
        return thereIsBlocks;
      } else {
        return increseNumber(nextNumber);
      }
    }
  }

  return thereIsBlocks ? blocks : -1;
}

console.log(findNb(1071225));

/*

refactorized

   let blocks = 0;
  let thereIsBlocks = true;

  increseNumber(m);

  function increseNumber(newM) {
    if (newM < 0) {
      console.log("m is less than zero, the value of m is: " + newM);
      thereIsBlocks = false;
    } else {
      let nextNumber = newM - (blocks + 1) ** 3;
      blocks++;
     // console.log("next number is: " + nextNumber);
     // console.log("blocks is: " + blocks);
  
      return nextNumber === 0 ? thereIsBlocks : increseNumber(nextNumber);
      
    }
  }

  return thereIsBlocks ? blocks : -1;

  // testing:
  describe("Basic tests",function() {

Test.assertEquals(findNb(4183059834009), 2022)
Test.assertEquals(findNb(24723578342962), -1)
Test.assertEquals(findNb(135440716410000), 4824)
Test.assertEquals(findNb(40539911473216), 3568)
})

// This was the solution of rickansen #devs

function findNb(m) {

  let counter = 0
  let arr = []
  let sum = arr.reduce((a,b) => a + b**3, 0)

    for (let i = 1; sum < m; i++){
      if (sum < m){
        arr.push(i)
        sum = arr.reduce((a,b) => a + b**3, 0)
        counter++
      }
    }

  return sum === m ? counter : -1
}

*/

/*
Simple, remove the spaces from the string, then return the resultant string.

My solution:
function noSpace(x) {
  return x
    .split("")
    .filter((e) => e != " ")
    .join("");
}

let remSpace = "8 j 8   mBliB8g  imjB8B8  jl  B";

console.log(noSpace(remSpace));

// testing:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Fixed Tests", () => {
    assert.strictEqual(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
    assert.strictEqual(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
    assert.strictEqual(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
  });
});
*/

/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

my solution:

function alphabetPosition(text) {
  let position = text
    .toLowerCase()
    .split("")
    .map((e) => {
      if (e.charCodeAt(e) > 96 && e.charCodeAt(e) < 123) {
        //numbers.push(e.charCodeAt(e) - 96);
        return e.charCodeAt(e) - 96;
      }
    })
    .filter((e) => e != undefined);

  //return position;
  return position.join(" ").toString();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
*/

/*

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59 

my solution:

function past(h, m, s) {
  s = s * 1000;
  m = m * 60000;
  h = h * 3600000;

  return s + m + h;
}

console.log(past(0, 0, 0));

//testing:

describe("Fixed Tests", () => {
  it("Tests", () => {
    Test.assertEquals(past(0,1,1),61000)
    Test.assertEquals(past(1,1,1),3661000)
    Test.assertEquals(past(0,0,0),0)
    Test.assertEquals(past(1,0,1),3601000)
    Test.assertEquals(past(1,0,0),3600000)
  });
});
*/

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

my solution:
const findShort = (s) => {
  let str = s.split(" ");
  let temp = str[0].length;

  str.forEach((e) => {
    e.length < temp ? (temp = e.length) : temp;
  });

  return temp;
};

let s = "bitcoin take over the world maybe who knows perhaps";

console.log(findShort(s));

*/

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

My solution
function duplicateEncode(word) {
  let str = word.toLowerCase().split("");
  let filterChars = [];
  let charsDuplicates = [];
  let charsNoDuplicates = [];

  str.forEach((charDuplicated, index) => {
    filterChars = str.filter((e) => e == charDuplicated);

    return filterChars.length > 1
      ? charsDuplicates.push(index)
      : charsNoDuplicates.push(index);
  });

  charsNoDuplicates.forEach((noDplicated) => {
    str[noDplicated] = "(";
  });

  charsDuplicates.forEach((Dplicated) => {
    str[Dplicated] = ")";
  });

  return str.join("");
}

let s = "recede";
console.log(duplicateEncode(s));

*/
/*
 A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages

My solution:

var isSquare = function (n) {
  return n >= 0 && Math.sqrt(n) % 1 === 0 ? true : false;
};

console.log(isSquare(4));


 */

/*

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

My solution:

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp("/", 9, 3));

*/

/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

My solution:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  console.log(input);

  // Checking if is an array exist and isnt empty
  if (Array.isArray(input) && input.length > 0) {
    let arr = [];

    const positive = input.filter((e) => e > 0).length;
    arr.push(positive);
    const neg = input.filter((e) => e < 0).reduce((acc, sum) => acc + sum, 0);
    arr.push(neg);

    return arr;
  } else {
    return [];
  }
}

console.log(countPositivesSumNegatives(arr));

//test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Testing for fixed test 1", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  })
    
  it("Testing for fixed test 2", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPositivesSumNegatives(testData);
    let expected = [8, -50];    
    assert.deepEqual(actual, expected);
  });
});

*/

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// testing:

function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
describe('Example tests', function() {
  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
  doTest([10], 10);
  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
});

// My solution

function findOdd(A) {
  let odd = A;
  let arrTimes = [];
  let arrNumbers = [];
  let times = 0;
  let min = 0;

  // Looping through odd
  odd.forEach((n) => {
    // Checking if n (iterator) doesnt exist into arrNumbers ( where we will send the duplicated numbers)
    if (!arrNumbers.includes(n)) {
      // filtering with the value of n
      times = odd.filter((e) => e == n).length;
      // checking the length of each number and if the length is odd then do this:
      if (times % 2 === 1) {
        // Sending the value of times ( length ) to arrTimes (store the number of times a # is duplicated)
        // arrNumbers, stor which number corresponds to the list of duplicates
        arrTimes.push(times);
        arrNumbers.push(n);
      }
    }
  });

  // Finding the min number into arrTimes ( times that a number is duplicated)
  min = Math.min(...arrTimes);

  // Finding the min and looking for its index position inside arrTimes that will be used also as position
  // in arrNumbers (which number belongs it)
  return arrNumbers[arrTimes.indexOf(min)];
}

const arr = [0, 1, 0, 1, 0];
//const arr = [1, 1, 1, 3, 3, 5];

console.log(findOdd(arr));

// other solution :

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

The solution takes advantage of the condition that there will always be one odd number in the array.

First the find method is called on the array. What is the find method? The find method returns the first element which meets the condition set in the function.

The condition for the find method in this solution is set as the filter method. What is the filter method? The filter method creates an array of ALL elements that meet the condition set in the function.

For each element in the array, the find method will take that element as ITEM and then the filter will return an array of all elements in the array that are equal to ITEM.

Then the length of the returned filtered array is found. The length refers to the number of times the ITEM is in the array. If the length is odd, length % 2 will return 1 which is a truthy value.

The first ITEM that gets this truthy value will be returned by the find method.

That's it. Hope that helps.


*/
/* Sum of odd numbers row

function rowSumOddNumbers(n) {
  return n ** 3;
}

console.log(rowSumOddNumbers(42));
*/

/*

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

My solution:

function getMiddle(s) {
  const str = s.split("");
  const length = str.length / 2;

  return str.length % 2 === 0
    ? str[length - 1] + str[length]
    : str[Math.floor(length)];
    
}

const str1 = "test";
const str2 = "middle";

console.log(getMiddle(str2));

*/

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

// My solution:

function fakeBin(x) {
  const number = x.split("");
  let arr = number.map((e) => {
    return Number(e) <= 4 ? 0 : 1;

    
   // if (Number(e) <= 4) {
    //  return 0;
    //} else {
    //  return 1;
    //}
    
  });

  return arr.join("").toString();
}

const n = "45385593107843568";
console.log(fakeBin(n));

*/

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

//testing:
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)
});
});

// My solution:

function solution(str, ending) {
  const result = str.length - ending.length;
  const letters = str.slice(result);

  return letters == ending ? true : false;
}

console.log(solution("abc", "d"));

// forum solution.
function solution(str, ending){
  return str.endsWith(ending);
}

*/

/*

var min = function (list) {
  const numbers = Math.min(...list);
  return numbers;
};

var max = function (list) {
  const numbers = Math.max(...list);
  return numbers;
};

console.log(min([5, 2]));

*/

/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

My solution:

function high(x) {
  let total = 0;
  let tempStr = [];
  let locker = [];

  // Separating each letter by blank space and sending into a new array letters
  let letters = x.split(" ");
  console.log(letters);

  // Looping through arr letters
  letters.forEach((word, index) => {
    // splitting each char into a new array tempStr
    tempStr = letters[index].split("");

    // looping through tempStr and checking each char, we will replace the char by ASCII table - 96 , it will give us the position in the alphabet for each letter
    tempStr.forEach((e, i) => {
      tempStr[i] = tempStr[i].charCodeAt(e) - 96;
    });

    // now that he have replaced each char by its respective position in the alphabet, we will add all the values inside tempStr and will be sent to arr total. Remember that we are getting the total sum for each position in arr Letters and tempStr is being updated each time the loop moves next position in letters.
    total = tempStr.reduce((acc, sum) => acc + sum, 0);
    locker.push(total);
    console.log(tempStr);
  });

  console.log("locker: " + locker);

  // finding the max value with respect the alphabet
  let position = Math.max(...locker);
  let index = locker.indexOf(position);

  return letters[index];
}
//str.charCodeAt;
// div.push(word[index].charCodeAt(n));
console.log(high("what time are we climbing up the volcano"));

/////testing:

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak');   
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});
*/

/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.


// testing:
describe("Basic testing", function() {
  it("", () => {
    Test.assertEquals(countSmileys([]), 0);
    Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
    Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
    Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});

// My solution:

function countSmileys(arr) {
  const validFace = [
    ":D",
    ":)",
    ":-)",
    ":-D",
    ":~)",
    ":~D",
    ";D",
    ";)",
    ";-)",
    ";-D",
    ";~)",
    ";~D",
  ];

  let result = [];

  if (Array.isArray(arr) && arr.length == 0) {
    return 0;
  } else {
    // Filtering using the valid faces as reference: Creating a forEach loop for valid faces and using them as input in the filter

    validFace.forEach((face) => {

      // if exist an e eqaul to face then:
      arr.filter((e) => {
        if (e === face) {
          result.push(e);
        }
      });
    });

    //console.log(result);
    return result.length;
    //
  }
}

console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));

// Nice solution:

const faces = new Set()
for (let eyes of [':',';'])
    for (let nose of ['-','~',''])
        for (let mouth of [')','D'])
            faces.add(eyes+nose+mouth)

countSmileys =(arr)=> arr.filter(x => faces.has(x)).length
*/

/*

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20


My solution:

function century(year) {
  if (year < 100) {
    return 1;
  } else {
    const century = year.toString();
    const length = century.length;
    const n = century.slice(-2);
    const result = century.slice(0, length - 2);

    if (n === "00") {
      return +result;
    } else {
      return +result + 1;
    }
  }
}

console.log(century(200000));

// Forum solution
const century = year => Math.ceil(year/100)

//testing

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(century(1705), 18, 'Testing for year 1705');
Test.assertEquals(century(1900), 19, 'Testing for year 1900');
Test.assertEquals(century(1601), 17, 'Testing for year 1601');
Test.assertEquals(century(2000), 20, 'Testing for year 2000');
Test.assertEquals(century(89), 1, 'Testing for year 89');
  });
});
*/

/* Make a review of this solution:
function deleteNth(arr, x) {
  var obj = {};
  return arr.filter(function (number) {
    obj[number] = obj[number] ? obj[number] + 1 : 1;
    return obj[number] <= x;
  });
}

console.log(deleteNth([1, 1, 6, 2, 7, 4, 9, 7, 7, 3, 6, 5, 1, 7], 3));

function test(arr, x) {
  let obj = {};
  console.log(obj);

  arr.filter((number) => {
    obj[number] = obj[number] ? obj[number] + 1 : 1;
    console.log(obj);
  });
}

console.log(test([1, 1, 6, 2, 7, 4, 9, 7, 7, 3, 6, 5, 1, 7], 3));

const objeto = {
  1: "primero",
  2: "segundo",
};

console.log(objeto[1]);

*/

/*

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]


My solution: Using recursion method

function tribonacci(signature, n, a = 0) {
  if (n === 0) {
    return [];
  } else if (n > 3) {
    console.log(`signature is ${signature}`);
    let sum = signature[a] + signature[a + 1] + signature[a + 2];
    signature.push(sum);
    console.log(a, `count: ${signature.length}`);

    // n will be decreasing -1 and a+1 each time, if n===3 then skips until the last else and returns signature.
    return tribonacci(signature, n - 1, a + 1);
  } else if (n === 2) {
    return [signature[0], signature[1]];
  } else if (n === 1) {
    return [signature[0]];
  } else {
    return signature;
  }
}

let arr = [1, 1, 1];
console.log(tribonacci(arr, 1));

// testing:
describe("Basic tests",function(){
Test.assertSimilar(tribonacci([1,1,1],10),[1,1,1,3,5,9,17,31,57,105])
Test.assertSimilar(tribonacci([0,0,1],10),[0,0,1,1,2,4,7,13,24,44])
Test.assertSimilar(tribonacci([0,1,1],10),[0,1,1,2,4,7,13,24,44,81])
Test.assertSimilar(tribonacci([1,0,0],10),[1,0,0,1,1,2,4,7,13,24])
Test.assertSimilar(tribonacci([0,0,0],10),[0,0,0,0,0,0,0,0,0,0])
Test.assertSimilar(tribonacci([1,2,3],10),[1,2,3,6,11,20,37,68,125,230])
Test.assertSimilar(tribonacci([3,2,1],10),[3,2,1,6,9,16,31,56,103,190])
Test.assertSimilar(tribonacci([1,1,1],1),[1])
Test.assertSimilar(tribonacci([300,200,100],0),[])
Test.assertSimilar(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
})

*/

/*

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// my solution:

function sortArray(array) {
  let indexArr = [];
  let temp = [];
  let eve = array.filter((e, index) => {
    if (Math.abs(e % 2) === 1) {
      indexArr.push(index);
      return e;
    }
  });

  eve = eve.sort((a, b) => a - b);

  console.log(indexArr);
  console.log(eve);
  console.log(array);

  indexArr.forEach((oddIndex) => {
    eve.forEach((oddNumber) => {
      if (!temp.includes(oddIndex)) {
        temp.push(oddIndex);
        //eve.shift();
        array[oddIndex] = oddNumber;
        eve.shift();
        console.log(`numero eliminado de eve ${oddNumber}`);
        console.log(`Temporal oddIndex ${temp}`);
      }
    });
  });

  console.log(indexArr);
  console.log(eve);

  console.log(array);
  //return actual;
}

let arr = [
  -50, 1, -19, 19, -49, 36, 50, 25, 35, 39, 8, -29, 24, -43, 26, 47, -37,
];

console.log(sortArray(arr));


//Forum solution:

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

Explanation:

function sortArray(arr) {
  const odd = arr.filter((x) => x % 2 === 1).sort((a, b) => a - b);
  console.log(odd);

  // Remember that shift() delete the first position in the array and returns it, then this code check if the numer is odd , if it is true then from odd delete the first number and insert it into arr, de lo contrario dejalo como esta.
  
  return arr.map((x) => (x % 2 === 1 ? odd.shift() : x));
  return odd;
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(sortArray(arr));

*/

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

//My solution:

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((e) => e ** 2)
      .join("")
  );
}

const n = 3212;
console.log(squareDigits(n));

*/

/*

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

// my solution:

function friend(friends) {
  let result = [];
  friends.filter((e) => {
    if (e.length === 4) {
      result.push(e);
    }
  });

  return result;
}

const arr = ["Ryan", "Kieran", "Mark"];
console.log(friend(arr));

Short answer:
return friends.filter(n => n.length === 4)

*/

/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

My solution:
function getSum(a, b) {
  let temp = [a, b];
  let arr = [];
  temp.sort((x, y) => x - y);

  for (let i = temp[0]; i <= temp[1]; i++) {
    arr.push(i);
  }

  return arr.reduce((sum, acc) => sum + acc, 0);
}

console.log(getSum(3, 1));

//testing:
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {         
    assert.strictEqual(getSum(0,-1),-1);
    assert.strictEqual(getSum(0,1),1);
  })
});

*/

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

My solution:

function reverseWords(str) {
  let result = str.split(" ").map((e) => {
    return e.split("").reverse().join("");
  });

  return result.join(" ");
}

const str = "This is an example!";
console.log(reverseWords(str));

*/

/*
// looping through tempStr and checking each char, we will replace the char by ASCII table - 96 , it will give us the position in the alphabet for each letter
    tempStr.forEach((e, i) => {
      tempStr[i] = tempStr[i].charCodeAt(e) - 96;
    });
*/

/*

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// my first try:

function rot13(message) {
  console.log(message);
  let result = [];

  for (let i = 0; i < message.length; i++) {
    if (isNaN(message[i])) {
      let char = message.charCodeAt(i) + 13;

      if (char > 122) {
        char = char - 122 + 96;
      }
      let letter = String.fromCharCode(char);
      result.push(letter);
    } else {
      result.push(message[i]);
    }
  }

  return result.join("");
}
*/
/*
// My final solution:

function rot13(message) {
  console.log(`this is the input: ${message}`);
  let result = [];

  for (let i = 0; i < message.length; i++) {
    // i is not a number? do this
    if (isNaN(message[i])) {
      //assing char = convert i in number from ascii table
      let char = message.charCodeAt(i);

      // if char is grater 64 or lower than 91 is UpperCase
      if (char > 64 && char < 91) {
        char = char + 13;

        // if char is greater than 90 we need to substract the result and taking it back to UpperCase ascii table
        char = char > 90 ? char - 90 + 64 : char;
      }
      // if char is greater than 96 or lower than 123 is lower case
      else if (char > 96 && char < 123) {
        char = char + 13;
        char = char > 122 ? char - 122 + 96 : char;
      }

      // after check the value of char, we convert the number in a letter and send it to result arr
      let letter = String.fromCharCode(char);
      result.push(letter);
    }
    // if i is  a number or white space just send it to result
    else {
      char = message[i];
      result.push(char);
    }
  }

  console.log(`this is the output: ${result}`);
  return result.join("");
}
const str = " =qUem+\n(6";
console.log(rot13(str));

// solution from the forum : crazy but I need to practice it
crazy:
function rot13(message) {
  const alphabet = {
    a: 'n',
    b: 'o',
    c: 'p',
    d: 'q',
    e: 'r',
    f: 's',
    g: 't',
    h: 'u',
    i: 'v',
    j: 'w',
    k: 'x',
    l: 'y',
    m: 'z',
    n: 'a',
    o: 'b',
    p: 'c',
    q: 'd',
    r: 'e',
    s: 'f',
    t: 'g',
    u: 'h',
    v: 'i',
    w: 'j',
    x: 'k',
    y: 'l',
    z: 'm',
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M',
  };
 
  let str = '';

  for(let i = 0; i< message.length; i++) {
    alphabet[message[i]]
      ? str += alphabet[message[i]]
      : str += message[i]
  }

  return str;

}
*/

/*

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

// My solution:
function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(6.7));

*/

/*

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//My solution:

function wave(str) {
  console.log(`input: ${str}`);
  if (str.length > 0) {
    let arr = str.split("");
    let result = [];

    let num = 0;
    arr.forEach((e, index) => {
      if (e !== " ") {
        arr[index] = e.toUpperCase();
        result.push(arr.join(""));
        arr[index] = e.toLowerCase();
      }
    });

    return result;
  } else {
    return [];
  }
}

const str1 = "two worlds";
console.log(wave(" gap "));
*/

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// my solution:
function isPangram(string) {
  let result = string.toLowerCase().split("");
  let abc = "abcdefghijklmnopqrstuvwxyz".split("");
  let checker = true;
  abc.forEach((e) => {
    if (checker === true) {
      if (!result.includes(e)) {
        checker = false;
      }
    } else {
      checker = false;
    }
  });

  return checker;
}

const pangram = "the quick brown fox jumps over the lazy dog";
console.log(isPangram(pangram));

// my solution with help of the forum

function isPangram(string) {
  const result = string.toLowerCase().split("");
  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  return abc.every((e) => result.includes(e));
}

const pangram = "Pack my box with ive dozen liquor jugs";
console.log(isPangram(pangram));


*/

/*
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  const result = Math.sqrt(sq);
  return Number.isInteger(result) ? (result + 1) ** 2 : -1;
}

const number = 121;
console.log(findNextSquare(number));
*/

/*

You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption

// My solution:

function longestConsec(strarr, k) {

  let arr = [];
  let finalArr = [];
  let tempLargestIndex = 0;
  let tempLargestStr = 0;

  if ((k > 0 && strarr.length > k) || strarr.length === k) {
    for (let i = 0; i < strarr.length; i++) {
      
      // slicing each part of the array in sub-arrays taking k as reference
      let sliceArr = strarr.slice(i, i + k);
      arr.push(sliceArr);
    }

    // joining each sub-group of arrays in one unique sub-array
    arr.forEach((e) => {
      finalArr.push(e.join(""));
    });

    // Checking the lenght of each sub-arry and storing the index of largest one
    finalArr.forEach((e, index) => {
      if (e.length > tempLargestStr) {
        tempLargestStr = e.length;
        tempLargestIndex = index;
      }
    });

    return finalArr[tempLargestIndex];
  } else {
    return "";
  }
  
}

const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];
const k = 2;

const lar =
  "pbxktcwdtfzba,mkormpxp,xuzcnjtyebvh,shjxwbbxy,zrylaenyy,ruxttvwozxank,akcmwruajl,bvebbh,cuiggidf,foygbff,ucamqhqph,vkszmxxw,hjxkmf,vqiemmobvrro,dtngapeg,wehondgfvbhsoc,rqxrtwquqvrtlgqm,vsxwaat,qdkolymzska,rsguvjcvk,kcrlbfxbsjwojn,bsanaawknz,xxwewzasgtribzue,xceyhywbct,gfolxjdqbeh,fcsaatx,lyhdphdnpoev,nachkin,xklmprlj,tvsuymur,tjrpgiyrmnv,thgbyaakq,wzqzqhtz,goovpnocry,hweuezyso,karsxqdpfuzi,kmbmuojwmkvipq,jdnbmidryhj,jtdhasebmzv,qwjfjulz,mfgzdooxmafdi,bhhssgiqrpyg,jvlkmbfgvcgi,xdfrjrkdu,xtagbk,ggsyipyr,xyyjrmuwknz,ucrirqazx,eoyhvukvuyiy,ezuqphtdz,lpgfuxzhlrg,elyhduochrfr,mlunqxinohbp,djjzcmtjhgcx,cwjzly,ukgpaymhlmmk,tviyrfvptbuh,hcqejyu,kghdfaw,hcqfsnzcid,elnniqujabl,gbggxmgz,gceqbxmus,lutodzjiegcx,mraqjxpvnvsu,auzoimurny,ozbqgp,docyqbovhfi,hlkqjiaxwr,vvwbkmqbq,xhzpgypuf,xfnefmjfkne,uqivzbou,mprsjjzkp,rxdmsfqozyu,vejfnyuwrahp,zfumhkr,rmexjuk,bdxrmgg,pfxmygcil,wmoubonqdcfzvi,dladmod,ngbnbyyehhxtdf,liawvte,ojfqbuteu,jgngcvyhqkxnzigr,syyfds,jydokcisk,biocdvdcv,vbrhpqxtut,hzawflyzpmyvv,mhocegyzvglfn,mrjpckp,eooejoxkoizodp,cypvbcuaunye,ekpqabnsxn,djgfoyyspoo,xtpzckesqw,digcamixk,jadgunvbrd,qlgykbw,ifmaln,ydimbx,powzcvwxhnpqgduhl,xbsghaufkpixmhb,ptabedebop,nkcyfokzxbvj,zzzmlsufcpmb,ugrijrpoqajdvng,shrhukqwn,uppbjmdap,grgcckxwxjvvasl";

const larArr = lar.split(",");
console.log(larArr);
const kk = 112;

console.log(longestConsec(larArr, kk));

*/

/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

// My solution:
function arrayDiff(a, b) {
  
  let result = [];

  a.forEach((e) => {
    if (!b.includes(e)) {
      result.push(e);
    }
  });

  return result;
  
}

// Short solution from forum:
function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}

*/

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

// My solution: Recursive function

function persistence(num, count = 0) {
  
  // Convert num to string and split it
  num = num.toString().split("");

  // Chaging num from toString to Number again and returning as arr
  num = num.map((e) => Number(e));

  // we need to return how many times the recursion was done, until it reaches 1 digit.
  if (num.length > 1) {
    return persistence(
      num.reduce((acc, sum) => acc * sum, 1),
      count + 1
    );
  } else {

    // if length is = 1, it means that we have only 1 digit in num array, so we return total count
    return count;
  }
}

console.log(persistence(39));

*/

/*
Functional programming: 


This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

// Solution from forum, this time I couldnt solve it. I spent 4 hours trying to figure it out

function zero(fn) {
  return !fn ? 0 : fn(0);
}
function one(fn) {
  return !fn ? 1 : fn(1);
}
function two(fn) {
  return !fn ? 2: fn(2);
}
function three(fn) {
  return !fn ? 3: fn(3);
}
function four(fn) {
  return !fn ? 4: fn(4);
}
function five(fn) {
  return !fn ? 5 : fn(5);
}
function six(fn) {
  return !fn ? 6 : fn(6);
}
function seven(fn) {
  return !fn ? 7 : fn(7);
}
function eight(fn) {
  return !fn ? 8 : fn(8);
}
function nine(fn) {
  return !fn ? 9 : fn(9);
}

function plus(x) {
  return function(y){
    return y + x;
  }
}
function minus(x) {
  return function(y){
    return y - x;
  }
}
function times(x) {
  return function(y){
    return y * x;    
  }
}
function dividedBy(x) {
  return function (y){
    return Math.trunc(y / x);
  }
}

*/

/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// my solution:
function firstNonConsecutive(arr) {
  console.log(`arr is: ${arr}`);
  let temp = 0;
  let result = [];
  let nextNumber = 0;

  arr.forEach((e, index) => {
    temp = e + 1;
    nextNumber = arr[index + 1];

    //console.log(`temp ${temp}`);
    //console.log(`next number ${nextNumber}`);

    if (temp !== nextNumber && nextNumber !== undefined) {
      result.push(nextNumber);
    }
  });

  return result.length > 0 ? result[0] : null;
}

let arr = [1, 2, 3];
console.log(firstNonConsecutive(arr));

solution forum:
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}

*/
/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// My solution:
function areaOrPerimeter(l, w) {
  console.log(l, w);
  return l === w ? l * l : 2*l + 2*w;
}
*/

/*

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

// my solution:

function points(games) {
  let result = [];
  let total = 0;
  result = games
    .map((e) => e.split(":"))
    .forEach((e) => {
      if (+e[0] > +e[1]) {
        total += 3;
      } else if (+e[0] < +e[1]) {
        total += 0;
      } else {
        total += 1;
      }
    });

  return total;
}

let arr = [
  "1:0",
  "2:0",
  "3:0",
  "4:0",
  "2:1",
  "3:1",
  "4:1",
  "3:2",
  "4:2",
  "4:3",
];
console.log(points(arr));

// forum solution: chaining ternary operator 

function points(games) {
  return games.reduce((current, element) => {
    let arraySplit = element.split(':');
    return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
  }, 0);
}

*/

/*

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

// my solution:
function correct(string) {
  let str = string.split("");

  str.forEach((e, index) => {
    if (e === "0") {
      str[index] = "O";
    } else if (e === "1") {
      str[index] = "I";
    } else if (e === "5") {
      str[index] = "S";
    }
  });

  return str.join("");
}

const str = "L0ND0N";
console.log(correct(str));

// Solution forum

function correct(string) {
  const map = {
    0: "O",
    1: "I",
    5: "S",
  };

  return string
    .split("")
    .map((c) => (map.hasOwnProperty(c) ? map[c] : c))
    .join("");
}

console.log(correct("L0ND0N"));

*/

/*

Make a function of BMI

function bmi(weight, height) {
  let result = weight / height ** 2;

  if (result <= 18.5) {
    return "Underweight";
  } else if (result > 18.5 && result <= 25) {
    return "Normal";
  } else if (result > 25 && result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));

*/

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3


// My solution:
function stray(numbers) {
  let arrNumbers = new Set(numbers);
  arrNumbers = [...arrNumbers];
  let result = 0;
  let largest = 0;
  let temp = 0;

  arrNumbers.forEach((unique) => {
    result = numbers.filter((e) => e === unique).length;

    if (result > temp) {
      temp = result;
      largest = unique;
    }
    //console.log(`largest is : ${largest}`);
  });

  return Number(numbers.filter((e) => e !== largest).join(""));
  console.log(temp);
}

const arr = [1, 1, 2];
console.log(stray(arr));
*/

/*

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

// My solution:
function countBy(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}

console.log(countBy(2, 5));


*/

/*

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else if (p1 === p2) {
    return "Draw!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("rock", "scissors"));


// Forum solution 

const rps = (p1, p2) => {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };
  
  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};

*/

/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(3));

*/

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  return dragons * 2 <= bullets ? true : false;
}

*/

/*

Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true

// My solution:
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0 ? true : false;
}
console.log(isDivideBy(-12, 2, 4));


*/

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

// My solution:
function descendingOrder(n) {
  let arr = n.toString().split("");

  if (arr.length === 1) {
    return n;
  } else {
    arr = arr.map((e) => Number(e));
    arr = arr.sort((a, b) => b - a);
    return Number(arr.join(""));
  }
}

console.log(descendingOrder(1));

*/

/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// My solution:

function number(array) {
  return array.map((e, index) => `${index + 1}: ${e}`);
}

const arr = ["a", "b", "c"];

console.log(number(arr));
*/

/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

//My solution:
function getDivisorsCnt(n) {
  let counter = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      counter++;
    }
  }
  return counter;
}

console.log(getDivisorsCnt(5));
*/

/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

// My solution:
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    result.push(arr[i]);
  }

  return result;
}

const str = [["Goodbye"], { Great: "Job" }];
console.log(removeEveryOther(str));
*/

/*
Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

Task Overview:
You have to write a function that accepts three parameters:

cap is the amount of people the bus can hold excluding the driver.
on is the number of people on the bus excluding the driver.
wait is the number of people waiting to get on to the bus excluding the driver.
If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

Usage Examples:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

//My solution:
function enough(cap, on, wait) {
  let seats = cap - on;
  let onPassengers = cap - on;

  return seats > wait ? 0 : wait - seats;
}

console.log(enough(20, 5, 5));
*/

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// My solution:
function feast(beast, dish) {
  return beast[0] === dish[0] &&
    beast[beast.length - 1] === dish[dish.length - 1]
    ? true
    : false;
}

console.log(feast("brown bear", "bear claw"));
*/

/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

// My solution:

function count(string) {
  if (string.length > 0) {
    let phrase = string.split("");
    let str = string.split("");
    str = new Set(str);
    str = [...str];

    let obj = {};

    str.forEach((e) => {
      let result = phrase.filter((l) => l == e).length;
      obj[e] = result;
    });

    return obj;
  } else {
    return {};
  }
}

console.log(count(""));
console.log(count("aba"));

// Forum solution:

function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

*/

/*

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

// My solution:

function findEvenIndex(arr, a = [], b = 0, counter = 0) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  let originalArr = 0;
  //console.log(`input was ${arr}`);

  if (arr.length > 1) {
    counter = counter + 1;
    let temp = arr.shift();
    a.push(temp);

    for (let i = 1; i < arr.length; i++) {
      sumArr1 = sumArr1 + arr[i];
    }
    sumArr2 = a.reduce((acc, sum) => acc + sum, 0);
    //console.log(`arr A is: ${a} and its sum is ${sumArr2}`);
    //console.log(`arr is: ${arr} and its sum is ${sumArr1}`);

    if (sumArr1 == sumArr2) {
      //console.log(`sumArr1 is: ${sumArr1}`);
      //console.log(`sumArr2 is: ${sumArr2}`);
      return counter;
    } else {
      return findEvenIndex(arr, a, sumArr2, counter);
    }
  } else {
    //

    temp = arr[0];
    a.push(temp);

    for (let i = 1; i < a.length; i++) {
      originalArr = originalArr + a[i];
    }

    if (originalArr === 0) {
      // console.log(`last one ${a} is 0`);
      return 0;
    } else {
      //
      // console.log(`arr only has 1 number and it is ${arr}`);
      return -1;
    }
  }
}

//const arr = [1, 2, 3, 4, 5, 6];
//const arr = [1, 100, 50, -51, 1, 1];
//const arr = [1, 2, 3, 4, 3, 2, 1]; // resp is 4
//const arr = [20, 10, 30, 10, 10, 15, 35];
const arr = [20, 10, -80, 10, 10, 15, 35];
console.log(findEvenIndex(arr));

// Refactoring my solution: One of the hardest katas that I have done, i had to sleep like 3 times thinking using recursion, but this refactor solution proves you that isnt necessary always use
recurtion

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sumRigth = arr.slice(0, i).reduce((acc, sum) => acc + sum, 0);
    let sumLeft = arr.slice(i + 1).reduce((acc, sum) => acc + sum, 0);

    if (sumLeft === sumRigth) {
      return i;
    }
  }
  return -1;
}

*/

/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.

// My solution:

String.prototype.toAlternatingCase = function () {
  let str = this.split("");
  let result = str.map((e, index) => {
    if (e === e.toLowerCase()) {
      return (e[index] = e.toUpperCase());
    } else {
      return (e[index] = e.toLowerCase());
    }
  });

  return result.join("");
};
console.log("hELLO".toAlternatingCase());
*/

/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

//My solution
function updateLight(current) {
  
 return current === "green"? "yellow": current==="yellow"? "red":"green"

}

// forum solution:
const updateLight = current => ({
  green: 'yellow',
  yellow: 'red',
  red: 'green',
})[current]

*/
/*
function incrementString(strng) {
  console.log(strng);
  let temp = [];
  strng.split("").forEach((e) => {
    if (!isNaN(e)) {
      temp.push(e);
    }
  });

  //temp = temp.join("");
  const lengthTemp = temp.length;

  let tempTotalZeros = temp.filter((e) => e == 0).length;

  if (tempTotalZeros === lengthTemp) {
    if (temp.join("").includes("0")) {
      let tempPreviousValue = temp.join("");
      let newValue = +temp[temp.length - 1] + 1;
      temp[temp.length - 1] = newValue.toString();

      temp = temp.join("");
      console.log(`temp if : ${temp}`);

      return strng.replace(tempPreviousValue, temp);
    } else {
      let newValue = (Number(temp.join("")) + 1).toString();

      return strng + newValue;
    }
  } else {
    let newValue = (Number(temp.join("")) + 1).toString();
    console.log(newValue);
    temp = temp.join("");
    console.log(`total zeros: ${tempTotalZeros}`);
    console.log(`temp else statement: ${temp}`);

    if (+newValue < 100 && +newValue > 10) {
      temp = temp.substring(1, 3);
      console.log(temp);

      //
      return strng.replace(temp, newValue);
      //
    } else if (+newValue < 10 && +newValue > 0) {
      temp = temp.split("");
      let prev = temp.join("");
      temp[temp.length - 1] = newValue;
      newValue = temp.join("");
      //console.log(newValue);
      //console.log(prev);
      return strng.replace(prev, newValue);
    }
  }
}

//
*/

/*

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

// My solution:
function incrementString(strng) {
  console.log(strng);
  let result = strng.split("");
  let temp = [];
  result.forEach((e) => {
    if (!isNaN(e)) {
      temp.push(e);
    }
  });

  # Taking only the letters
  
  let newValue = +temp.join("") + 1;
  let length = newValue.toString().length;
  let str = strng.length - temp.length;
  let newStr = strng.substring(0, str);

  // ahora con los #s

  if (temp.length > newValue.toString().length) {
    console.log("here");
    let position = temp.length - newValue.toString().length;
    temp = temp.join("");
    temp = temp.substring(0, position);
    temp = temp + newValue;
    console.log(`ahora temp es : ${temp}`);
  } else {
    temp = newValue.toString();
    console.log("equal length");
  }

  return newStr + temp;
}

const str = "";

console.log(incrementString(str));


*/

/*

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

//My solution:

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;

    default:
      return "Nine";
      break;
  }
}

*/

/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases

//My solution:

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects > 4) {
    return 90;
  } else if (exam > 50 && projects > 1) {
    return 75;
  } else {
    return 0;
  }
}
console.log(finalGrade(55, 0));

*/

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

//my solution:

function breakerCamelCase(string) {
  let result = string.split("");
  let temp = [];

  result.forEach((e, index) => {
    if (e !== e.toUpperCase()) {
      temp.push(e);
    } else {
      temp.push(" " + e);
      // result.splice(index, 0, " ");
    }
  });

  return temp.join("");
}

const str = "camelCasingTest";
console.log(breakerCamelCase(str));

// forum solution: using map
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

*/

/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My solution:
function longest(s1, s2) {
  let str = s1.concat(s2);
  str = new Set(str);
  str = [...str].sort().join("");
  return str;
}

const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";

console.log(longest(a, b));

*/

/*
 return the number from the string

 // my solution:
 function getAge(inputString) {
  let str = inputString.split("");
  let age = +str[0];
  return age;
}

console.log(getAge("4 years old"));

*/

/*

Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// My solution:
function minMax(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  return max !== min ? [min, max] : [max, max];
}

console.log(minMax([1]));

*/
