import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.30)',
  },
  container: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center"
  },
  otherHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.50)',
    height: '50@ms',
  },
  headrtxt: {
    color: 'white',
  },
  otherImageContainer: {
    borderRadius: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '30@ms',
    marginTop: '10@ms',
    marginBottom: '30@ms',
    elevation: 5,
  },
  otherImage: {
    height: '400@ms',
    width: '330@ms',
    borderRadius: '5@ms',
    resizeMode: 'stretch',
  },
  otherMainView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: '20@ms'
  },
  mainHeading: {
    color: 'white',
    fontSize: '35@ms',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainPara: {
    fontSize: '20@ms',
    color: 'black',
  },
  desc: {
    marginHorizontal: '9@ms',
    width: '95%',
    backgroundColor: 'rgba(255,255,255,0.90)',
    borderWidth: '1@ms',
    borderColor: 'white',
    padding: '15@ms',
    borderRadius: '20@ms',
    marginBottom: '35@ms'
  },
  othersProtect: {
    fontSize: '27@ms',
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: '10@ms',
    marginBottom: '20@ms',
    padding: '10@ms'
  },
});

export default styles;
