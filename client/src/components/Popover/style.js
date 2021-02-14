import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  popover_btns: {
    color: theme.palette.primary.main,
    width: '100%',
    height: '80%',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    borderColor: theme.palette.primary.main,
    textTransform: 'upperCase',
    padding: '0.1em',
    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      fontSize: '1.85rem',
    },

    '@media (min-device-width: 900px) and (max-device-width: 1199px)': {
      fontSize: '1.85rem',
    },
    '@media (min-device-width: 1200px)': {
      fontSize: '1.4rem',
    },
  },

  btns_container: {
    height: '150px',
    width: '88vw',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    marginTop: '65vh',
    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      width: '68vw',
    },
    '@media (min-device-width: 900px)': {
      width: '50vw',
    },
    '@media (min-device-width: 1200px)': {
      marginTop: '58vh',
    },
  },
  links: {
    textDecoration: 'none',
    marginRight: '0.9rem',
    width: '42%',
    height: '56%',
    '@media (min-device-width: 600px) and (max-device-width: 899px)': {
      width: '60%',
    },
    '@media (min-device-width: 900px) and (max-device-width: 1199px)': {
      width: '43%',
      height: '66%',
    },
    '@media (min-device-width: 1200px)': {
      width: '15vw',
      height: '12vh',
    },
  },
}));
export default useStyles;
