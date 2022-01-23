import { Post, PostModel } from "../../../models/Posts";
import { UserModel } from "../../../models/User";

export default {
    Post: {
        author: async (post: Post) => await UserModel.findById(post.author)
    },
    Query: {
        posts: () => PostModel.find(),
        post: (_: any, { id }: any) => PostModel.findById(id)
    },
    Mutation: {
        createPost: (_: any, { data }: any) => PostModel.create( data ),
        updatePost: (_: any, { id, data }: any) => PostModel.findOneAndUpdate(id, data, { new: true}),
        deletePost: async (_: any, { id }: any) => !!(await PostModel.findOneAndDelete(id))
    }
};
