import db from '../../config/database';
import {
  fetchAllUserQuery,
  fetchSearchUserQuery
} from './userQueries';
import {
  success,
  error
} from '../../lib/log';

export const fetchAllUserController = async (req, res) => {
  try {
    const data = await fetchAllUserQuery();
    success('fetchAllUserController - successfully fetched data ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchAllUserController - error= ', error);
    throw new Error(err);
  }
};

export const fetchSearchUserController = async (req, res) => {
  try {
    const data = await fetchSearchUserQuery(req.params.username);
    success('fetchSearchUserController - successfully fetched data ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchSearchUserfetchSearchUserControllerQuery - error= ', error);
    throw new Error(err);
  }
};