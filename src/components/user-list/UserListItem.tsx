import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {User} from '../../types';
import {Colors} from '../../utils/colors';

interface Props {
  userData: User;
  onLongPress: (user: User) => any;
}

const UserListItem: React.FC<Props> = ({onLongPress, userData}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.DARK_BG : Colors.LIGHT_BG,
    borderBottomColor: isDarkMode ? Colors.LIGHT_BG : Colors.DARK_BORDER,
  };

  const textStyle = {
    color: isDarkMode ? Colors.LIGHT_TEXT : Colors.DARK_TEXT,
  };

  const handleLongPress = () => {
    onLongPress(userData);
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress}>
      <View style={[styles.mainWrapper, backgroundStyle]}>
        <Image style={styles.avatar} source={{uri: userData.picture.medium}} />
        <View>
          <View style={styles.userDescription}>
            <Text
              style={[
                styles.userName,
                textStyle,
              ]}>{`${userData.name.first} ${userData.name.last}`}</Text>
            <Text style={[styles.userPhone, textStyle]}>{userData.phone}</Text>
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
