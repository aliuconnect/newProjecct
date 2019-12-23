/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Alert
} from 'react-native';
import LoginPage from './Containers/SignInPage'
import SignupPage from './Containers/SignUpPage'
import Route from './Route'
import {Provider} from 'react-redux'
import  store  from './Store'
import Input from './Components/Input';


// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


//   const  _onPress = text => {

//   Alert.alert(text);

// }


const App = () => {
  return (  
      <Provider store={store}>
        <View style={{flex:1}}>
    
          <Route/>
      
        </View>
      </Provider> 
  );
};

export default App;
