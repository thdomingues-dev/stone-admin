import {
  List,
  Datagrid,
  TextField,
  EmailField
} from 'react-admin';

function UserList(props: any) {
  return (
    <List title="Mostrar Usuários" {...props}>
      <Datagrid>
        <TextField source="id" label="Identificacao" />
        <TextField source="name" label="Titulo" />
        <EmailField source="email" label="Descricao" />
      </Datagrid>
    </List>
  );
}

export default UserList;
