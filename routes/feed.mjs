import express from 'express';
import { getPost, createPost } from '../controllers/feed.mjs';

const router = express.Router();

router.get('/posts', getPost);

router.post('/posts', createPost);

export default router;
