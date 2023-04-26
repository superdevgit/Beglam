import { emailRegex, passwordRegex } from '../config';
import { User, IUser } from '../models/user'

var sendgrid = require('@sendgrid/mail');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

const findOneByID = async (_id: string) => {
    const result: IUser = await User.findOne({
        _id: _id
    })
    return result
}

const findByEmail = async (email: string) => {
    const result: IUser[] = await User.find({email: email})
    return result;
}

const findByEmailAndPass = async(email: string, password: string) => {
    const result: IUser[] = await User.find({
        email: email,
        password: password
    })
    return result;
}

const findByFilter = async (filter: any) => {
    const total = await User.count({
        $or: [
            { key: { $regex: `.*${filter.searchValue}.*` } },
            { value: { $regex: `.*${filter.searchValue}.*` } }
        ]
    })

    const rows: IUser[] = await User.find({
        $or: [
            { key: { $regex: `.*${filter.searchValue}.*` } },
            { value: { $regex: `.*${filter.searchValue}.*` } }
        ]
    })
        .sort({
            [filter.column]: filter.direction === "asc" ? 1 : -1
        })
        .limit(filter.rowsPerPage)
        .skip((filter.currentPage - 1) * filter.rowsPerPage)
    return { rows, total }
}


const findAll = async () => {
    const result: IUser[] = await User.find({})
    return result
}

const findProfessionalUsers = async() => {
    const result: IUser[] = await User.find({userType: "professional"}) 
    return result
}

const createOne = async (data: IUser) => {

    const code = Math.round((Math.random() * 10000)).toString();
    data.confirmationCode = code;
    const result: IUser = await User.create(data);

    /*
    var authUrl = 'http://localhost:3000/verify?authKey='+ result.confirmationCode;
    sgMail.send({
        to: result.email,
        from: 'mantadreamer07@gmail.com',
        subject: 'Comfire your email',
        html: '<a target="_blank" href="' + authUrl + '">comfirm email</a> Or copy code '+ result.confirmationCode + ''
        
    }).then((json)=> {
        console.log(json);
    }).catch(err => {
        console.log(err);
    })
    */
    
    return result;
}

const sendMail = async(userId: string) => {
    const data = await User.findOne({_id: userId});
    const code = Math.round((Math.random() * 10000)).toString();
    data.confirmationCode = code;
    const result = updateOne(data);
    return result;
}

const verify = async (userId: string, code: string) => {
    const data: IUser = await User.findOne({
        _id: userId,
        confirmationCode: code
    });

    if(data === undefined) return null;
    else{
        data.mailVerified = true
        const result = updateOne(data);        
        return result;
    }
}

const updateOne = async (data: any) => {
    const filter = { _id: data._id }
    delete data._id
    const result: IUser = await User.findOneAndUpdate(filter, data, { new: true })
    return result
}

const deleteAll = async () => {
    const result = await User.deleteMany({})
    return result
}

const deleteOne = async (_id: string) => {
    const result = await User.deleteOne({
        _id: _id
    })
    return result
}

const validationUser = async(data: any) => {
    if(emailRegex.test(data.email))  
    {
        if(passwordRegex.test(data.password))
        {
            if(data.userType == "client" || data.userType == "professional")
            {
                /*
                for(let i = 0; i < data.telephone.length; i++){
                    if(!phonenumberRegex.test(data.telephone[i])) return false
                }
                */
                return 1
            }
            return 2
        }
        return 3
    }
    return 0
}

export default {
    findOneByID,
    findByEmail,
    findByEmailAndPass,
    findByFilter,
    findAll,
    findProfessionalUsers,
    validationUser,
    createOne,
    sendMail,
    verify,
    updateOne,
    deleteOne,
    deleteAll
}