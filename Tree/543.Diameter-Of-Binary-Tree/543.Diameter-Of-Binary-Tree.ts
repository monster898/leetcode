function diameterOfBinaryTree(root: TreeNode | null): number {
  let ret = 0;
  dfs(root);
  return ret;
  function dfs(root: TreeNode | null) {
    if (root === null) {
      return 0;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);

    ret = Math.max(ret, left + right);

    return Math.max(left, right) + 1;
  }
}
