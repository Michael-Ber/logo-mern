import Good from "../models/Good.js";
import User from "../models/User.js";

export const getGoods = async(req, res) => {
    try {
        const goods = await Good.find({});
        return res.json({message: "Successfully getting goods", goods})
    } catch (error) {
        return res.json({message: "Error while getting goods", error})
    }
}

//add item to cart
export const addItem = async(req, res) => {
    try {
        
        if(!req.body) return res.json({message: "Bad request"});
        const { amount, ...rest } = req.body.additional;
        const item = await Good.findById(req.body.goodId);
        item.amount = amount;
        item.moreInfo = rest;
        await User.findByIdAndUpdate(
            req.userId,
            { $push: { cart: item } }
        );
        return res.json({message: "Adding item to cart successfully done", item})
    } catch (error) {
        res.json({message: "Error while adding item to cart", error})
    }
}

//remove item from cart

export const removeItem = async(req, res) => {
    try {
        if(!req.body) return res.json({message: "Bad request"});
        const item = await Good.findById(req.body.goodId);
        await User.findByIdAndUpdate(
            req.userId, 
            { $pull: { cart: item} }
        );
        return res.json({message: "Removing item from cart successfully done", item})
    } catch (error) {
        res.json({message: "Error while deleting item from cart", error})
    }
}

//remove all items from cart
export const removeAll = async(req, res) => {
    try {
        // const user = await User.findById(req.userId);
        await User.findByIdAndUpdate(
            req.userId, 
            { $pull: { cart: {}} }
        );
        return res.json({message: "All items were removed done"})
    } catch (error) {
        res.json({message: "Error while deleting item from cart", error})
    }
}

//make order

export const makeOrder = async(req, res) => {
    try {
        if(!req.body) return res.status(400).json({message: "No data"});
        await User.findByIdAndUpdate(req.userId, {
            $push: { order: req.body.data }
        });
        return res.json({message: "Спасибо за заказ, скоро мы с вами свяжемся"})
    } catch (error) {
        res.json({message: "Error while making order"})
    }
}