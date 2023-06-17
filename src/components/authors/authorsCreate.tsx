import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
} from 'react-admin';

const AuthorsCreate = () => {
  return (
    <Create redirect="list">
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="nationality" />
        <DateInput source="birthday" />
      </SimpleForm>
    </Create>
  );
};

export default AuthorsCreate;
