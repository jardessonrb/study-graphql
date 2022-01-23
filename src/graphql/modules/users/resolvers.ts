import { UserModel } from "../../../models/User";

export default {
    Query: {
        users: () => UserModel.find(),
        user: (_: any, data: any) => UserModel.findById(data.id)
    },
    Mutation: {
        createUser: (_: any, { data }: any) => UserModel.create(data),
        updateUser: (_: any, { id, data }: any) => UserModel.findOneAndUpdate(id, data, { new: true}),
        deleteUser: async (_: any, { id }: any) => !!(await UserModel.findOneAndDelete(id)),
    }
};
