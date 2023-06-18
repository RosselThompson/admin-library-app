import { LONG_DATE_FORMAT } from '@/constants/dateFormat';
import {
  ListBase,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  Pagination,
} from 'react-admin';
import FilterToolbar from '@/components/common/FilterToolbar/FilterToolbar';
import StyledInput from '@/components/common/StyledInput/StyledInput';

const AuthorsFilter = [
  <StyledInput inputtype='text' label="Search" source="q" alwaysOn />,
  <StyledInput inputtype='text' label="Nationality" source="nationality" />,
  <StyledInput inputtype='date' label="Birthday" source="birthday" />,
];

const AuthorsList = () => {
  return (
    <ListBase>
      <FilterToolbar filters={AuthorsFilter} />
      <Datagrid>
        <TextField source="name" />
        <DateField source="birthday" options={LONG_DATE_FORMAT} />
        <TextField source="nationality" />
        <EditButton />
      </Datagrid>
      <Pagination />
    </ListBase>
  );
};

export default AuthorsList;
