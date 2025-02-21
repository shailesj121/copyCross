import mongoose from "mongoose"
import {Schema, model} from "mongoose"

const copySchema = new Schema({
    copyedText: String,
    createdAt: Date,
    updatedAt: Date,
})

const copyText = model("copytext", copySchema)

export default copyText

