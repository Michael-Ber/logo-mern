import Sponsor from "../models/Sponsor.js";

export const getSponsors = async(req, res) => {
    try {
        const sponsors = await Sponsor.find({});
        return res.json({message: "Sponsors successfully getted", sponsors})
    } catch (error) {
        res.json({message: "Error while getting sponsors"})
    }
}