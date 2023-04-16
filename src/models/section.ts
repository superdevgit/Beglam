import { model, Schema, Document } from 'mongoose';

interface ISection extends Document {
    sectionName: string,
    categoryNo: number,
}

const SectionSchema: Schema = new Schema({
    sectionName: {
        type: String,
        required: true
    },
    categoryNo: {
        type: Number,
        required: true
    }
})

const Section = model<ISection>('Section', SectionSchema);

export {Section, ISection}