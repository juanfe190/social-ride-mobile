///////////////
// HOME PAGE //
///////////////
// react native
import React, {
  Dimensions, Image, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, View
}
from 'react-native';
// react native maps
import MapView from 'react-native-maps';
// react native thesidebar
import SideMenu from 'react-native-thesidebar';
// device dimensions
var {height, width} = Dimensions.get('window');

export default class Home extends React.Component {

  constructor(){
    super();
    this.state =  {
      isMenuOpen: false
    };
  }

  render() {

    const menu = <Menu />

    return (
        <SideMenu.AirBnbStyle
          menu={menu}
          isOpen={this.state.isMenuOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <View style = {{flex: 1, backgroundColor: '#fff', backfaceVisibility: 'visible'}}>
            <View style = {homeStyles.topNav}>
              <TouchableOpacity onPress = {this.toggleMenu.bind(this)} >
                <Image style = {homeStyles.menuButton} source={require('./../../assets/img/menu_white.png')} />
              </TouchableOpacity>
              <Text style = {homeStyles.logo} >Social Ride</Text>
              <Image style = {homeStyles.userPhoto} source={require('./../../assets/img/photo3.png')} />
            </View>
            <View style = {homeStyles.searchInputHolder} >
              <TextInput placeholder = "Hey there, where are we going?" style = {homeStyles.searchInput} underlineColorAndroid = "transparent"/>
            </View>
            <MapView
              style={ homeStyles.map }
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </SideMenu.AirBnbStyle>

    );
  }

  toggleMenu(){
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  updateMenuState(isOpen){
    this.setState({ isMenuOpen: isOpen })
  }

}

class Menu extends React.Component {
  render() {
    return (
      <ScrollView scrollsToTop={false} style = {homeStyles.menu}>
        <Text style = {homeStyles.menuItemText}>
          New journey!
        </Text>
        <Text style = {homeStyles.menuItemText}>
          Profile
        </Text>
        <Text style = {homeStyles.menuItemText}>
          Friends
        </Text>
      </ScrollView>
    );
  }
}

const homeStyles = StyleSheet.create({
  topNav: {
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0085ff'
  },
  menuButton: {
    margin: 5,
  },
  logo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
  userPhoto: {
    height: 30,
    width: 30,
    margin: 5
  },
  searchInputHolder: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  searchInput: {
    flex: 0.15,
    textAlign: 'center'
  },
  map:{
    flex: 0.7,
    width: width
  },
  menu: {
    flex: 1,
    margin: 5
  },
  menuItemText: {
    fontSize: 22
  }
});
