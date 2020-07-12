/**
 * Represents a single node in a LinkedList.
 * @class LinkedListNode
 */
class LinkedListNode {
    value: any;
    next: LinkedListNode | null;
    /**
     * Creates a new instance of LinkedListNode.
     * @param {any} value: The data to store in the node. 
     * @param {LinkedListNode} next: The following item in the LinkedList
     */
    constructor(value: any, next: LinkedListNode | null = null) {
        /**
         * The data that this node stores.
         * @property {any} value
         */
        this.value = value;
        /**
         * A pointer to the next node in the LinkedList.
         * @property {LinkedListNode | null} next
         */
        this.next = next
    }
    /**
     * Converts the node into a string representation.
     * @returns {string} A string representation of the value for this node.
     * @param {function{LinkedListNode}: string} callback: A callback function
     */
    toString(callback? : (node: LinkedListNode) => string) {
        return callback ? callback(this) : `${this.value}`;
    }
}

export default LinkedListNode
