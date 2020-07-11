/**
 * Represents a single node in a LinkedList.
 * @class LinkedListNode
 */
class LinkedListNode {
    value: any;
    next: any;
    /**
     * Creates a new instance of LinkedListNode.
     * @param {any} value: The data to store in the node. 
     */
    constructor(value: any, next = null) {
        /**
         * The data that this node stores.
         * @property value
         * @type any
         */
        this.value = value;
        /**
         * A pointer to the next node in the LinkedList.
         * @property next
         * @type ?LinkedListNode
         */
        this.next = next
    }
    /**
     * Converts the node into a string representation.
     * @returns {String} A string representation of the value for this node.
     * @param {function} callback: A callback function to apply the value
     */
    toString(callback: any) {
        return callback ? callback(this.value) : `${this.value}`
    }
}

export default LinkedListNode
