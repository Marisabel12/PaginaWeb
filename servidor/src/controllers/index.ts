import {Request, Response} from "express";
import User, {IUser} from "../models/userModel";
class userControllers {
    public async index(req: Request, res: Response){
        res.send("hola otra");
        /*const users = await User.find({});
        res.send(users);*/
    }
    public async createUser(req: Request, res: Response){
      let {name, email, password } = req.body;
      if (name.length === 0){
        res.send("el nombre no puede estar vacio"); 
     }
     const newUser = new User(req.body);
     await newUser.save();
     res.send("usuario creado correctamente");
    }
    async editUser(req: Request, res: Response){
        res.send("creando usuario")
    }
    async deleteUser(req: Request, res: Response){
        res.send("creando usuario")
    }
}
export const UserControlllers =new userControllers();
 