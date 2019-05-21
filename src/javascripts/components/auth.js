import util from '../helpers/util';

const printToDom = (stuff) => {
  let domString = '';
  domString += `<h3>${stuff}</h3>`;
  domString += '</h3>';
  util.printToDom(stuff, domString);
};

export default { printToDom };
