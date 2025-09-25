const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // ✅ attach a user object so controllers can read req.user.id
    req.user = { id: payload.sub };
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
