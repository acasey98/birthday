import 'bootstrap';
import '../styles/main.scss';
import print from './components/auth';

const init = () => {
  print.printToDom('auth');
  print.printToDom('birthday');
};

init();
