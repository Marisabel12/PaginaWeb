import {model, Schema, Document} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}
const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v: string) => {
                return /^[\w\.]+@\w+[.][\w]{2,3}s/.test(v);
            },
            message: (props: any) => `${props.value} no es un corre valido`,
        },
    },
    password: {
        type: String,
        required: true,
    },
});
export default model<IUser>("User", userSchema);