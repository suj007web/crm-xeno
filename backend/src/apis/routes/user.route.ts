import { Router } from 'express';
import { body } from 'express-validator';
import { checkError, handleError } from '../../utils/response';
import { createUser } from '../controllers/user.controller';

const router = Router();

router.post(
  '/create',
  [
    body('token').isString().notEmpty().withMessage('token is required'),
  ],
  checkError,
  handleError(createUser)
);

export default router;
