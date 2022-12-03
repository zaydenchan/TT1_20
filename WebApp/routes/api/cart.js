var express     = require("express")
var Product     = require("../../models/product")
var Order       = require("../../models/order")
var OrderItem   = require("../../models/orderItem")

var router  = express.Router()

router.post
(
    "/additem",
    async function (request, response, next)
    {
        console.log("Entered /api/cart/additem")
        try
        {
            const product = await Product.findById(request.body.productID)
            console.log("Product Id: " + request.body.productID)
            if (product.qty > 0)
            {
                var neworder = new Order
                (
                    {
                        userID : request.user._id,
                        status: "in-cart"
                    }
                )
                let order = await neworder.save()
                var neworderitem = new OrderItem
                (
                    {
                        productID   : product._id,
                        orderID     : order._id,
                        status      : order.status,
                        createdAt   : order.createdAt
                    }
                )
                await neworderitem.save()
                product.qty = product.qty - 1
                await product.save()
                request.flash("success", "Successfully added item to cart!")
                response.redirect("/home")
            }
            else
            {
                request.flash("error", "Product selected is currently out of stock!")
            }
        }
        catch(error)
        {
            request.flash("error", "Something went wrong... Error: " + error)
        }
        next()
    }
)

router.post
(
    "/removeitem",
    async function (request, response, next)
    {
        try
        {
            const order     = await Order       .findOne({userID    : request.user._id, status: "in-cart"})
            const orderItem = await OrderItem   .findOne({productID : request.body.productID, orderID : order._id})
            
            await orderItem .delete()
            await order     .delete()
            
            request.flash("success", "Successfully removed item from cart.")
        }
        catch (error)
        {
            request.flash("error", "An error had occured... Error: " + error)
        }
        next()
    }
)

router.get
(
    "/checkout",
    async function (request, response, next)
    {
        const newstatus = "in-process"
        try
        {
            const orders    = await Order.find({userID : request.user._id})
            await Order.updateMany({userID : request.user._id}, {status : newstatus})
            for (const order of orders)
            {
                await OrderItem.updateOne({orderID: order._id}, {status : newstatus})
            }
            request.flash("success", "Successfully checked out!")
        }
        catch(error)
        {
            request.flash("error", "Something went wrong... Error: " + error)
        }
        next()
    }
)

module.exports = router