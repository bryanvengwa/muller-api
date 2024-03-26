import express from 'express';
import { getPost } from '../controllers/feed.mjs';

const router = express.Router();

router.get('/posts', getPost);

export default router;
