import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  required,
} from 'react-admin';

const BooksCreate = () => {
  return (
    <Create redirect="list">
      <SimpleForm>
        <ReferenceInput
          source="authorId"
          reference="authors"
          validate={[required()]}
        />
        <TextInput source="title" validate={[required()]} />
        <TextInput source="published_year" />
      </SimpleForm>
    </Create>
  );
};

export default BooksCreate;
