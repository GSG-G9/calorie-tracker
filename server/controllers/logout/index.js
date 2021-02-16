module.exports = (req, res) => {
  res
    .clearCookie('token')
    .json({ state: 200, message: 'logged out successfully' });
};
