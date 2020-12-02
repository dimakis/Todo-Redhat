import { makeStyles } from '@material-ui/core/styles';
import sizes from '../helpers/sizes';

export default makeStyles({
  App: {
    background:'#9adcfb',
    width: '80%',
    margin: '0 auto',
    [sizes.down('md')]: {
      width: '100%'
    },
    [sizes.down('xs')]: {
      width: '90%'
    }
  },
  header: {
    textAlign: 'center',
    '& h1': {
      color: 'white',
      margin: '5vh 0 0 0',

      fontSize: '5rem',
      fontWeight: '300',
      '& span': {
        fontWeight: '700'
      },
      [sizes.down('xs')]: {
        fontSize: '4.5rem'
      }
    },
    '& h2': {
      color: 'white',
      fontSize: '1.5rem',
      fontWeight: '300',
      [sizes.down('xs')]: {
        fontSize: '0.6rem'
      }
    }
  }
});

