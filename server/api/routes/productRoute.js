const productController = require('../controllers/productController')
const authMiddleware = require('../middleware/authMiddleware')

const productRoute = (app) => {
    app.route('/api/products')
        .get(productController.viewAllProducts)
        .post(authMiddleware.protectAdmin,productController.createNewProduct)

    app.route('/api/products/:id')
        .get(productController.viewProductByID)
        .put(authMiddleware.protectAdmin,productController.updateProductByID)
        .delete(authMiddleware.protectAdmin,productController.deleteProductByID)

}
module.exports = productRoute