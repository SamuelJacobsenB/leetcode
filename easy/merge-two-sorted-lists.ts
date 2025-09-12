class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const values: number[] = [];

  while (list1) {
    values.push(list1.val);
    list1 = list1.next;
  }

  while (list2) {
    values.push(list2.val);
    list2 = list2.next;
  }

  values.sort((a, b) => a - b);

  let dummy = new ListNode(0);
  let current = dummy;

  for (const val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummy.next;
}
