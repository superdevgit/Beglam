import { model, Schema, Document } from 'mongoose';

interface IAction extends Document {
    serviceId: string,
    clientId: string,
    professionalId: string,
    status: string, // listen, accept, refuse, complete
    acceptDate: number //Unix Now
}

const ActionSchema: Schema = new Schema({
    serviceId: {
        type: String,
        required: true
    },
    clientId: {
        type: String,
        required: true
    },
    professionalId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    acceptDate: {
        type: Number,
        required: true
    }
})

const Action = model<IAction>('Action', ActionSchema);

export {Action, IAction}