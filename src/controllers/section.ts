import { Request, Response } from 'express'
import { BAD_REQUEST, BACKEND_ERROR } from '../config'
import Section from '../services/section'

const getSection = async (req: Request, res: Response) => {
    const { sectionId } = req.params;
    try{
        if(sectionId === undefined){
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await Section.findOneByID(sectionId);   
        return res.json({ success: true, message: 'Success', data: result }); 
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const addSection = async (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await Section.createOne(data);
        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const editSection = async (req: Request, res: Response) => {
    try {
        const { data } = req.body;
        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await Section.updateOne(data);
        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const deleteSection = async (req: Request, res: Response) => {
    try {
        const { sectionId } = req.body;
        if (sectionId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }   
        const result = await Section.deleteOne(sectionId);
        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

export default {
    addSection,
    getSection,
    editSection,
    deleteSection
}
