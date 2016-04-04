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

  /**
   * encargado de renderizar cada scene en el momento que state.currentScene cambie
   * @param  {Object}     route     ruta del scene // no usado para esta implementacion
   * @param  {Component}  navigator componente del navegador
   */
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

  /**
   * helper method para navegar entre scenes, cambie el state del componente forzando el rendering
   * @param  {String}   scene nombre del scene
   */
  navigateTo(scene){
    this.setState({currentScene: scene});
  }
}

//////////////////
// ENTRY POINT  //
//////////////////
AppRegistry.registerComponent('SocialRide', () => SocialRide);
