import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    comments: [String],
    likes: {
        type: Number
    }
})

export default mongoose.model('Post', postSchema);