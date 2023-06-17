import { LONG_DATE_FORMAT } from '@/constants/dateFormat';
import { List, Datagrid, TextField, DateField } from 'react-admin';

const AuthorsList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="name" />
        <DateField source="birthday" options={LONG_DATE_FORMAT} />
        <TextField source="nationality" />
      </Datagrid>
    </List>
  );
};

export default AuthorsList;
