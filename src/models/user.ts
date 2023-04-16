import { model, Schema, Document } from 'mongoose';

interface IUser extends Document {
    fullName: string,
    email: string,
    telephone: any,
    password: string,
    country: string,
    invitationCode: string,
    confirmationCode: string,
    userType: string,
    mailVerified: boolean
}

const UserSchema: Schema = new Schema({
    fullName: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
    },
    telephone: {
        type: Array,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false
    },
    invitationCode: {
        type: String,
        required: false
    },
    confirmationCode: {
        type: String,
        required: false
    },
    userType: {    // client or professional
        type: String,
        required: true
    },
    mailVerified: {
        type: Boolean,
        required: true
    }
  })
  
  const User = model<IUser>('User', UserSchema);

  export {User, IUser}