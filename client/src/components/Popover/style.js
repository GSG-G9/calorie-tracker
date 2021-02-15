import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover_btns: {
    width: '80px',
    height: '50px',
    '@media (min-device-width: 600px)': {
      color: theme.palette.primary.main,
      width: '180px',
      height: '70px',
      fontSize: '24px',
      fontWeight: 'bold',
      borderColor: theme.palette.primary.main,
      textTransform: 'upperCase',
      padding: '0 0px',
      margin: '7px',
    },
  },

  btns_container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60px',
    width: '200px',
    margin: '0 auto',
    bottom: '15%',
    position: 'fixed',
    left: 'calc(50% - 100px)',
    '@media (min-device-width: 600px)': {
      height: '150px',
      width: '400px',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      margin: '0 auto',
      bottom: '0',
      position: 'fixed',
      left: 'calc(50% - 200px)',
    },
  },
  links: {
    textDecoration: 'none',
  },
}));
export default useStyles;
