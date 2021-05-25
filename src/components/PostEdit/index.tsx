import { DateInput, Edit, SimpleForm, TextInput} from 'react-admin';

function PostEdit(props: any) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline label="description" source="body" />
        <DateInput label="published" source="publishedAt"/>
      </SimpleForm>
    </Edit>
  );
}

export default PostEdit;
