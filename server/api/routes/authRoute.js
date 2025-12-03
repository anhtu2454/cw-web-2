const authController = require('../controllers/authController');

const authRoute = (app) => {
    app.route('/api/auth/login') 
        .post(authController.loginUser);
};

module.exports = authRoute;