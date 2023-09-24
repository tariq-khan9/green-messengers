import mongoose, {Schema} from "mongoose";

const postSchema = new Schema({
    title: String,
    content: String,
    date: Date,
    authorEmail: String
})

const Post = mongoose.models.Post || mongoose.model("Post", postSchema)

export default Post