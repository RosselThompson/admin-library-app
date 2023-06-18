import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  EditButton,
} from 'react-admin';

const BooksList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="title" />
        <ReferenceField source="authorId" reference="authors" link={false}/>
        <NumberField source="published_year" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default BooksList;
