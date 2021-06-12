import {User} from '../types';

export const sortUsersByName = (users: User[]) =>
  users.sort((u1: User, u2: User) =>
    u1.name.first.localeCompare(u2.name.first),
  );
