import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase/app';

import apiKeys from './helpers/apiKeys';

import print from './components/auth/auth';

const init = () => {
  console.error('keys', apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  print.authPrintToDom('auth');
  print.birthdayPrintToDom('birthday');
};

init();
