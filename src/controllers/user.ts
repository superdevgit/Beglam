import { Request, Response } from 'express';
import { BAD_REQUEST, BACKEND_ERROR, JWT_EXPIREED_ERROR, jwtConfig } from '../config';
import md5 from 'md5';
import userService from '../services/user';
import jwt from 'jsonwebtoken';

const getUsers = async (req, res) => {
    try {
        const params = req.body.params;
        if (params === undefined) {
            const result = await userService.findAll();
            return res.json({ success: true, message: 'Success', data: result });
        }   
        else{
            const result = await userService.findByFilter(params);
            return res.json({ success: true, message: 'Success', data: result });
        }

    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const getUser = async(req, res) => {
    try{
        const {userId}: any = req.params;
        if (userId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await userService.findOneByID(userId);
        return res.json({ success: true, message: 'Success', data: result });
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const signIn = async (req, res) => {
    if(req.body === undefined){
        return res.status(400).json(BAD_REQUEST);
    }
    const { email, password } = req.body;
    
    try{
        const usrList = await userService.findByEmailAndPass(email, md5(password));
        if(usrList?.length != 0){
            const accessToken = jwt.sign({ ...usrList[0]}, jwtConfig.secret, { expiresIn: jwtConfig.expireTime });
            const refreshToken = jwt.sign({ ...usrList[0] }, jwtConfig.refreshTokenSecret, {
                expiresIn: jwtConfig.refreshTokenExpireTime
            })

            const userData = { ...usrList[0] }
            delete userData.password;

            const response = {
                userData,
                accessToken,
                refreshToken
            }
            return res.json({ success: true, message: 'Success', data });
        }
        else{
            return res.status(400).json(BAD_REQUEST);
        }
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const checkJwt = async(req, res) => {
    try{
        const {token} = req.body;
        let jwt_res: any
        try{
            jwt_res = jwt.verify(token, jwtConfig.secret)
        }
        catch(e){
            return res.json({success: false, message: JWT_EXPIREED_ERROR, data: null})                
        }
        const usr = await userService.findOneByID(jwt_res.id);
        const userData = {...jwt_res};
        delete userData.password;
        delete userData.privateKey;

        if(usr === undefined)
        {
            return res.json({ success: true, message: 'Faild', data: null });
        }
        else{
            console.log("checkJWT", userData);
            return res.json({ success: true, message: 'Success', data: userData });
        }
    }catch(e){
        return res.status(500).json(BACKEND_ERROR);
    }
}

const addUser = async (req, res) => {
    try {
        const { data } = req.body;
        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        
        data.password = md5(data.password);
        const result = await userService.createOne(data);
        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const sendMail = async (req, res) => {
    try{
       const {userId} = req.body;
       if(userId === undefined) {
           return res.status(400).json(BAD_REQUEST);
       }
       const result = await userService.sendMail(userId);
       return res.json({ success: true, message: 'Success', data: result });
    } catch(e) {
       return res.status(500).json(BACKEND_ERROR);
    } 
}

const verify = async (req, res) => {
    try{
        const {userId, verifyCode} = req.params;
        const result = userService.verify(userId, verifyCode);
    }catch(e){
        return res.status(500).json(BACKEND_ERROR);
    }
}

const editUser = async (req, res) => {
    try {
        const { data } = req.body;

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }

        const result = await userService.updateOne(data);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.body;
        
        if (userId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }

        const result = await userService.deleteOne(userId);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

export default {
    getUsers,
    getUser,
    signIn,
    checkJwt,
    addUser,
    sendMail,
    verify,
    editUser,
    deleteUser,
}

