import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100%',
    height: '3rem',
    backgroundColor: theme.customColors[3],
    display: 'flex',
    justifyContent: 'space-between',
    '@media (min-device-width: 900px)': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'white',
      zIndex: 100,
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '8.5vh',
      boxShadow: `2px 10px 10px ${theme.customColors[1]}`,
    },
  },
  logo_container: {
    height: '100%',
    width: '70vw',
    display: 'flex',
    alignItems: 'center',
  },
  login_logout_signup_container: {
    display: 'flex',
    color: 'white',
    zIndex: '1000',
    justifyContent: 'flex-end',
    width: '30vw',
    '@media(min-width:600px)': {
      visibility: 'visible',
      marginRight: '40px',
    },
  },
  scale_img: {
    height: '40px',
    marginLeft: '20px',
    '@media(min-width:600px)': {
      marginLeft: '40px',
      marginBottom: '0.8em',
    },
  },
  logo: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  logout_link: {
    textDecoration: 'none',
    cursor: 'pointer',
    marginRight: '20px',
  },
  logout_btn: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));
export default useStyles;
