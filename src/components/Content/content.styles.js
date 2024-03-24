import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  titleContainer: {
    width: '35%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  priceContainer: {
    borderColor: '#314FF6',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  specsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  specsImage: {
    width: 50,
    height: 50,
  },
  specsText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'white',
    alignSelf: 'center',
    width: 100,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#314FF6',
    borderRadius: 14,
    paddingHorizontal: 25,
    paddingVertical: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
