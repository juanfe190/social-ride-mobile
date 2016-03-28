//////////////////////////////
// INDEX (CLIENT - ANDROID) //
//////////////////////////////
// react native
import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';
// scenes
import Login from './scenes/android/login.android.js';
import Home from './scenes/android/home.android.js';

class SocialRide extends Component {

  constructor(){
    super();
    this.state = {
      currentScene: 'login'
    };
  }

  render() {
    return (
      <Navigator
        initialRoute = {{name: 'App root', index: 0}}
        renderScene = {this.renderScene.bind(this)}
        configureScene = {(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
      />
    );
  }

  renderScene(route, navigator){
    
    console.log(route);
    switch (this.state.currentScene) {
      case 'login':
        return <Login navigator = {navigator} navigateTo = {this.navigateTo.bind(this)}/>;
        break;
      case 'home':
        return <Home />;
        break;
      default:
    }
  }

  navigateTo(scene){
    this.setState({currentScene: scene});
  }
}

//////////////////
// ENTRY POINT  //
//////////////////
AppRegistry.registerComponent('SocialRide', () => SocialRide);
