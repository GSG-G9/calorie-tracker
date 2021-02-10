import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav_icons: {
    width: 80,
    height: 80,
    color: theme.customColors.white,
    '@media (min-device-width: 900px) and (max-device-width: 1800px)': {
      width: 70,
      height: 70,
    },

    '@media (min-device-width: 1800px)': {
      width: 80,
      height: 80,
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
      height: '33%',
      borderRadius: '5%',
    },
    '@media (min-device-width: 1200px)': {
      top: '26%',
      width: '7%',
      height: '32%',
      borderRadius: '5%',
    },
  },
  navbar_toolBar: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    // backgroundColor: 'red',

    '@media (min-device-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: '25%',
    },
  },
}));
export default useStyles;
