import React, {useEffect, useCallback} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './style';
import {createTable, getDBConnection} from '@database/queries';
import {getStoredUser} from '@helpers/auth';
import {Colors} from '@styles/index';
import RNBootSplash from 'react-native-bootsplash';

const StartUp = ({navigation}) => {
  const startUpCallback = useCallback(async () => {
    const db = await getDBConnection();
    await createTable(db);

    const storedUser = await getStoredUser();
    if (storedUser) {
      navigation.navigate('HackerNews');
    } else {
      navigation.navigate('Auth');
    }
  }, [navigation]);

  useEffect(() => {
    startUpCallback();
    RNBootSplash.hide({fade: true});
  }, [startUpCallback]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={Colors.PRIMARY} />
    </View>
  );
};

export default StartUp;
