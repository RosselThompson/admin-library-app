import {
  Edit,
  SimpleForm,
  ReferenceInput,
  required,
} from 'react-admin';
import StyledInput from '@/components/common/StyledInput/StyledInput';

const BooksEdit = () => {
  return (
    <Edit redirect="list">
      <SimpleForm>
      <ReferenceInput source="authorId" reference="authors">
          <StyledInput inputtype="select" source="authorId" validate={[required()]} />
        </ReferenceInput>
        <StyledInput inputtype="text" source="title" validate={[required()]} />
        <StyledInput inputtype="text" source="published_year" />
      </SimpleForm>
    </Edit>
  );
};

export default BooksEdit;
