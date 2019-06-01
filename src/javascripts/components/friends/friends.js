import firebase from 'firebase/app';
import 'firebase/auth';

import friendsData from '../../helpers/data/friendsData';

import util from '../../helpers/util';

const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('email').value = '';
      document.getElementById('name').value = '';
      document.getElementById('birthday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
      getFriends(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('no new friend', err));
};

const newFriendButton = () => {
  document.getElementById('birthday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = (friends) => {
  let domString = '<button id="add-friend-button" class="btn btn-secondary">Add Friend</button>';
  friends.forEach((friend) => {
    domString += `<h2>${friend.name}</h2>`;
  });
  util.printToDom('friends', domString);
  document.getElementById('add-friend-button').addEventListener('click', newFriendButton);
};

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      console.error(friends);
      showFriends(friends);
    })
    .catch(err => console.error('no friends', err));
};

export default { getFriends };
