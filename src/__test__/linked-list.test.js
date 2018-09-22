'use strict';

const LinkedList = require('../lib/linked-list');

const testList = new LinkedList();
const emptyList = new LinkedList();

for (let i = 5; i >= 1; i--) {
  testList.insertAtHead(`Value ${i}`);
}


describe('#linkedlist.js', () => {
  describe('testing linked-list', () => {
    test('Testing that linked-list.deleteListItem properly removes items', () => {
      testList.deleteListItem(2);
      expect(testList.head.value).toEqual('Value 1');
      expect(testList.head.next.value).toEqual('Value 2');
      expect(testList.head.next.next.value).toEqual('Value 4');
      expect(testList.head.next.next.next.value).toEqual('Value 5');
    });
    test('Testing that deleteListItem throws an error if offset is greater than list length', (done) => {
      expect(() => testList.deleteListItem(10)).toThrow();
      done();
    });
    test('Testing that linked-list.deletListItem throws an error if no list exists', (done) => {
      expect(() => emptyList.deleteListItem(2)).toThrow();
      done();
    });
  });
});
