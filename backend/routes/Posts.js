import { Router } from 'express';
import { getPosts, createPosts, updatePosts } from '../controllers/Posts';

const router = Router();

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePosts);

export default router;
