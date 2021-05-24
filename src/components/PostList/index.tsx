import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton
} from 'react-admin';

function PostList(props: any) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" label="Identificacao"/>
        <TextField source="title" label="Titulo"/>
        <TextField source="body" label="Descricao"/>
        <DateField source="publishedAt" label="Publicacao" locales="pt-BR"/>
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
}

export default PostList;
