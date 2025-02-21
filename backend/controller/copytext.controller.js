import copyText from "../modules/copytext.schema.js";

const copytextController = async (req, res)=> {
    const copyedtext = req.body.copyedText;
    const copyToDb = new copyText({
        copyedText: copyedtext
    })
    const savingtoDb = await copyToDb.save();

    savingtoDb? res.send("Data saved successfully"): res.send("Data not saved")

}

export {copytextController}