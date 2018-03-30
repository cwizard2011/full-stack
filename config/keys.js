import devKeys from './dev';
import prodKeys from './prod';

if (process.env.NODE_ENV === 'production'){
  export default prodKeys;
} else {
  export default devKeys;
}