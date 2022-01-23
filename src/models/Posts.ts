import mongoose, { Schema, model } from 'mongoose';
import { User } from './User';

interface Post {
    title: string;
    body: string;
    author: User;
}

const schemaPost = new Schema<Post>({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const PostModel = model<Post>('Post', schemaPost);

export { PostModel, Post };
