const algorithm = (tree, value) => {
  console.log(tree.value);
  if (tree.value === value) {
    return true;
  }
  return (
    (tree.left !== null ? algorithm(tree.left, value) : false) ||
    (tree.right !== null ? algorithm(tree.right, value) : false)
  );
};

export default algorithm;
