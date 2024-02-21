import React, { Component } from 'react';
import { StyleSheet, Switch, View, Text, Image } from 'react-native';

export default class App extends Component {
  state = {
    switchValue: false
  }

  render() {
    const { switchValue } = this.state;
    return (
      <View style={[styles.container, switchValue ? styles.containerOn : styles.containerOff]}>
        {/* Image container */}
        <View style={styles.imageContainer}>
          <Text style={[styles.textStyle, switchValue ? styles.textOn : styles.textOff]}>AMC MP1</Text>
          <Image source={switchValue ? require('./assets/bulb-ON.jpg') : require('./assets/bulb-OFF.jpg')} style={styles.imageStyle} />
          {/* Switch component */}
          <Switch
            value={switchValue}
            onValueChange={(switchValue) => this.setState({ switchValue })}
          />
        </View>
        {/* Text to indicate switch state */}
        <Text style={[styles.aboutTextStyle, switchValue ? styles.textOn : styles.textOff]}>{switchValue ? 'on' : 'off'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOn: {
    backgroundColor: 'yellow',
  },
  containerOff: {
    backgroundColor: 'black',
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3498db',
  },
  textOn: {
    color: 'black',
  },
  textOff: {
    color: 'white',
  },
  aboutTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3498db',
    marginBottom: 20
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20, // Adjusted marginTop to position text above the image
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginBottom: 10, // Added marginBottom to create space between the image and the switch
  },
});