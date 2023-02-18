import axios from 'axios';

const HTTP = axios.create({
    baseURL: "http://localhost:5000"
})

export const login = async (formData)=> await HTTP.post('/users/signin', formData);

export const register = async (formData)=> await HTTP.post('/users/signup', formData);

export const singleUser = async (user)=> await HTTP.post('/users/singleuser', user)

export const followFetch = async (username, follower)=> await HTTP.post('/users/follow', username, follower)

export const unfollowFetch = async (username, follower)=> await HTTP.post('/users/unfollow', username, follower)

export const addPost = async (postData)=> await HTTP.post('/posts', postData);

export const allPosts = async ()=> await HTTP.get('/posts');

export const userPosts = async (username)=> await HTTP.post('/posts/userposts', username);

export const postDetailFetch = async (_id)=> await HTTP.post('/posts/postdetail', _id);
