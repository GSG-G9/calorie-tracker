import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icons: {
    width: 50,
    height: 50,
    color: theme.customColors.white,
    '@media (min-device-width: 900px) and (max-device-width: 1200px)': {
      width: 36,
      height: 36,
    },
    '@media (min-device-width: 1200px) and (max-device-width: 1800px)': {
      width: 40,
      height: 40,
    },
    '@media (min-device-width: 1800px)': {
      width: 50,
      height: 50,
    },
  },

  container: {
    '@media (min-device-width: 900px)': {
      flexDirection: 'column',
    },
  },
  item: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-device-width: 900px) and (max-device-width: 1200px)': {
      justifyContent: 'center',
      width: '120%',
    },
  },
  appBar: {
    bottom: 0,
    top: '89%',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-device-width: 900px) and (max-device-width: 1200px)': {
      top: '26%',
      width: '7%',
      height: '38%',
      borderRadius: '5%',
    },
    '@media (min-device-width: 1200px)': {
      top: '26%',
      width: '5%',
      height: '35%',
      borderRadius: '5%',
    },
  },
  toolBar: {
    width: '80%',
  },
}));
export default useStyles;
