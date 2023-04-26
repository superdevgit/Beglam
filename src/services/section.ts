import { Section, ISection } from '../models/section'

const findOneByID = async (_id: string) => {
    const result: ISection = await Section.findOne({
        _id: _id
    })
    return result
}

const findBySectionName = async (sectName: string) =>{
    const result: ISection[] = await Section.find({sectionName: sectName})
    return result;
}

const createOne = async (data: ISection) => {
    const result: ISection = await Section.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: ISection = await Section.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteOne = async (_id: string) => {
    const result = await Section.deleteOne({
        _id: _id
    })
    return result
}

const sectionValidate = async (data: any) => {
    console.log("data", data);
    if(data.sectionName == "" || data.categoryNo == 0)
    {
        return false;
    }
    return true;
}

export default {
    findOneByID,
    findBySectionName,
    sectionValidate,
    createOne,
    updateOne,
    deleteOne
}
