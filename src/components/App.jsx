import PilotList from './PilotList/PilotList';
import { Profile } from './Profile/Profile';
import users from './users.json';

import { FaBeer } from 'react-icons/fa';

const user1 = {
  id: 1,
  name: 'Lola',
  email: 'lola@gmail.com',
  age: 24,
  avatar:
    'https://todler.pl/28584-large_default/p4416-malpka-lola-w-sukience-32-cm-asi-0606240.webp',
};

const user2 = {
  id: 2,
  name: 'Max',
  email: 'max@gmail.com',
  age: 30,
  avatar:
    'https://fastly.picsum.photos/id/335/200/300.jpg?hmac=G81PbTg8uAk00mCq0eZdiTJwpa_-_FvFZJVhEGcouXQ',
};

export const App = () => {
  return (
    <>
      <h1>Top users</h1>
      <PilotList users={users} />

      <hr />
      <hr />

      <h2>
        Повторное использование компонента Profile с передачей пропса с данными
        по одному юзеру
      </h2>
      <Profile props={user1} />
      <Profile props={user2} />

      <hr />
      <hr />

      <h2>
        React Icons
        <FaBeer size="40" />
      </h2>
    </>
  );
};
