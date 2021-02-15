import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  nutritionTable: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: '50px',
  },
  nutritionValues: {
    fontSize: '20px',
    fontWeight: '500',
    textTransform: 'Capitalize',
  },
  InputField: {
    width: '50%',
    '@media(min-width:600px)': {
      width: '80%',
    },
  },
  nutritionFact: {
    height: '200px',
    overflow: 'auto',
  },
  media: {
    maxWidth: '100%',
    maxHeight: '80vh',
  },
  container: {
    height: '50vh',
  },
}));

export default useStyle;
