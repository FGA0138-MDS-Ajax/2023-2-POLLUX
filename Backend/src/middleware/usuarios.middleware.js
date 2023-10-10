// eslint-disable-next-line import/no-extraneous-dependencies
import jtw from 'jsonwebtoken';

const SECRET = 'paranguaricutirimiruarum';

function VerififyToken(req, res, next) {
  const token = req.headers.authorization;

  jtw.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    return next();
  });
}

export default VerififyToken;
