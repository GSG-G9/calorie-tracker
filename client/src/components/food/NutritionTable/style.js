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
  },
  nutritionFact: {
    height: '200px',
    overflow: 'auto',
  },
}));

export default useStyle;
