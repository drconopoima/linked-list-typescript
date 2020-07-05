import LinkedListNode from './LinkedListNode';

export default class LinkedList {
    head: any;
    tail: any;
    constructor() {
        /** @var LinkedListNode **/
        this.head=null;
        /** @var LinkedListNode **/
        this.tail=null;
    }
    prepend(value: any) {
        const newNode = new LinkedListNode(value, this.head)
        if (!this.head){
            // If there is no head yet, the prepended node is the head and tail
            this.head = newNode;
            this.tail = newNode;
            return this
        }
        this.head = newNode;
        // If there is no tail, the new node is the tail
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    append(value: any) {
        const newNode = new LinkedListNode(value);
        if (!this.head) {
            // If there is no head yet, the appended node is the head and tail
            this.head=newNode;
            this.tail=newNode;
            return this;
        }
        const currentTail = this.tail;
        currentTail.next = newNode;
        this.tail = newNode; // Attach new node to the end
        return this;
    }
    delete(value: any) {
        if (!this.head) {
            return null;
        }
        let deletedNode=null;
        // If the head must be deleted then make next node that is different
        // from the head to be a new head.
        if (this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    // If next node must be deleted then update next to be
                    // the node that the came afterwards
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                    break;
                }
                currentNode = currentNode.next;
            }
        }
        // Check if tail must be deleted.
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
        return deletedNode;
    }
}
