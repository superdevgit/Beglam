import { dateRegex, idRegex } from '../config'
import { Action, IAction } from '../models/action'

const findOneByID = async (_id: string) => {
    const result: IAction = await Action.findOne({
        _id: _id
    })
    return result
}

const findAllByClientID = async (_clientId: string) => {
    const result: IAction[] = await Action.find({
        clientId: _clientId
    });
    return result
}

const findAllByProfessionalID = async (_professionalId: string) => {
    const result: IAction[] = await Action.find({
        professionalId: _professionalId
    });
    return result
}

const findAllByBothID = async (_clientId: string, _professionalId: string) => {
    const result: IAction[] = await Action.find({
        clientId: _clientId,
        professionalId: _professionalId
    });
    return result
}

const createOne = async (data: IAction) => {
    const result: IAction = await Action.create(data)
    return result
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: IAction = await Action.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteOne = async (_id: string) => {
    const result = await Action.deleteOne({
        _id: _id
    })
    return result
}

const actionValidate = async(data: any) => {
    if(idRegex.test(data.serviceId) && idRegex.test(data.clientId) && idRegex.test(data.professionalId) && dateRegex.test(data.acceptDate)){
        if(data.status == "Listen" || data.status == "Accept" || data.status == "Refuse" || data.status == "Complete"){
            return true;
        }
        else{
            return false;
        }
    }
    return false;
}

export default {
    findOneByID,
    findAllByClientID,
    findAllByProfessionalID,
    findAllByBothID,
    actionValidate,
    createOne,
    updateOne,
    deleteOne
}
