import { Profile } from 'components/M1_Components_Collections_Styles/Profile/Profile';
import { UserCardLi, UsersBlockUl } from './UsersList.styled';

export default function UsersList({ users }) {
  return (
    <>
      <h3>
        Рендер массива компонентов с данными из JSON с использованием map:
      </h3>
      <UsersBlockUl>
        {users.map(user => (
          <UserCardLi key={user.id}>
            <Profile props={user} />
          </UserCardLi>
        ))}
      </UsersBlockUl>
    </>
  );
}
