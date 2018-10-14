import Verification from "../../../entities/Verification";
import { StartPhoneVerificationMutationArgs, StartPhoneVerificationResponse } from '../../../types/graph';
import {Resolvers} from "../../../types/resolvers";

const resolvers: Resolvers = {
    Mutation : {
        StartPhoneVerification: 
        async  (_, args: StartPhoneVerificationMutationArgs) : Promise<StartPhoneVerificationResponse> => {

            const {phoneNumber} = args;

            try{
                const existingVerification = await Verification.findOne({payload: phoneNumber});
                if(existingVerification){
                    existingVerification.remove();
                    return {
                        ok: false,
                        error:"The PhoneNumber is existing."
                    };
                }
                else{
                    return {
                        ok: true,
                        error: "The PhoneNumber is not exist."
                    };
                }
            }catch(error){
                return {
                    ok: false,
                    error: error.message
                };
            }

        }
    }
}

export default resolvers;