import { Router } from 'express';
import { getPosts, createPosts } from '../controllers/Posts';

const router = Router();

router.get('/', getPosts);
router.post('/', createPosts);

export default router;
