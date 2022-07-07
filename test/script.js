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
