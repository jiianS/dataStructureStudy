// LinkedList.mjs 테스트

// ./LinkedList.mjs 내의 Node class 사용하기 위해 import
import {LinkedList, Node} from './LinkedList.mjs'

// Node data 입력
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

// node Next 정의
node1.next = node2;
node2.next = node3;

console.log("node data/next 확인=========");
console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

// insertAt()
let list = new LinkedList();
console.log("insetAt() 5번 호출=========");
list.insertAt(0,0);
list.insertAt(1,1);
list.insertAt(2,2);
list.insertAt(3,3);
list.insertAt(4,4);
list.printAll();

//clear()
console.log("clear() 호출=========");
list.clear();
list.printAll();

console.log("insertLast() 5번 호출=========");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
//list.insertLast(3);
list.printAll();

console.log("deleteAt() 호출=========");
list.deleteAt(0);
list.printAll();
list.deleteAt(1);
list.printAll();

console.log("deleteLast() 호출=========");
list.insertLast(5);
list.deleteLast();
list.deleteLast();
//list.deleteLast();
list.printAll();

console.log("getNodeAt() 호출=========");
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

let secondNode = list.getNodeAt(2);
console.log(secondNode);







