import db from '../../config/database';
import {
  fetchAllUserHelper,
  fetchUserHelper,
  fetchUsernameHelper
} from './userSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const fetchAllUserQuery = async () => {
  try {
    const queryString = fetchAllUserHelper();
    const data = await db.queryAsync(queryString);
    success('fetchAllUserQuery - successfully fetched all users ', data);
    return data;
  } catch (err) {
    error('fetchAllUserQuery - error= ', err);
    throw new Error(err);
  }
};

export const fetchUserQuery = async (payload) => {
  try {
    const queryString = fetchUserHelper(payload);
    const data = await db.queryAsync(queryString);
    success('fetchUserQuery - successfully fetched all users ', data);
    return data;
  } catch (err) {
    error('fetchUserQuery - error= ', err);
  }
}


export const fetchSearchUserQuery = async (payload) => {
  try {
    const queryString = fetchUsernameHelper(payload);
    const data = await db.queryAsync(queryString);
    success('fetchSearchUserQuery - successfully fetched all users ', data);
    return data;
  } catch (err) {
    error('fetchSearchUserQuery - error= ', err);
    throw new Error(err);
  }
};
