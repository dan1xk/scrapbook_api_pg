import { Response, Request } from 'express';
import { HttpError } from '../errors';
import { ErrandService } from '../services';

import { 
    createMessage, 
    defaultErrorMessage,
    httpCreatedCode,
    HttpInternalErrorCode,
    HttpNoContent,
    httpSucessCode
} from '../constants';

export default class ErrandController {
    async index(request: Request, response: Response) {
       const { id } = request.params;
       const service = new ErrandService();

       try {
           const errands = (await service.find())
                .filter(user => user.userId === parseInt(id));

            return response.status(httpSucessCode).json(errands);
       } catch (error) {
           throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);     
       }
    }

    async store(request: Request, response: Response) {
        const { errands, userId } = request.body;
        const service = new ErrandService();

        try {
            await service.create({
                errands, 
                userId
            });

            return response.status(httpCreatedCode).json(createMessage('Criado'));
        } catch (error) {
            throw new HttpError(defaultErrorMessage,HttpInternalErrorCode);
        }
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { errands, userId } = request.body;
        const service = new ErrandService();

        try {
            await service.update({
                id: parseInt(id),
                errands,
                userId
            });

            return response.status(httpCreatedCode).json(createMessage('Editado'));
        } catch (error) {
            throw new HttpError(defaultErrorMessage,HttpInternalErrorCode);
        }
    }
    
    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ErrandService();
        try {
            await service.delete(parseInt(id));

            return response.status(HttpNoContent).json(createMessage('Deletado'));
        } catch(error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        }

    }
}