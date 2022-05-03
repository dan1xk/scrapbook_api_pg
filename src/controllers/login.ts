import { Request, Response } from 'express';
import { UserService } from '../services';

export default class LoginController {
    async login(request: Request, response: Response) {
        const { name, password } = request.body;
        const service = new UserService();

        const findUser = await service.find();
        const nameUser = findUser.find(user => name === user.name);
        
        if (nameUser?.password === password) {
            return response.status(200).json({
                message: 'Logado com Sucesso.'
            });
        } 

        response.status(400).json({
            message: 'Verifique se a senha ou usuario está certo.'
        });           
    }

    async authLogin(request: Request, response: Response) {
        const { name } = request.body;
        const service = new UserService();
        const user = await service.find();
        const auth = user.find(user => user.name === name);

        if(auth) {
            return response.status(200).json({
                message: 'Logado com Sucesso.'
            });
        }

        if (!name) {
            return response.status(400).json({
                message: 'Preencha todos campos'
            });   
        }

        response.status(400).json({
            message: 'Verifique se a senha ou usuario está certo.'
        });       
    }
}