var express             = require("express")
var Product             = require("../../../models/product")
var Order               = require("../../../models/order")
var OrderItem           = require("../../../models/orderItem")

var router = express.Router()

router.get
(
    "/cart",
    function(request, response)
    {
        console.log("Entered /private/cart/cart")
        Order.find
        (
            {userID : request.user._id}
        ).exec
        (
            async function (error, orders)
            {
                if (error) request.flash("error", "Something went wrong while getting your orders... Error: " + error)
                if (orders)
                {
                    var orderitems  = []
                    var products    = []
                    var totalCost   = 0

                    for (const order of orders)
                    {
                        let orderitem = await OrderItem.findOne({orderID : order._id})                        
                        orderitems.push(orderitem)
                    }                    
                    for (const orderitem of orderitems)
                    {
                        let found = false
                        for (const product of products)
                        {
                            if (orderitem.productID.toString() == product._id.toString())
                            {
                                found = true
                                let price = parseFloat(product.price)
                                product.price = (price / product.qty * (product.qty + 1)).toString()
                                totalCost += (price / product.qty)
                                totalCost = Math.round((totalCost + Number.EPSILON) * 100) / 100
                                ++product.qty
                            }
                        }
                        if (!found)
                        {
                            let product = await Product.findById(orderitem.productID)
                            product.qty = 1
                            products.push(product)
                            totalCost += parseFloat(product.price)
                            totalCost = Math.round((totalCost + Number.EPSILON) * 100) / 100
                        }
                    }
                    response.render("private/cart", {products: products, totalCost: totalCost})
                }
            }
        )
    }
)

module.exports = router