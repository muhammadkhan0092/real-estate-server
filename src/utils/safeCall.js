const safeCall = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res)).catch(next);
  };
};

export default safeCall;
