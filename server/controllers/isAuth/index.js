module.exports = (req, res) => {
  res.status(200).json({ status: 200, message: 'Your Are Authenticated' });
};
