import { model, Schema, Document } from 'mongoose';

interface IProfile extends Document {
    description: string,
    address: string,
    avatarUrl: string,
    serviceId: string,  //only professional,
    facebook: string,
    instagram: string,
    twitter: string,
    tictok: string,
    pinterest: string,
    userId: string
}

const ProfileSchema: Schema = new Schema({
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        required: true
    },
    serviceId: {    // only professional
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: false
    },
    instagram: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },
    tictok: {
        type: String,
        required: false
    },
    pinterest: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: true 
    }
})
  
const Profile = model<IProfile>('Profile', ProfileSchema);

export {Profile, IProfile}