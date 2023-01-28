/**
 * 2023.1.28 
 * Stack 테스트 
 * 이전 구현한 LinkedList.mjs 이용해서 테스트 진행
 * 
 */

import {LinkedList} from '../LinkedList/LinkedList.mjs';

class Stack{
    // 생성자 생성
    constructor(){
        this.list = new LinkedList();
    }

    // data 삽입 push
    push(data){
        this.list.insertAt(0, data);
    }

    // data 제거
    pop(){
        try{
            return this.list.deleteAt(0);
        }catch(e){
            return null;
        }
    }

    //data 참조
    peek(){
        return this.list.getNodeAt(0);
    }

    //stack에 data 비었는지 확인
    isEmpty(){
        return (this.list.count == 0);
    }
}

export{ Stack }