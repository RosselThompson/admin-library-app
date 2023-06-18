import { Edit, SimpleForm, required } from 'react-admin';
import StyledInput from '@/components/common/StyledInput/StyledInput';

const AuthorsEdit = () => {
  return (
    <Edit redirect="list">
      <SimpleForm>
        <StyledInput inputtype="text" source="name" validate={[required()]} />
        <StyledInput inputtype="text" source="nationality" />
        <StyledInput inputtype="date" source="birthday" />
      </SimpleForm>
    </Edit>
  );
};

export default AuthorsEdit;
