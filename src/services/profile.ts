import { idRegex } from '../config'
import { Profile, IProfile } from '../models/profile'

const findOneByID = async (_id: string) => {
    const result: IProfile = await Profile.findOne({
        _id: _id
    })
    return result
}

const findOneByUserID = async (_userId: string) => {
    const result: IProfile = await Profile.findOne({
        userId: _userId
    })
    return result
}

const findByUserID = async (_userId: string) => {
    const result: IProfile[] = await Profile.find({
        userId: _userId
    })
    return result
}

const createOne = async (data: IProfile) => {
    const result: IProfile = await Profile.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: IProfile = await Profile.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteOne = async (_id: string) => {
    const result = await Profile.deleteOne({
        _id: _id
    })
    return result
}

const profileValidation = async(data: any) => {
    if(data.address != "" && idRegex.test(data.userId))
    {
        if(data.facebook != "" && !data.facebook.includes("facebook.com"))
        {
            return false
        }
        else if(data.instagram != "" && !data.instagram.includes("instagram.com")){
            return false
        }
        else if(data.twitter != "" && !data.twitter.includes("twitter.com")){
            return false
        }
        else if(data.tictok != "" && !data.twitter.includes("tictok.com")){
            return false
        }
        else if(data.pinterest != "" && !data.pinterest.includes("pinterest.com")){
            return false
        }
        else{
            return true
        }
    }
    return false
}

export default {
    findOneByID,
    findOneByUserID,
    findByUserID,
    profileValidation,
    createOne,
    updateOne,
    deleteOne
}