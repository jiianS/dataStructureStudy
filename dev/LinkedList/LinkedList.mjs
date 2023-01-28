/**
 * 2023.01.25
 * linked_list 추상자료형 구현 
 * 6강 구현 테스트
 * 
 * 연결리스트 : 데이터를 담은 노드를 서로 연결하는 구조
 */

class Node{
    // 생성자 생성
    constructor(data, next = null){
        // 초기화
        this.data = data;
        this.next = next; // 다음 노드 위치 가리킴
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.count= 0; // 총 노드 갯수
    }

    printAll(){
        let currentNode = this.head;
        let text = "[";
        while(currentNode != null){
            //console.log("data = " + currentNode.data);
            text += currentNode.data;
            currentNode = currentNode.next;

            if(currentNode != null){
                text += ", ";
            }        
        }
        text +="]"
        console.log(text);
    }

    // 모든 원소 제거
    clear(){
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data){  // 삽입위치, 데이터
        if(index > this.count || index < 0 ){
            throw new Error("범위 넘어갔습니다.");
        }

        let newNode = new Node(data);

        if(index == 0){
            newNode.next = this.next;
            this.head = newNode;
        }else{
            let currentNode = this.head;

            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }
            newNode.next =  currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    //insertLast - 맨 뒤에 data 삽입
    insertLast(data){
        this.insertAt(this.count, data);
    }

    deleteAt(index){

        if(index < 0 || index >= this.count){
            return console.error("제거불가");
            //throw new Error("제거불가"); 
        }

        let currentNode = this.head;

        //1. head 노드 제거
        if(index == 0){
            let deleteNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deleteNode;

        }else{
            //2. head 노드 제외 말고 제거하는 경우
            for(let i=0; i < index-1; i++){
                currentNode = currentNode.next;
            }
            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;    
        }
    
    }

    deleteLast(){
        return this.deleteAt(this.count-1);
    }

    getNodeAt(index){
        if(index >= this.count || index < 0){
            throw new Error("범위 오류")
        }

        let currentNode = this.head;
        for(let i =0; i<index-1; i++){
            currentNode = currentNode.next;
        }
        
        return currentNode;
    }
}

export { Node, LinkedList };
