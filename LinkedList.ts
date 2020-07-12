import LinkedListNode from './LinkedListNode';

/**
 * A linked list implementation in TypeScript.
 * @class LinkedList
 */
class LinkedList {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    /**
     * Creates a new instance of LinkedList
     */
    constructor() {
        /**
         * Pointer to first node in the list.
         * @property {LinkedListNode} head
         * @private
         */
        this.head = null;
        /**
         * Pointer to last node in the list.
         * @property {LinkedListNode} tail
         * @private
         */
        this.tail = null;
    }
    /**
     * Inserts some value at the start of the list.
     * @param {any} value The data to add to the list.
     * @returns {LinkedList}
     */
    prepend(value: any) {
        // Make new node the new head, make former head its next node
        const newNode = new LinkedListNode(value, this.head)
        this.head = newNode;
        // special case: Empty list. If there is no tail, make newNode the tail
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    /**
     * Inserts some value at the end of the list.
     * @param {any} value The data to add to the list.
     * @returns {LinkedList}
     */
    append(value: any) {
        /* Create a new list node object and store the data in it. */
        const newNode = new LinkedListNode(value);
        // special case: Empty list. New node becomes head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        const currentTail = this.tail as LinkedListNode;
        currentTail.next = newNode;
        this.tail = newNode; // Attach new node to the end of list
        return this;
    }
    /**
     * Removes from the list the node containing target value.
     * @param {any} value The data contained in the node to remove.
     * @returns {LinkedListNode} The node that was deleted from the list.
     */
    delete(value: any) {
        // special case: Empty list. No nodes to delete.
        if (!this.head) {
            return null;
        }
        // placeholder node to remove and return
        let deletedNode = null;
        // special case: Removing the first node
        if (this.head && this.head.value === value) {
            deletedNode = this.head;
            // replace head with the next node in the list
            this.head = this.head.next;
        }
        /*
         * `currentNode` keeps track of the node we currently are in
         * while iterating over the linked list.
         * Set initially to be the head to ensure starting from
         * the beginning of the list.
         */
        let currentNode = this.head as LinkedListNode;
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
        // Check if tail must be deleted.
        if ((this.tail as LinkedListNode).value === value) {
            this.tail = currentNode;
        }
        // return the node that was just removed from the list
        return deletedNode;
    }
}

export default LinkedList
