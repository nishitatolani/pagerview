import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../images/index';
import { styles } from './content.styles';

const Content = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{data.price}</Text>
        </View>
      </View>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.separator} />
      <View>
        <Text style={styles.subtitle}>{data.subTitle}</Text>
        <View style={styles.specsContainer}>
          <Image source={IMAGES.frameOne} style={styles.specsImage} />
          <Text style={styles.specsText}>{data.specsText1}</Text>
          <Image source={IMAGES.frameTwo} style={styles.specsImage} />
          <Text style={styles.specsText}>{data.specsText2}</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{data.buttonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
