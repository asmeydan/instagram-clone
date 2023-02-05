import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    }
})

export default mongoose.model('Post', postSchema);