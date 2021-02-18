import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  text: { width: '40%', fontWeight: 400 },
  header: { fontWeight: 800 },
  icon: { cursor: 'pointer' },
  containerItem: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    border: '1px solid black',
    borderRadius: '1rem',
    padding: '0.5rem',
    '@media(minWidth:600px)': {
      width: '40vw',
    },
  },
}));

export default useStyle;
