import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav_icons: {
    width: '11.5vw',
    height: '12vh',

    '@media (min-device-width: 900px) and (max-device-width: 1199px)': {
      height: '7.4vh',
      width: '6.6vw',
    },
    '@media (min-device-width: 1200px)': {
      height: '7.4vh',
      width: '3.6vw',
    },
  },
  navbar_appBar: {
    bottom: 0,
    top: '89%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-device-width: 900px) and (max-device-width: 1200px)': {
      top: '26%',
      width: '9%',
      height: '37vh',
      borderRadius: '5%',
    },
    '@media (min-device-width: 1200px) and (max-device-width: 1799px)': {
      top: '26%',
      borderRadius: '5%',
      width: '5.3vw',
      height: '40vh',
    },
  },
  navbar_toolBar: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',

    '@media (min-device-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '25%',
    },
  },
}));
export default useStyles;
