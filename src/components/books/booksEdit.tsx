import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  required,
} from 'react-admin';

const BooksEdit = () => {
  return (
    <Edit redirect="list">
      <SimpleForm>
        <ReferenceInput source="authorId" reference="authors" />
        <TextInput source="title" validate={[required()]} />
        <TextInput source="published_year" />
      </SimpleForm>
    </Edit>
  );
};

export default BooksEdit;
