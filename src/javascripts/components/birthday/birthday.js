import util from '../../helpers/util';

import birthdayData from '../../helpers/data/birthdayData';

const birthdayPrintToDom = (uid) => {
  birthdayData.getBirthdayByUid(uid).then((resp) => {
    console.error(resp);
    let domString = '';
    domString += '<h3>birthday</h3>';
    util.printToDom('birthday', domString);
  }).catch(err => console.error('couldnt get birthday', err));
};

export default { birthdayPrintToDom };
