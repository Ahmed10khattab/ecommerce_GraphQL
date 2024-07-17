const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/user'); 






const signup = async (_, { username, email, password, isAdmin,phone,address,deviceToken,userImage,gander }) => {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        throw new Error('This email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        isAdmin,
        phone,
        address,
        deviceToken,
        userImage,
        gander
    });

    const savedUser = await newUser.save();

    return {
        message: 'Signup successful',
        email: savedUser.email,
        username: savedUser.username,
        isAdmin: savedUser.isAdmin,
        phone:savedUser.phone,
        address:savedUser.address,
        deviceToken:savedUser.deviceToken,
        userImage:savedUser.userImage,
        gander:savedUser.gander,
    };
};


 const generateToken = (user) => {
     const token = jwt.sign(
         {
             id: user._id,
             email: user.email,
             username: user.username,
             isAdmin: user.isAdmin
         },
         'your-secret-key', // Use a proper secret key in production
         { expiresIn: '1h' }
     );
     return token;
 };
 
  
const login = async (_, { email, password }) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new Error('Email or password is incorrect');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Email or password is incorrect');
    }

    const token = generateToken(user); // Implement this method as needed

    return {
        
        message: 'Login successful',
        email: user.email,
        username: user.username,
        isAdmin: user.isAdmin,       
        phone:user.phone,
        address:user.address,
        deviceToken:user.deviceToken,
        userImage:user.userImage,
        gander:user.gander,
        token: token,

    };
};


 

module.exports = {signup,login};



