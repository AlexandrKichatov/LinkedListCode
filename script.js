

//creating nodes
class myLinkedListNode{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}
//linked list
class LinkedList{
    constructor(head, tail){
        this.head = head;
        this.tail = tail;
    }
    //methot to push value in the begin of list
    prepend (value){
        const newNode = new myLinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail){
            this.tail = newNode;        
        }
        return this;
    }
    //deleting element of list
    deleteAllElements(value){
        if (!this.head){
            return null;
        }

        let deleteNode = null;
        while (this.head && this.head.value === value){
            deleteNode = this.head;
            this.head = this.head.next;
        }

        let realNode = this.head;

        if (realNode !== null){
            while (realNode.next){
                if (realNode.next.value == value){
                    deleteNode = realNode.next;
                    realNode.next = realNode.next.next;
                }else{
                    realNode = realNode.next
                }
            }
        }
        if (this.tail && this.tail.value === value){
            this.tail = realNode;
        }
        return deleteNode;
    }
    //method of searching element same the value
    search(value){
        if (!this.head){
            return null;
        }
        let realNode = this.head;

        while (realNode){
            if (value !== undefined && realNode.value === value){
                return realNode;
            }
            realNode = realNode.next;
        }
        return null;
    }
    //Method to check the lenth of list
    lenght(){
        if (!this.head){
            return null;
        }
        let realNode = this.head;
        let counter = 0;

        while (realNode){
            if (realNode !== undefined){
                counter++
            }
            realNode = realNode.next;
        }
        return counter;  
    }
    //method changes the element searchValue to newValue
    change(searchValue, newValue){
        if (!this.head){
            return null;
        }
        let realNode = this.head;

        while (realNode){
            if (searchValue !== undefined && realNode.value === searchValue){
                realNode.value = newValue;
            }
            realNode = realNode.next;
        }
    }

}

let list = new LinkedList();
list.prepend(12);
list.prepend("skafpl");
list.prepend(12);
list.prepend(true);
list.prepend(false);
list.deleteAllElements(12);
list.change(true, "1234");
console.log(list);
console.log(`The lenth of list ${list.lenght()}`);