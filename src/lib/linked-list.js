'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  deleteListItem(offset) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }
    let counter = (offset - 1);
    let currentNode = this.head;
    function recursiveDelete() {
      if (!currentNode.next.next) {
        throw new Error('__ERROR__ The list has less items than specified offset');
      }
      if (counter === 0) {
        currentNode.next = currentNode.next.next;
        return currentNode.next;
      }
      counter -= 1;
      currentNode = currentNode.next;
      recursiveDelete();
      return undefined;
    }
    recursiveDelete();
    return undefined;
  }
};
