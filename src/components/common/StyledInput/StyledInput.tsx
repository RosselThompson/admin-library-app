import { DateInput, SelectInput, TextInput } from 'react-admin';
import { IStyledInput } from './IStyledInput';

const StyledInput = (props: IStyledInput) => {
  if (props.inputtype === 'date')
    return <DateInput size="small" variant="outlined" fullWidth {...props} />;
  if (props.inputtype === 'select')
    return <SelectInput size="small" variant="outlined" fullWidth {...props} />;

  return <TextInput size="small" variant="outlined" fullWidth {...props} />;
};

export default StyledInput;
