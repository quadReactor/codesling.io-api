import db from '../../config/database';
import {
  signUpHelper,
  loginHelper
} from './authSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const signUpQuery = async (body) => {
  try {
    const queryString = signUpHelper(body);
    const data = await db.queryAsync(queryString);
    // db.release();
    success('signUpQuery - successfully retrieved data ', JSON.stringify(data));
    return data;
  } catch (err) {
    console.error('signUpQuery - error= ', err);
  }
};

export const loginQuery = async (body) => {
  try {
    const queryString = loginHelper(body);
    const data = await db.queryAsync(queryString);
    // db.end();
    success('loginQuery - successfully retrieved data ', data);
    return data;
  } catch (err) {
    console.error('loginQuery - error= ', err);
  }
}
