class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    return this.stack.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty. Can't perform pop!";
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty. Can't perform peek!";
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}

const stack = new Stack();
// console.log(stack);
stack.push(5);
stack.push(125);
stack.push(201);
stack.push(501);
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
