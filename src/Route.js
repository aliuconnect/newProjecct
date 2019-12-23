import React from 'react';
import {} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';
import SignIn from './../src/Containers/SignInPage'
import SignUp from './Containers/SignUpPage'
import Home from './Containers/Home'
import Todo from './Todo';
import Profiles from './Profiles'
import Input from './Containers/Input'


const Routes = () =>{

return(

<Router>
<Scene key="root">

    <Scene key="login" component={SignIn} title="SignIn" initial/>
    <Scene key="signup" component={SignUp} title="Signup" />
    <Scene key="home" component={Home} title="Home" />
    <Scene key="Todo" component={Todo} title="Todo" />
    <Scene key="profiles" component={Profiles} title="Profile" />
    <Scene key="input" component={Input} title="Input"  />

</Scene>

</Router>

)

}
export default Routes;