import { User  }  from '../database/models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import errorHandler from '../helpers/errorHandler';
export default class UserService{
    static async createUser(userDetails){
        try{
            const  saltRounds = 10 ;
            const hashedPassword = await bcrypt.hash(userDetails.password,saltRounds).then((hash) => hash);
            console.log(hashedPassword)
            const user = await User.create({firstName: userDetails.firstname, lastName: userDetails.lastname, email: userDetails.email, password: hashedPassword});
            return user; 
        } catch (error){
            console.log(error)
            
        }
        

    }
    static  async checkUserExists(email){
        const user = await User.findOne({where:{email:email}});
        return user;
    }
}