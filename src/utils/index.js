function handleNotFoundError(message, res) {
  const error = new Error(message);
  return res.status(404).json({
    msg: error.message,
  });
}

export {
  handleNotFoundError,
};