import { Create, required, SimpleForm } from 'react-admin';
import StyledInput from '@/components/common/StyledInput/StyledInput';

const AuthorsCreate = () => {
  return (
    <Create redirect="list">
      <SimpleForm>
        <StyledInput inputtype="text" source="name" validate={[required()]} />
        <StyledInput inputtype="text" source="nationality" />
        <StyledInput inputtype="date" source="birthday" />
      </SimpleForm>
    </Create>
  );
};

export default AuthorsCreate;
