/*  Given an input string s, reverse the order of the words

input :- "the sky is blue"   -------> output :- "blue is sky the"
input :- "    hello world  " -------> output :- "world hello"
input :- "a good    example" ------> output :- "example good a"
*/

function reverseWords(str) {
  if (isEmpty(str)) {
    return "Error! Empty string";
  }

  const strArray = str.split(" ");

  const stack = [];
  for (let item of strArray) {
    if (item) {
      stack.push(item);
    }
  }
  console.log(stack);
  let string = "";
  while (stack.length) {
    string += " " + stack.pop();
  }
  return string.trim();
}

function isEmpty(str) {
  return str.length === 0;
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("    hello world  "));
