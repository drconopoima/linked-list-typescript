export default class LinkedListNode {
    value: any;
    next: any;
    constructor(value: any, next=null) {
        this.value = value;
        this.next = next
    }
    toString(callback: any) {
        return callback ? callback(this.value) : `${this.value}`
    }
}
