import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  useListContext,
  ChipField
} from 'react-admin';

import { Typography } from '@material-ui/core';

const Aside = () => {
  const { data, ids } = useListContext();
  return (
    <div style={{ width: 200, margin: '1em' }}>
      <Typography variant="h6">Status Publicação</Typography>
      <Typography variant="body2">
        Total views: {ids.map(id => data[id]).reduce((sum, post) => sum + post.views, 0)}
      </Typography>
    </div>
  );
};

function PostList(props: any) {
  return (
    <List title="Listar Posts" aside={<Aside />} {...props}>
      <Datagrid>
        <TextField source="id" label="ID" />
        <TextField source="title" label="TITULO" />
        <TextField source="body" label="DESCRICAO" />
        <DateField source="publishedAt" label="PUBLICACAO" locales="pt-BR" />
        <TextField source="views" label="VISUALIZACOES  " />
        <ChipField source="category" label="TIPO" />
        <EditButton basePath="/posts" />
      </Datagrid>
    </List>
  );
}

export default PostList;
