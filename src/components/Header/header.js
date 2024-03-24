import React from 'react';
import { Image, View } from 'react-native';
import IMAGES from '../../images/index';
import {styles} from './header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.backIcon} style={styles.icon} />
      <Image source={IMAGES.infoIcon} style={styles.icon} />
    </View>
  );
};

export default Header;
