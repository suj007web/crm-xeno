import User from '../../models/User'; 


export async function createUserService(email: string, name: string, provider: string, avatarUrl: string) {
    
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
          return existingUser;
        }
      
        const user = new User({
        email,
        name,
        provider,
        avatarUrl,
      });


    
    
      const savedUser = await user.save();
      return savedUser;

}