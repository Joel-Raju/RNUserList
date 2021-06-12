import moment from 'moment';
import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text, useColorScheme} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {User} from '../../types';
import {Colors} from '../../utils/colors';

interface Props {
  userData: User;
}

const UserInfoCard: React.FC<Props> = ({userData}) => {
  const top = useSharedValue(150);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : Colors.LIGHT_BG,
  };

  const textStyle = {
    color: isDarkMode ? Colors.LIGHT_TEXT : Colors.DARK_TEXT,
  };

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      margin: 8,
      padding: 8,
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 2,
      alignItems: 'center',
      transform: [{translateY: top.value}],
    };
  });

  useEffect(() => {
    top.value = withTiming(0, {duration: 200});
  }, [top]);

  return (
    <Animated.View style={[animatedContainerStyle, backgroundStyle]}>
      <Image style={styles.avatar} source={{uri: userData.picture.large}} />
      <View style={styles.description}>
        <View style={styles.descriptionHeader}>
          <Text
            style={[
              styles.titleLabel,
              textStyle,
            ]}>{`${userData.name.first} ${userData.name.last}`}</Text>
          <Text style={textStyle}>Ph: {userData.cell}</Text>
        </View>
        <View style={styles.descriptionBody}>
          <View style={styles.descriptionBodyRow}>
            <Text style={[styles.bodyLabel, textStyle]}>
              Gender: {userData.gender}
            </Text>
            <Text style={[styles.bodyLabel, textStyle]}>
              DOB: {moment(userData.dob.date).format('DD-MMM-YYYY')}
            </Text>
          </View>
          <View style={styles.descriptionBodyRow}>
            <Text style={[styles.bodyLabel, textStyle]}>
              City: {userData.location.state}
            </Text>
            <Text style={[styles.bodyLabel, textStyle]}>{userData.email}</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
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
