import React from 'react';
import {View, FlatList} from 'react-native';
import {User} from '../../types';
import UserListItem from './UserListItem';

interface Props {
  users: User[];
  onLongPressUser: (user: User) => any;
}

const UserList: React.FC<Props> = ({users, onLongPressUser}) => {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.login.sha256}
        data={users}
        renderItem={({item}) => (
          <UserListItem userData={item} onLongPress={onLongPressUser} />
        )}
      />
    </View>
  );
};

export default UserList;
