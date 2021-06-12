import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {UserList} from '../components';
import {getUsersRequest} from '../api';
import {User} from '../types';
import {OverlayContent, UserInfoCard, useOverlay} from '../components';
import {sortUsersByName} from '../utils/userUtils';
import {Colors} from '../utils/colors';

const Contacts: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<User>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : Colors.LIGHT_BG,
    borderBottomColor: isDarkMode ? Colors.LIGHT_BG : Colors.DARK_BORDER,
  };

  const textStyle = {
    color: isDarkMode ? Colors.LIGHT_TEXT : Colors.PRIMARY_COLOR,
  };

  const dismissUserDetailOverlay = () => {
    setOverlayVisible(false);
    setActiveUser(undefined);
  };

  const {setVisible: setOverlayVisible} = useOverlay(dismissUserDetailOverlay);

  useEffect(() => {
    async function getUsers() {
      const data = await getUsersRequest();
      const sorted = sortUsersByName(data);
      setUsers(sorted);
    }

    getUsers();
  }, []);

  const handleLongPress = (selectedUser: User) => {
    setActiveUser(selectedUser);
    setOverlayVisible(true);
  };

  return (
    <View>
      <View style={[styles.header, backgroundStyle]}>
        <Text style={[styles.title, textStyle]}>Contacts</Text>
      </View>
      <UserList users={users} onLongPressUser={handleLongPress} />

      {activeUser && (
        <OverlayContent>
          <UserInfoCard userData={activeUser} />
        </OverlayContent>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    height: 60,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Contacts;
