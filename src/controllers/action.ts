import { Request, Response } from 'express'
import { BAD_REQUEST, BACKEND_ERROR } from '../config'
import Action from '../services/action'

const getAction = async (req: Request, res: Response) => {
    const { actionId } = req.params;
    try{
        if(actionId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await Action.findOneByID(actionId);
        return res.json({ success: true, message: 'Success', data: result });
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const getActionClientId = async (req: Request, res: Response) => {
    const { clientId } = req.params;
    try{
        if(clientId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await Action.findAllByClientID(clientId);
        return res.json({ success: true, message: 'Success', data: result });
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const getActionProfessionalId = async (req: Request, res: Response) => {
    const { professionalId } = req.params;
    try{
        if(professionalId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await Action.findAllByProfessionalID(professionalId);
        return res.json({ success: true, message: 'Success', data: result });
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const getActionBothId = async (req: Request, res: Response) => {
    const { clientId, professionalId } = req.params;
    try{
        if(clientId === undefined || professionalId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        const result = await Action.findAllByBothID(clientId, professionalId);
        return res.json({ success: true, message: 'Success', data: result });
    } catch(e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const addAction = async (req: Request, res: Response) => {
    try {
        const { data } = req.body;

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }

        const result = await Action.createOne(data);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const editAction = async (req: Request, res: Response) => {
    try {
        const { data } = req.body;

        if (data === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }

        const result = await Action.updateOne(data);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

const deleteAction = async (req: Request, res: Response) => {
    try {
        const { actionId } = req.body;

        if (actionId === undefined) {
            return res.status(400).json(BAD_REQUEST);
        }
        
        const result = await Action.deleteOne(actionId);

        return res.json({ success: true, message: 'Success', data: result });
    } catch (e) {
        return res.status(500).json(BACKEND_ERROR);
    }
}

export default {
    addAction,
    getAction,
    getActionClientId,
    getActionProfessionalId,
    getActionBothId,
    editAction,
    deleteAction
}
