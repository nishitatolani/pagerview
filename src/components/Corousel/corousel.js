import React, { useRef, useEffect } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {styles} from './corousel.styles'

const { width } = Dimensions.get('window');
const itemWidth = 60 + 5; // Image width + margin

const CarouselComponent = ({ images }) => {
  const carouselRef = useRef(null);
  const initialActiveIndex = Math.floor(images.length / 2);
  const [activeIndex, setActiveIndex] = React.useState(initialActiveIndex);

  useEffect(() => {
    // Scroll to the initial active index when the component mounts
    if (carouselRef.current) {
      carouselRef.current.snapToItem(activeIndex);
    }
  }, []);

  const getItemLayout = (data, index) => ({
    length: itemWidth,
    offset: itemWidth * index,
    index,
  });

  const renderHighlightedItem = () => {
    return (
      <View style={styles.highlightedItemContainer}>
        <Image source={images[activeIndex]} style={styles.highlightedImage} />
      </View>
    );
  };

  const renderCarouselItem = ({ item, index }) => {
    // Calculate opacity based on the position of the item relative to the active index
    const opacity = index === activeIndex ? 1 : 0.5;
    // Calculate scale based on the position of the item relative to the active index
    const scale = activeIndex === index ? 1 : 0.8;

    return (
      <View style={styles.carouselItem}>
        <Image
          source={item}
          style={[styles.image, { opacity, transform: [{ scale }] }]}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHighlightedItem()}
      <Carousel
        ref={carouselRef}
        layout="default"
        data={images}
        renderItem={renderCarouselItem}
        sliderWidth={width}
        itemWidth={itemWidth}
        inactiveSlideScale={1}
        onSnapToItem={(index) => setActiveIndex(index)}
        loop={false} // Disable looping
        initialScrollIndex={activeIndex} // Set initial scroll index
        getItemLayout={getItemLayout} // Specify getItemLayout function
      />
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={images.length}
          activeDotIndex={activeIndex}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={carouselRef}
          tappableDots={false}
        />
      </View>
    </View>
  );
};

export default CarouselComponent;
