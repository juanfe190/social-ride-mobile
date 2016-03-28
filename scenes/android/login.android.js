////////////////
// LOGIN PAGE //
////////////////
// react native
import React, {
  Component,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          Social Ride
        </Text>
        <TextInput style={styles.loginInput} value="Nombre de usuario" />
        <TextInput style={styles.loginInput} value="Contraseña" />
        <TouchableHighlight onPress = {this.login.bind(this)}>
          <View style = {styles.loginButton}>
            <Text style = {styles.loginButtonText}>LOGIN</Text>
          </View>
        </TouchableHighlight>
        <Text style = {{fontSize: 12, marginTop: 15}}>Forgot password?</Text>
        <Text style ={{fontSize: 12, marginTop: 15}}>Or</Text>
        <View style = {styles.socialLoginWrapper}>
          <TouchableHighlight onPress = {this.onPressButton.bind(this)}>
            <View style = {styles.facebookButton}>
              <Text style = {{textAlign: 'center', color: '#fff'}}>Facebook</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress = {this.onPressButton.bind(this)}>
            <View style = {styles.twitterButton}>
              <Text style = {{textAlign: 'center', color: '#fff'}}>Twitter</Text>
            </View>
          </TouchableHighlight>
        </View>
        <Text style ={{fontSize: 12, marginTop: 15}}>
          Not yet registered? SIGN UP
        </Text>
      </View>
    );
  }

  login(){
    this.props.navigateTo('home');
  }

  onPressButton(){
    console.log('Hey bro?');
  }
}

////////////
// STYLES //
////////////
const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    color: '#0085ff'
  },
  loginInput: {
    height: 40,
    width: 200,
    textAlign: 'center',
    color: '#d0d6d8'
  },
  loginButton: {
    borderWidth: 1,
    borderColor: '#0085ff',
    borderStyle: 'solid',
    padding: 10,
    width: 200,
    marginTop: 10
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#0085ff'
  },
  socialLoginWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300
  },
  facebookButton: {
    width: 125,
    padding: 10,
    backgroundColor: '#3b5998'
  },
  twitterButton: {
    width: 125,
    padding: 10,
    backgroundColor: '#3cf'
  }
});
