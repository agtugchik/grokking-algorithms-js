const addInQueue = (queue, left, right) => {
  if (left !== null) queue.push(left);
  if (right !== null) queue.push(right);
};

const algorithm = (queue, value) => {
  if (queue && !Array.isArray(queue)) {
    if (queue.value === value) return true;
    const newQueue = [];
    addInQueue(newQueue, queue.left, queue.right);
    return algorithm(newQueue, value);
  }
  const newQueue = [];
  for (let i = 0; i < queue.length; i++) {
    if (queue[i].value === value) return true;
    addInQueue(newQueue, queue[i].left, queue[i].right);
  }
  return newQueue.length ? algorithm(newQueue, value) : false;
};

export default algorithm;
