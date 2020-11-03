// Linked Lists

function createNode(value) {
    return {
      value,
      next: null
    }
  }
  
  function createLinkedList() {
    return {
      head: null,
      tail: null,
      length: 0,
  
      push(value) {
        const node = createNode(value)
  
        if (this.head === null) {
          this.head = node
          this.tail = node
          this.length++
          return node
        }
  
        this.tail.next = node
        this.tail = node
        this.length++
  
        return node
      }, // Push adds a new node to the end of the list. This becomes the new tail and the length is incremented by one. The new node is returned from .push()
  
      pop() {
        if (this.isEmpty()) {
          return null
        }
  
        const node = this.tail
  
        if (this.head === this.tail) {
          this.head = null
          this.tail = null
          this.length--
          return node
        }
  
        let current = this.head
        let penultimate
        while (current) {
          if (current.next === this.tail) {
            penultimate = current
            break
          }
  
          current = current.next
        }
  
        penultimate.next = null
        this.tail = penultimate
        this.length--
  
        return node
      }, // Pop removes the node at the end of the list - tail - and returns it.
  
      get(index) {
        if (index < 0 || index > this.length - 1) {
          return null
        }
  
        if (index === 0) {
          return this.head
        }
  
        let current = this.head
        let i = 0
        while (i < index) {
          i++
          current = current.next
        }
  
        return current
      }, // Get returns a node at a particular index, without removing it from the list.
  
      delete(index) {
        if (index < 0 || index > this.length - 1) {
          return null
        }
  
        if (index === 0) {
          const deleted = this.head
  
          this.head = this.head.next
          this.length--
  
          return deleted
        }
  
        let current = this.head
        let previous
        let i = 0
  
        while (i < index) {
          i++
          previous = current
          current = current.next
        }
  
        const deleted = current
        previous.next = current.next
  
        if (previous.next === null) {
          this.tail = previous
        }
  
        this.length--
  
        return deleted
      }, // Removes the node at the specified index and returns it.
  
      isEmpty() {
        return this.length === 0
      }, // Returns whether the list contains nodes. This can simply return whether the list's .length() is zero.
  
      print() {
        const values = []
        let current = this.head
  
        while (current) {
          values.push(current.value)
          current = current.next
        }
  
        return values.join(' => ')
      }
    }
  }
  
  const list = createLinkedList()
  const values = ['a', 'b', 'c', 'd', 'e']
  const nodes = values.map(val => list.push(val))
  
  list.pop()
  console.log(list.delete(1))
  console.log(list.print())
  
  exports.createNode = createNode
  exports.createLinkedList = createLinkedList