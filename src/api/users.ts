import {User} from '../types';

const API_ENDPOINT = 'https://randomuser.me/api?results=20';

export const getUsersRequest = async (): Promise<Array<User>> => {
  try {
    const resp = await fetch(API_ENDPOINT);
    const {results} = await resp.json();
    return results;
  } catch (err) {
    return [];
  }
};
