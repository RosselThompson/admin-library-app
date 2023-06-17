import { LONG_DATE_FORMAT } from '@/constants/dateFormat';
import { List, Datagrid, TextField, DateField, EditButton } from 'react-admin';

const AuthorsList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="name" />
        <DateField source="birthday" options={LONG_DATE_FORMAT} />
        <TextField source="nationality" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default AuthorsList;
