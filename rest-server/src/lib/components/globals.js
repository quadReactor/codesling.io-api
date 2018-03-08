import db from '../../config/database';
import {
  success,
  error
} from '../log';

export const globalQueryHelper = async (payload, query, name) => {
  try {
    const queryString = await query(payload);
    const data = await db.queryAsync(queryString);
    success(`${name} - successfully retrived data ${JSON.stringify(data)}`);
    return data;
  } catch (err) {
    console.error(`${name} - error= ', err`);
  }
};

export const globalController = (query, name) => {
  return async (req, res) => {
    const { url, method } = req;
    let payload;
    if (method === 'POST' || method === 'PUT') {
      payload = req.body;
    } else {
      payload = req.params;
    }
    try {
      const { rows } = await query(payload, url);
      success(`${name} - sucessfully retrieved data ${JSON.stringify(rows)}`);
      return res.status(200).send(rows);
    } catch (err) {
      console.error(`${name} - error= ${err}`);
    }
  }
};
