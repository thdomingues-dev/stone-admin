import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Filter,
  TextInput
} from 'react-admin';

const PostFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
    <TextInput label="Nome" source="name" />
    <TextInput label="Email" source="email" />
  </Filter>
);

function UserList(props: any) {
  return (
    <List title="Mostrar Usuários" filters={<PostFilter />} {...props}>
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="name" label="NOME" />
        <EmailField source="email" label="EMAIL" />
      </Datagrid>
    </List>
  );
}

export default UserList;
