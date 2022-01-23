import {Schema, model } from 'mongoose';

interface User {
    firstName: string;
    secondName: string;
    email?: string;
    age: number;
    active: boolean;
}

const schemaUser = new Schema<User>({
    firstName: {
        type: String,
        required: true,
    },
    secondName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
});

const UserModel = model<User>('User', schemaUser);

export { UserModel, User};
