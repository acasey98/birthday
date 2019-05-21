import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';

import googleImg from './googleBtn.png';


const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const birthdayPrintToDom = (stuff) => {
  let domString = '';
  domString += `<h3>${stuff}</h3>`;
  util.printToDom(stuff, domString);
};

const authPrintToDom = (stuff) => {
  let domString = '<button id="google-auth" class="btn btn-secondary">';
  domString += `<img src=${googleImg} />`;
  domString += '</button>';
  util.printToDom(stuff, domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authPrintToDom, birthdayPrintToDom };
