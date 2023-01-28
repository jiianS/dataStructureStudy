
import { Stack } from './Stack.mjs';

let stack = new Stack();


console.log("Stack push & pop print===========");
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);


console.log("Stack peek & pop print===========");
// 위에서 stack에 담긴 data를 모두 제거하여 다시 삽입해준다.
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek().data);
stack.pop();
console.log(stack.peek().data);
stack.pop();
console.log(stack.pop().data);

console.log(`stack isEmpty= ${stack.isEmpty()}`);
stack.pop();
stack.pop();
console.log(`stack isEmpty= ${stack.isEmpty()}`);
console.log(stack.pop());
