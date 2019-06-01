import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getRsvpsByBirthdayId = birthdayId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/rsvps.json?orderBy="birthdayId"&equalTo="${birthdayId}"`)
    .then((results) => {
      const rsvpResults = results.data;
      const rsvps = [];
      Object.keys(rsvpResults).forEach((rsvpId) => {
        rsvpResults[rsvpId].id = rsvpId;
        rsvps.push(rsvpResults[rsvpId]);
      });
      resolve(rsvps);
    })
    .catch(err => reject(err));
});

const addRsvp = rsvp => axios.post(`${firebaseUrl}/rsvps.json`, rsvp);

const editRsvp = (rsvpId, rsvpObject) => axios.put(`${firebaseUrl}/rsvps/${rsvpId}.json`, rsvpObject);

export default { getRsvpsByBirthdayId, addRsvp, editRsvp };