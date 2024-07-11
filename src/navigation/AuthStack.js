import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import Header from "../components/Header";
import Login from "../screens/auth/Login"
import SignUp from "../screens/auth/SignUp";

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={
        {
          header: ({route}) => (
            <Header title={'Welcome'}></Header>
          )
        }
      }
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />

    </Stack.Navigator>
  )
}

export default AuthStack