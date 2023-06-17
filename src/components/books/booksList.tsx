import { List, Datagrid, TextField, ReferenceField, NumberField } from 'react-admin';

const BooksList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <ReferenceField source="authorId" reference="authors" />
        <NumberField source="published_year" />
      </Datagrid>
    </List>
  );
};

export default BooksList;
