import Twilio from "twilio";

const twilioClient =  Twilio(process.env.TWILIO_SID, 
    process.env.TWILIO_TOKEN);



export const SendSMS  =  (to: string, body: string) : Promise<any>=> {
    return twilioClient.messages.create({
        body,
        to,
        from: process.env.TWILIO_PHONE
    });
}

export const sendVerificationSMS = (to: string, key: string) => {
    SendSMS(to, `Your Verification key is ${key}`);
}