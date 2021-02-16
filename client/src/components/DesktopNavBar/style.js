import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'none',
    '@media (min-device-width: 900px)': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: theme.customColors[3],
      color: 'white',
      zIndex: 100,
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '55px',
    },
  },
  logo_container: {
    height: '100%',
    width: '67vw',
    display: 'flex',
    alignItems: 'center',
  },
  login_logout_signup_container: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '20vw',
  },
  scale_img: {
    height: '75%',
    marginBottom: '0.8em',
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  logout_link: {
    textDecoration: 'none',
  },
  logout_btn: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));
export default useStyles;
