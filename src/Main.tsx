import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './presentation/navigators/BottomTabNavigator.tsx';

export const Main = () => {
  return (
   <NavigationContainer>
     <BottomTabNavigator />
   </NavigationContainer>
  );
};
