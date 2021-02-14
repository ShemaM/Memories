import { Router } from 'express';
import { getPosts, createPosts } from '../controllers/Posts';

const router = Router();

router.get('/', getPosts);
router.get('/', createPosts);

export default router;
