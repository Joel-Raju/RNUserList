import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {User} from '../../types';

interface Props {
  userData: User;
  onLongPress: (user: User) => any;
}

const UserListItem: React.FC<Props> = ({onLongPress, userData}) => {
  const handleLongPress = () => {
    onLongPress(userData);
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress}>
      <View style={styles.mainWrapper}>
        <Image style={styles.avatar} source={{uri: userData.picture.medium}} />
        <View>
          <View style={styles.userDescription}>
            <Text
              style={
                styles.userName
              }>{`${userData.name.first} ${userData.name.last}`}</Text>
            <Text style={styles.userPhone}>{userData.phone}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: 'rgba(0, 0, 0, .2)',
    borderBottomWidth: 0.5,
  },
  userDescription: {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginEnd: 8,
  },
  userName: {
    fontSize: 16,
  },
  userPhone: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.7)',
  },
});

export default UserListItem;
