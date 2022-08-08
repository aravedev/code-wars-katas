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
