import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;


export const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    // backgroundColor: '#960000',
    backgroundColor: 'rgba(0,0,0,0.30)',
  },
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
  homeHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
    height: '50@ms',
  },
  headrtxt: {
    color: 'white',
  },
  txt: {
    color: 'white'
  },
  homeMainView: {
    alignItems: "center",
    justifyContent: "center"
  },
  mainHeading: {
    color: 'white',
    fontSize: '50@ms',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20@ms'
  },
  mainPara: {
    fontSize: '20@ms',
    color: 'white',
    textAlign: 'center',
    marginHorizontal: '20@ms',
    backgroundColor: 'rgba(0,0,0,0.50)',
    borderWidth: '1@ms',
    borderColor: 'white',
    padding: '10@ms',
    borderRadius: '20@ms'
  },
  buttonView: {
    height: '40@ms',
    width: '60%',
    marginTop: '10@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10@ms',
    backgroundColor: 'transparent',
    borderWidth: '1@ms',
    borderColor: 'white',
  },
  buttonText: {
    fontSize: '16@ms',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  animationBox: {
    alignItems: 'center',
    top: '15@ms'
  },
  animation: {
    height: '150@ms',
    width: '300@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
