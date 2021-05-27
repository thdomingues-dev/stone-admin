import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';

import authProvider from './services/authProvider';

import UserList from './components/UserList';

import { createMuiTheme } from '@material-ui/core/styles';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import PeopleAlt from '@material-ui/icons/PeopleAlt';

const dataProvider = jsonServerProvider('http://localhost:5000');

const theme = createMuiTheme({
  overrides: {
    MuiTableCell: {
      sizeSmall: {
        padding: '16px 6px',
      }
    },
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: '#666'
      }
    }
  },
});

function App() {

  return (
    <Admin theme={theme} dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
        icon={VideoLibrary}
      />
      <Resource name="users" list={UserList} icon={PeopleAlt}/>
    </Admin>
  );
}

export default App;
