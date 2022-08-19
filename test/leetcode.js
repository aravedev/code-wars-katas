/*
function roman(s) {
  const roman = {
    I: 1,
    II: 2,
    III: 3,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let temp = [];

  for (let i = 0; i < s.length; i++) {
    console.log(roman[s[i]]);
    if (roman[s[i]] < roman[s[i + 1]]) {
      let prev = roman[s[i]];
      let actual = roman[s[i + 1]];
      let final = actual - prev;
      temp.push(final);
    } else if (s[i] == s[i + 1] && s[i + 1] == s[i + 2]) {
      let result = s[i] + s[i + 1] + s[i + 2];
      temp.push(roman[result]);
    } else if (s[i] == s[i + 1]) {
      let result = s[i] + s[i + 1];
      temp.push(roman[result]);
    }
  }

  console.log(temp);
}

console.log(roman("III"));
*/

/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


// My solution:


// leetcode solution:
var twoSum = function (nums, target) {
  let result = {};

  for (let i = 0; i < nums.length; i++) {
    console.log(result);
    let dif = target - nums[i];

    if (dif in result) {
      return [result[dif], i];
    }

    result[nums[i]] = i;
  }
};

*/

/*
  in this solution we are using objects.
  we need to understand what is the result that we want to get.
  Firstly: we need to return the index of 2 numbers when you add them it returns the result
  of target.

  ex: [3,2,3] , target 6 , as you can see, 3 + 2 = 5 ,doesnt match, but 3+3 = 6, it the target result

  here is the proble,. how can I identify 2 similar numbers but with different index ? I need to return indexes [0,2].

  that would be my first problem.

    well, with object we can solve this problem:

    var twoSum = function (nums, target) {

      Creating an empty object and array
      let result = {};
      let arr = [];

    nums.forEach((e, index) => {
    
      finding the difference between 2 numbers : target - e
      let dif = target - e;

      // if dif is in result object, push result[dif] ( this retrives the index ) and index ( from forEach)
    if (dif in result) {
      arr.push(result[dif]);
      arr.push(index);
    }else{
    
      Then we create a new entry with : key as e (current number in the loop) with value : index
      result[e] = index;
    
    }
    
  });

  when we ended up with our loop , retunr arr that contains the indexes that we were needing before.
  return arr;
};

const nums = [2, 7, 11, 15];
const target = 18;

console.log(twoSum(nums, target));



    

// My solution:

var twoSum = function (nums, target) {
  let result = {};
  let arr = [];

  nums.forEach((e, index) => {
    let dif = target - e;

    if (dif in result) {
      arr.push(result[dif]);
      arr.push(index);
    }

    result[e] = index;
  });

  return arr;
};

const nums = [2, 7, 11, 15];
const target = 18;

console.log(twoSum(nums, target));

*/
/*
var twoSum = function (nums, target) {
 
};

*/
/*
const nums = [2, 7, 11, 15];
const target = 20;

//console.log(twoSum(nums, target));

const ob = {
  3: "yes",
  2: "no",
};

console.log(ob[3]);
*/

/*

rank: easy

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

// My solution:
var containsDuplicate = function (nums) {
  let obj = {};

  nums.forEach((e) => {
    if (e in obj) {
      obj[e] = true;
    } else {
      obj[e] = false;
    }
  });

  let result = Object.keys(obj).some((e) => obj[e] === true);
  return result;
};

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));


Note:
Runtime: 231 ms, faster than 22.68% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 54.3 MB, less than 6.02% of JavaScript online submissions for Contains Duplicate.
*/

/*
Rank: easy
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

// My solution:

var isAnagram = function (s, t) {
  objS = {};
  objT = {};
  let str = s.split("");
  let check = t.split("");

  if (str.length === check.length) {
    str.forEach((e) => {
      if (!objS.hasOwnProperty(e)) {
        objS[e] = 1;
      } else {
        objS[e] = objS[e] + 1;
      }
    });

    check.forEach((char) => {
      if (!objT.hasOwnProperty(char)) {
        objT[char] = 1;
      } else {
        objT[char] = objT[char] + 1;
      }
    });

    let obj2 = Object.keys(objT)
      .sort()
      .reduce((acc, key) => {
        acc[key] = objT[key];
        return acc;
      }, {});

    let obj1 = Object.keys(objS)
      .sort()
      .reduce((acc, key) => {
        acc[key] = objS[key];
        return acc;
      }, {});

    return Object.entries(obj2).toString() === Object.entries(obj1).toString();
  } else {
    return false;
  }
};

const st = "a";
const t = "ab";
console.log(isAnagram(st, t));

// Details:
Runtime: 114 ms, faster than 64.17% of JavaScript online submissions for Valid Anagram.
Memory Usage: 44.8 MB, less than 41.26% of JavaScript online submissions for Valid Anagram.
*/
