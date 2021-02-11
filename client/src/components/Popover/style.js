import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover_btns: {
    color: theme.palette.primary.main,
    width: '230px',
    height: '70px',
    fontSize: '28px',
    fontWeight: 'bold',
    borderColor: theme.palette.primary.main,
    textTransform: 'upperCase',
    padding: '10px',
    margin: '7px',
    '@media (min-device-width: 900px)': {
      width: '220px',
      height: '70px',
      fontSize: '29px',
    },
  },

  btns_container: {
    height: '150px',
    width: '360px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '77%',
    '@media (min-device-width: 600px) and (max-device-width: 900px) ': {
      marginTop: '66%',
    },
    '@media (min-device-width: 900px) and (max-device-width: 1200px) ': {
      marginTop: '55%',
    },
    '@media (min-device-width: 1200px) ': {
      marginTop: '50%',
    },
  },
  links: {
    textDecoration: 'none',
  },
}));
export default useStyles;
