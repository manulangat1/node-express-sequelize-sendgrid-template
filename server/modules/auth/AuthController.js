import { UserService } from '../../services';
import responseHandler from '../../helpers/responseHandler';
import errorHandler from '../../helpers/errorHandler';
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
}