import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store.ts';
import {useCounterStore} from '../../store/counter-store.ts';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  const counterValue = useCounterStore(state => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>Count Value:{counterValue}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Carlos Carvajal'})}>
        <Text>Change Name</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({email: 'cxcarvaj@gmail.com'})}>
        <Text>Change Email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Jhon Doe', 'jhondoe@google.com')}>
        <Text>Return to initial state</Text>
      </Pressable>
    </View>
  );
};
