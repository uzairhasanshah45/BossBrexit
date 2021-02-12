import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;


export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  mainView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.30)',
  },
  header: {
    justifyContent: 'center',
    top: '90@ms',
    backgroundColor: 'rgba(140, 0, 0,0.50)',
    // backgroundColor: 'rgba(255,255,255,0.20)',
    width: '75%',
    borderRadius: 10,
    elevation: 20
  },
  headerText: {
    fontSize: '45@ms',
    fontWeight: 'bold',
    color: '#d9d7d7',
    padding: '10@ms',
  },
  subheaderText: {
    fontSize: '16@ms',
    color: 'white',
    textAlign: 'center',
    marginHorizontal: '70@ms',
  },
  animation: {
    // height: '200@ms',
    width: '200@ms',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  animation2: {
    height: '400@ms',
    width: '400@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation3: {
    height: '250@ms',
    width: '250@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  instruction: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructiontext: {
    fontSize: '15@ms',
    color: 'white',
  },
  instructionTextTitle: {
    margin: '8@ms',
    color: 'white',
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  buttonBox: { flex: 1, justifyContent: 'center' },
  button: {
    height: '55@ms',
    width: '140@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10@ms',
    borderWidth: '1@ms',
    borderColor: '#999999',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: '30@ms'
  },
  txt: {
    fontSize: '16@ms',
    color: '#fff'
  },
});
