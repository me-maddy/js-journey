/* Given an string s containing just the characters '(', ')', '[', ']', '{', and '}',
    determine the given string is valid.
     input :- "()"  -----> output :- true
     input :- "({}[])"  -----> output :- true
     input :- "(]"  -------> output :- false * */

function isValid(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
      continue;
    }

    if (char === "}" || char === "]" || char === ")") {
      if (isEmpty(stack)) return false;
      let current = stack.pop();
      if (
        (char === "}" && current !== "{") ||
        (char === "]" && current !== "[") ||
        (char === ")" && current !== "(")
      )
        return false;
    }
  }

  return isEmpty(stack);
}

function isEmpty(stack) {
  return stack.length === 0;
}

// const string1 = "({}[]])";
const string1 = "({}])";
console.log(isValid(string1));
