const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret'; 

exports.protectAdmin = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, JWT_SECRET);

            if (decoded.role === 'admin') {
                req.user = decoded;
                next();
            } else {
                return res.status(403).json({ message: 'You are not admin' });
            }
            
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token.' });
        }
    } else {
        return res.status(401).json({ message: 'Not found token.' });
    }
};
