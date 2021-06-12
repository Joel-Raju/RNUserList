import moment from 'moment';
import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {User} from '../../types';

interface Props {
  userData: User;
}

const UserInfoCard: React.FC<Props> = ({userData}) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{uri: userData.picture.large}} />
    <View style={styles.description}>
      <View style={styles.descriptionHeader}>
        <Text
          style={
            styles.titleLabel
          }>{`${userData.name.first} ${userData.name.last}`}</Text>
        <Text>Ph: {userData.cell}</Text>
      </View>
      <View style={styles.descriptionBody}>
        <View style={styles.descriptionBodyRow}>
          <Text style={styles.bodyLabel}>Gender: {userData.gender}</Text>
          <Text style={styles.bodyLabel}>
            DOB: {moment(userData.dob.date).format('DD-MMM-YYYY')}
          </Text>
        </View>
        <View style={styles.descriptionBodyRow}>
          <Text style={styles.bodyLabel}>City: {userData.location.state}</Text>
          <Text style={styles.bodyLabel}>{userData.email}</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 2,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    width: '100%',
    alignItems: 'center',
  },
  descriptionHeader: {
    borderBottomColor: 'rgba(0,0,0, 0.3)',
    borderBottomWidth: 0.5,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 8,
    marginBottom: 8,
  },
  descriptionBody: {
    width: '100%',
  },
  descriptionBodyRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  titleLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bodyLabel: {
    fontSize: 16,
  },
});

export default UserInfoCard;
