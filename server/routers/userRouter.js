import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/userModel.js'

const router = express.Router();
dotenv.config()

router.post("/signup", async (req, res)=> {
    try {
        const { email, fullname, username, password} = req.body;

        const emailExists = await User.findOne({ email })
        if(emailExists) {
            return res.status(400).json({ message: 'email already exists' })
        }

        const usernameExists = await User.findOne({ username })
        if(usernameExists) {
            return res.status(400).json({ message: 'username already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await User.create({
            email,
            fullname,
            username,
            password:hashedPassword
        })

        const token = jwt.sign({id: createdUser._id}, `${process.env.JWT_KEY}`, {expiresIn: '10m'})
        return res.status(201).json({token}) 
    } catch (error) {
        return res.json({ message: error.message})
    }
})

router.post("/signin", async (req, res)=> {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({ message: "user does not exist"})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) {
            return res.status(400).json({message: "wrong password"})
        }
        const token = jwt.sign({id: user._id}, `${process.env.JWT_KEY}`, {expiresIn: '10m'})
        return res.status(200).json({token})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    } 
})

router.post("/user", async (req, res)=> {
    try {
        const token = req.headers.token;
        if(!token) {
            return res.status(400).json({message: "auth error"})
        }
        const decodedToken = jwt.verify(token, `${process.env.JWT_KEY}`);
        const user = await User.findOne({_id: decodedToken.id});
        return res.status(200).json({user})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    } 
})

router.post("/singleuser", async (req, res)=> {
    try {
        const {username} = req.body;
        const user = await User.findOne({username});
        if(!user) {
            return res.status(400).json({ message: "user does not exist"})
        }
        return res.status(200).json({user})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    } 
})

router.post("/follow", async (req, res)=> {
    try {
        const { username, follower} = req.body;
        const user = await User.findOneAndUpdate({username}, { $push: { followers: follower } });
        const followingUser = await User.findOneAndUpdate({username: follower}, { $push: { following: username } });
        return res.status(200).json({user, followingUser})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    } 
})

router.post("/unfollow", async (req, res)=> {
    try {
        const { username, follower} = req.body;
        const user = await User.findOneAndUpdate({username}, { $pull: { followers: follower } });
        const followingUser = await User.findOneAndUpdate({username: follower}, { $pull: { following: username } });
        return res.status(200).json({user, followingUser})
    }
    catch(error) {
        return res.status(400).json({message: error.message})
    } 
})

export default router