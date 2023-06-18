import {
  ListBase,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  EditButton,
  ReferenceInput,
  Pagination,
} from 'react-admin';
import StyledInput from '@/components/common/StyledInput/StyledInput';
import FilterToolbar from '@/components/common/FilterToolbar/FilterToolbar';

const BooksFilter = [
  <StyledInput inputtype="text" label="Search" source="q" alwaysOn />,
  <ReferenceInput source="authorId" reference="authors">
    <StyledInput inputtype="select" source="authorId" />
  </ReferenceInput>,
  <StyledInput
    inputtype="text"
    label="Published Year"
    source="published_year"
  />,
];

const BooksList = () => {
  return (
    <ListBase>
      <FilterToolbar filters={BooksFilter} />
      <Datagrid>
        <TextField source="title" />
        <ReferenceField source="authorId" reference="authors" link={false} />
        <NumberField source="published_year" />
        <EditButton />
      </Datagrid>
      <Pagination />
    </ListBase>
  );
};

export default BooksList;
