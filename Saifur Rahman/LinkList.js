// const n1 ={
//     data : 100
// }
// const n2 ={
//     data : 200
// }
// n1.next = n2;
// console.log(n1);

//Link List Class
class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}
// const n1 = new Node(100);
// console.log (n1);
class LinkList{
    constructor(){
        this.head = null;
        this.size = 0;

    }
    // Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
    }
    // Insert Last Node
    insertLast(data){
        // A newNode object is created with property data and next=null
        let newNode = new Node(data);
        let current;
        // When head = null i.e. the list is empty, then head itself will point to the newNode.
        if(!this.head){
            this.head= newNode;
            return this.head;
        }
        else {
            // Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
            current = this.head;
            while(current.next!==null){
                current=current.next;
            }
            current.next = newNode ;
            return this.head;
        }
        this.size++;

    }
    //List size
    size_List(){
        let count = 0;
        let node = this.head;
        while (node){
            count++;
            node = node.next;
        }
        return count;
    }
    // Get at Index
    // A helper function getAt() is defined to get to the desired position. This function can also be later used for performing delete operation from a given position.
    getAt(index){
        let count =0;
        let node = this.head;
        while(node){
            if(count=== index){
                return node;
            }
            count++;
            node = node.next;

        }
        return null;
    }
    // Insert at Index
    // The insertAt() function contains the steps to insert a node at a given index.
    insertAt(data,index){
        if(index>0 && index > this.size){
            return;
        }
        // if new node needs to be inserted at the front of the list i.e. before the head.

        if (index===0){
            this.insertFirst(data);
            return;
        }
        // else, use getAt() to find the previous node.
        const previous = this.getAt(index-1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;
        return this.head;
    }
    // Deleting the first node.
    removeAtFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        return this.head;
    }
    //Deleting the last node in a singly linked list
    removeAtLast(){
        if(!this.head){
            return;
        }
        // if only one node in the list
        if(!this.head.next){
            this.head = null;
            return;
        }
        let previous = this.head;
        let tail = this.head.next;
        
        while(tail.next !== null){
            previous = tail;
            tail = tail.next;
        }
        previous.next = null;
        return this.head;
    }
    
    // Remove at Index Deleting a node from given random position in a singly linked list
    removeAtIndex(index){
        // when list is empty i.e. head = null
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        // node needs to be deleted from the front of the list i.e. before the head.
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        // else, use getAt() to find the previous node.
        const previous = this.getAt(index - 1);
        
        if (!previous || !previous.next) {
            return;
        }
        
        previous.next = previous.next.next;     
        return this.head;
    }

    // Clear List
    clearList() {this.head = null;}
    
    //Print List data
    printListData(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

    const ll = new LinkList();
    console.log(ll);
    ll.insertFirst(100);
    ll.insertFirst(200);
    ll.insertFirst(300);
    ll.insertAt(500,3);
    ll.insertLast(400);
    console.log(ll);
    console.log(ll.size_List());
    ll.insertFirst(1000);
    ll.insertFirst(2000);
    ll.insertFirst(3000);
    ll.insertAt(5000,7);
    ll.insertLast(4000);
    ll.printListData();
    console.log(ll);
    console.log(ll.size_List());
    ll.removeAtFirst();
    ll.removeAtLast();
    ll.removeAtIndex(8);
    ll.printListData();
    console.log(ll);
    console.log(ll.size_List());