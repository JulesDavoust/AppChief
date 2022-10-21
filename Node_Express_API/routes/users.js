import express, { json } from 'express';
import { createUser, getUsers, /*refreshToken, loginUser, authenticateToken,*/  getUser, deleteUser, patchUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUser);

//router.post('/refreshToken', refreshToken);

//router.post('/login', loginUser);

router.get('/:email', /*authenticateToken,*/ getUser);

router.delete('/:email', deleteUser);

router.patch('/:email', patchUser);

export default router;