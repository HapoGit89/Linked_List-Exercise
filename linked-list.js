/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val)
    if (this.head == null) {
      this.head = newNode

    }
    if (this.tail != null) {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.length += 1

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
    }
    else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
    let oldTail = this.tail

    if (this.head == null) {
      throw Error("This List is empty")
    }
    else if (this.head == this.tail) {
      this.head = null
      this.tail = null
    }
    else {
      let current = this.head
      while (current != null) {
        if (current.next == this.tail) {
          this.tail = current
          current.next = null
        }
        current = current.next

      }
    }
    this.length -= 1
    return oldTail.val

  }

  /** shift(): return & remove first item. */

  shift() {

    if (this.head == null) {
      throw Error("This List is empty")
    }
    if (this.head == this.tail) {
      this.tail = null
    }
    let oldHead = this.head
    this.head = this.head.next
    oldHead.next = null
    this.length -= 1
    return oldHead.val


  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    let current = this.head
    for (let i = 0; i <= idx; i++) {
      if (current == null) {
        throw Error("idx is invalid")
      }
      if (i == idx) {
        return current.val
      }
      current = current.next
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    let current = this.head
    for (let i = 0; i <= idx; i++) {
      if (current == null) {
        throw Error("idx is invalid")
      }
      if (i == idx) {
        current.val = val
      }
      current = current.next
    }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    let current = this.head
    let newNode = new Node(val)
    if (idx == 0) {
      this.unshift(val)
      return
    }
    for (let i = 0; i < idx; i++) {
      if (current == null) {
        throw Error("idx is invalid")
      }
      if (i == idx - 1) {
        if (current.next == null) {
          this.push(val)
          return
        }

        let loose = current.next
        current.next = newNode
        newNode.next = loose
        if (idx == 0) {
          this.head = newNode
        }


      }
      current = current.next
    }
    this.length += 1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx == 0) {
      const oldHead = this.head
      this.head = this.head.next
      oldHead.next = null
      this.tail = null
    }
    else {
      const remove = this.getAt(idx)
      const before = this.getAt(idx - 1)

      if (remove.next == null) {
        this.tail = before
        this.tail.next = null
      }
      else {
        before.next = remove.next
        remove.next = null
      }
    }
    this.length -= 1

  }







  /** average(): return an average of all values in the list */

  average() {
    if (this.head == null) {
      return 0
    }
    let sum = 0
    let count = 0
    let current = this.head



    while (current != null) {
      sum += current.val
      count += 1
      current = current.next
    }

    return (sum / count)

  }
}


List1 = new LinkedList([1])

List1.removeAt(0)

console.log(List1)






module.exports = LinkedList;
