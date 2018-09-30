import User from "../../../entities/User";
import {EmailSignInMutationArgs,EmailSignInResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignIn: async (
            _,
            args: EmailSignInMutationArgs
            ) : Promise<EmailSignInResponse> => {
                
                const {email, password} = args;
                
                try{
                    const user =  await User.findOne({email});
                    if( !user ){
                        return {
                            ok: false,
                            error: "No user with that email",
                            token: null
                        };
 
                    }
                    const checkPassword = await User.comparePassWord(password);
                        
                        if( checkPassword ){
                            return {
                                ok: true,
                                error: null,
                                token: "Coming Soon, already"
                            };
                        }else {
                            return {
                                ok: false,
                                error: "Wrong password",
                                token: null
                            };
                        }
                        
                }catch(error){
                    return {
                        ok: false,
                        error: error.message,
                        token: null
                    };
                }
            }
    }
}

export default resolvers;