import util from '../../helpers/util';

import birthdayData from '../../helpers/data/birthdayData';

const birthdayPrintToDom = (uid) => {
  birthdayData.getBirthdayByUid(uid).then((birthday) => {
    let domString = '';
    domString += `<h3>${birthday.date}</h3>`;
    domString += `<img src=${birthday.imageUrl} alt="birthday location"/>`;
    domString += `<p>${birthday.location} @ ${birthday.time}`;
    util.printToDom('birthday', domString);
  }).catch(err => console.error('couldnt get birthday', err));
};

export default { birthdayPrintToDom };
