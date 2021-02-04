import { UserService } from '../../services';
import responseHandler from '../../helpers/responseHandler';
import errorHandler from '../../helpers/errorHandler';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// helper function that removes password from payload
function omitPassword(user){
    const { password, ...userWithoutPassword} = user;
    return userWithoutPassword;
}
export default class AuthController {
    
    static async registerUser(req,res){
        try{
            const userexists =await UserService.checkUserExists(req.body.email)
            if (userexists){
                const data = 'An account with the same email already exists.'
                return responseHandler(res,400,data,"User exists")
            }
            const   userDetails =  { firstName:req.body.fname,lastName:req.body.lname, email:req.body.email ,password:req.body.password}
            console.log(userDetails)
            const user = await UserService.createUser(userDetails);
            return responseHandler(res,201,user,"User created successfully")
        } catch (error){
            console.log(error)
            errorHandler.handleError(error.message,500,res)
        }
    }
    static async login(req,res){
        try{
            const userexists = await UserService.checkUserExists(req.body.email)
            const { email,password} = req.body
            if (userexists){
                if (bcrypt.compareSync(password,userexists.dataValues.password)){
                    const token = jwt.sign({email},'sjsjsjs',{expiresIn:'1h'})
                    console.log(token)
                    const data = {
                        token,
                        ...omitPassword(userexists.dataValues)
                    }
                    return responseHandler(res,200,data,'User login Success')
                }
                return responseHandler(res,403,'Invalid login details, Please try again','Invalid login details, Please try again')
            }
            return responseHandler(res,403,'User does not exist','User does not exist')
        } catch (error){
            console.log(error)
            errorHandler.handleError(error.message,500,res)
        }
    }


    
}