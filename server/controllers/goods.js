import Good from "../models/Good.js"

export const getGoods = async(req, res) => {
    try {
        const goods = await Good.find({});
        return res.json({message: "Successfully getting goods", goods})
    } catch (error) {
        return res.json({message: "Error while getting goods", error})
    }
}