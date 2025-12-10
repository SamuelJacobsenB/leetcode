class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;

  function isEqual(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a && b && a.val == b.val)
      return isEqual(a.left, b.right) && isEqual(a.right, b.left);
    return !a && !b;
  }

  return isEqual(root?.right, root?.left);
}
