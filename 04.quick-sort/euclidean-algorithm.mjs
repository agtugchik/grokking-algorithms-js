const algorithm = (w, h) => {
  if (w % h === 0) return h;
  return algorithm(h, w - Math.floor(w / h) * h);
};

export default algorithm;

