import { Profile } from 'components/Profile/Profile';
import { UserCardLi, UsersBlockUl } from './UsersList.styled';

export default function UsersList({ users }) {
  return (
    <>
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
