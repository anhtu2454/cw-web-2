const orderController = require('../controllers/orderController')

const orderRoute = (app) => {
    app.route('/api/orders')
        .get(orderController.viewOrders)
        .post(orderController.createOrder)

    app.route('/api/orders/:id')

        .put(orderController.updateOrderByID)
        .delete(orderController.deleteOrderByID)

}
module.exports = orderRoute