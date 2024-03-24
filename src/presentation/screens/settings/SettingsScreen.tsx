import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useCounterStore} from '../../store/counter-store.ts';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const counterValue = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Counter: ${counterValue}`,
    });
  }, [navigation, counterValue]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {counterValue}</Text>

      <Pressable style={styles.primaryButton} onPress={() => incrementBy(1)}>
        <Text>+1</Text>
      </Pressable>

      <Pressable style={styles.primaryButton} onPress={() => incrementBy(-1)}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
