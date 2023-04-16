import { model, Schema, Document } from 'mongoose';

interface IService extends Document {
    serviceDescription: string,
    servicePrice: number,
    durartion: number,
    sectionId: string,
    categoryNo: number
}

const ServiceSchema: Schema = new Schema({
    serviceDescription: {
        type: String,
        required: true,
    },
    servicePrice: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: false
    },
    sectionId: {
        type: String,
        required: false
    },
    categoryNo: {
        type: Number,
        required: false
    }
})

const Service = model<IService>('Service', ServiceSchema);

export {Service, IService}