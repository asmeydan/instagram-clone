import express from 'express'
import mongoose from 'mongoose'
import Post from '../models/postModel.js';

const router = express.Router();

router.post("/", async (req, res)=> {
    try {
        const { username, image, description} = req.body
        const createdPost = await Post.create({
            username,
            image,
            description
        })
        return res.status(201).json(createdPost)

    } catch (error) {
        return res.status(400).json({message: error.message})
    }
})

router.get("/", async (req, res)=> {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
})

router.post("/userposts", async (req, res)=> {
    try {
        const { username } = req.body
        const posts = await Post.find({ username });
        return res.status(201).json(posts)

    } catch (error) {
        return res.status(400).json({message: error.message})
    }
})

router.post("/postdetail", async (req, res)=> {
    try {
        const { _id } = req.body
        const post = await Post.findOne({ _id });
        return res.status(201).json(post)

    } catch (error) {
        return res.status(400).json({message: error.message})
    }
})

export default router