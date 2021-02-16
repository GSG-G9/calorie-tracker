import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  login_signup_link: {
    textDecoration: 'none',
  },
  login_signup_button: {
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 'bold',
    '@media (min-device-width: 600px)': {
      fontSize: '1.3em',
    },
  },
  login_signup_box: {
    opacity: '0.85',
    '@media (min-device-width: 1000px)': {},
  },
  separated_span: {
    color: 'white',
    fontWeight: 'bold',

    '@media (min-device-width: 900px)': {
      fontSize: '1.3em',
    },
  },
}));

export default useStyles;
