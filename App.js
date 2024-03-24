import React from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import PagerView from 'react-native-pager-view';
import { LinearGradient } from 'expo-linear-gradient';

import PageLayout from './src/components/PagerView/pagerView';
import IMAGES from './src/images/index';
import { data1, data2, images1, images2 } from './src/lib/data';

const App = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#252A37', '#21283B']}
        locations={[0.43, 1]}
        style={styles.container}>
        <PagerView style={styles.container} initialPage={0}>
          <ImageBackground
            source={IMAGES.welcomeImage}
            style={styles.image}></ImageBackground>
          <SafeAreaView style={styles.container} key="2">
            <PageLayout images={images1} data={data1} />
          </SafeAreaView>
          <SafeAreaView style={styles.container} key="3">
            <PageLayout images={images2} data={data2} />
          </SafeAreaView>
        </PagerView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
});

export default App;
