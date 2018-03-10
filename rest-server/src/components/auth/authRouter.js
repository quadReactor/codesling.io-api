import express from 'express';
import validate from 'express-validation';
import passport from 'passport';

import {
  signUpController,
  loginController
} from './authControllers';
import formValidation from '../../middleware/validation/request-validation';
import '../../middleware/validation/passport';
import { joiErrorHandler } from '../../middleware/validation/error-handler'

const router = express.Router();

router.route('/signup')
  .post(validate(formValidation.signUp), joiErrorHandler, signUpController);

router.route('/login')
  .post(validate(formValidation.login), joiErrorHandler, passport.authenticate('local', { session: false}), loginController);

export default router;
