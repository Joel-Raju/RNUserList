import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {User} from '../../types';
import {Colors} from '../../utils/colors';
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
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listSeparator: {
    height: 0.5,
    backgroundColor: Colors.DARK_BORDER,
  },
});

export default UserList;
