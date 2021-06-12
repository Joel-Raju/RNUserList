import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {UserList} from '../components';
import {getUsersRequest} from '../api/users';
import {User} from '../types';
import {sortUsersByName} from '../utils/userUtils';
import {OverlayContent, UserInfoCard} from '../components';
import {useOverlay} from '../components/overlay';

const Contacts: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<User>();

  const dismissUserDetailOverlay = () => {
    setOverlayVisible(false);
    setActiveUser(undefined);
  };

  const {setVisible: setOverlayVisible} = useOverlay(
    'Contacts.tsx',
    dismissUserDetailOverlay,
  );

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
      <UserList users={users} onLongPressUser={handleLongPress} />

      {activeUser && (
        <OverlayContent>
          <UserInfoCard userData={activeUser} />
        </OverlayContent>
      )}
    </View>
  );
};

export default Contacts;
