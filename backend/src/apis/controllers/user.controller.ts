import { Request, Response } from 'express';
import { error, success } from '../../utils/response';
import { createUserService } from '../services/user.service';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function createUser(req : Request){

    const { token } = req.body;
    if (!token) {
        return error("Token is required", 400);
    }

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID, 
      });

    if(!ticket){
        return error("Invalid token", 401);
    }  
    const payload = ticket.getPayload();

    if (!payload || !payload.email) {
      return error("Invalid token", 401);
    }
    const { name, email, picture: avatarUrl } = payload;
 
    const provider = 'google';
    const newUser = await createUserService(email, name as string, provider, avatarUrl as string);



    return success({
        message: "User LoggedIn successfully",
        user : newUser
    }, 201);
}