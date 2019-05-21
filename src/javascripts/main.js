import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase/app';

import apiKeys from './helpers/apiKeys';

import print from './components/auth/auth';

import navbar from './components/myNavbar/myNavbar';

import authData from './helpers/data/authData';


const init = () => {
  console.error('keys', apiKeys.firebaseKeys);
  firebase.initializeApp(apiKeys.firebaseKeys);
  print.authPrintToDom('auth');
  print.birthdayPrintToDom('birthday');
  navbar.navbarEvents();
  authData.checkLoginStatus();
};

init();
