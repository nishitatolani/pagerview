import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightedItemContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  highlightedImage: {
    width: 250,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 14,
  },
  carouselItem: {
    width: 65,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2.5,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  paginationContainer: {},
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: 'blue',
  },
  paginationInactiveDot: {
    backgroundColor: 'lightgray',
  },
});
