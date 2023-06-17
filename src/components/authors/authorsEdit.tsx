import { Edit, SimpleForm, TextInput, DateInput, required } from 'react-admin';

const AuthorsEdit = () => {
  return (
    <Edit redirect="list" >
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="nationality" />
        <DateInput source="birthday" />
      </SimpleForm>
    </Edit>
  );
};

export default AuthorsEdit;
