import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import PostList from './components/PostList';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';

import authProvider from './services/authProvider';

import UserList from './components/UserList';

const dataProvider = jsonServerProvider('http://localhost:5000');

function App() {

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="posts"
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource name="users" list={UserList}/>
    </Admin>
  );
}

export default App;
