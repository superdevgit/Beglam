import { Request, Response } from 'express'
import { BAD_REQUEST, BACKEND_ERROR } from '../config'
import profileService from '../services/profile'

const getProfile = async (req, res) => {
    const { profileId } = req.params;
    try{
        if(profileId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await profileService.findOneByID(profileId);   
        console.log(result);
        return res.json({ success: true, message: 'Success', data: result }); 
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const getProfileByUserId = async(req, res) => {
    const { userId } = req.params;
    try{
        if(userId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await profileService.findOneByUserID(userId); 
        return res.json({ success: true, message: 'Success', data: result });
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const addProfile = async (req, res) => {
    try {
        const { data } = req.body;

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }

        const result = await profileService.createOne(data);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const editProfile = async (req, res) => {
    try {
        const { data } = req.body;

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }

        const result = await profileService.updateOne(data);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const deleteProfile = async (req, res) => {
    try {
        const { profileId } = req.body;

        if (profileId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        
        const result = await profileService.deleteOne(profileId);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

export default {
    getProfileByUserId,
    addProfile,
    getProfile,
    editProfile,
    deleteProfile
}

